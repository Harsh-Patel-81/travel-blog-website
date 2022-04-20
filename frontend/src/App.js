import Header from "./componets/Header";
import Auth from "./componets/Auth";
import Blogs from "./componets/Blogs";
import UserBlogs from "./componets/UserBlogs";
import BlogDetial from "./componets/BlogDetail";
import AddBlog from "./componets/AddBlog";


import React from "react";
import { Route, Routes} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/myBlogs" element={<UserBlogs />}/>
        <Route path="/myBlogs/:id" element={<BlogDetial />}/>
        <Route path="/blogs/add" element={<AddBlog />}/>
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;
