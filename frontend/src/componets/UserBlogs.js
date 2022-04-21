import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from "react";
import Blog from "./Blog";

const UserBlogs = () => {
  const id=localStorage.getItem("userId");
  const [user, setUser] = useState();
  const sendRequest=async()=>{
    const res= await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch((err)=>console.log(err));
    const data=await res.data;
    return data;
  }
 

  useEffect(()=>{
    sendRequest().then((data)=>setUser(data.user));
  },[])
  console.log(user);
  return (
    <div>{""}{user && user.blogs && user.blogs.map((blog,index)=><Blog isUser={true} key={index} title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.user.name} />)}</div>
  )
}

export default UserBlogs