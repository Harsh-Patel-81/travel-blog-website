import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetail = () => {
  const [blog, setBlog]=useState();
  const id = useParams().id;
  console.log(id);
  const fetchDetails=async ()=>{
    const res=await axios.get(`http://localhost:5000/api/blog/${id}`).catch(err=>console.log(err));
    const data=await res.data;
    return data;
  }
  useEffect(()=>{
    fetchDetails().then((data)=>setBlog(data.blog));
  }, [id]);
  console.log(blog);

  return (
    <div></div>
  )
}

export default BlogDetail
