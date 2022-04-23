import Header from "./componets/Header";
import Auth from "./componets/Auth";
import Blogs from "./componets/Blogs";
import UserBlogs from "./componets/UserBlogs";
import BlogDetial from "./componets/BlogDetail";
import AddBlog from "./componets/AddBlog";


import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react"


function App() {
  const dispath = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login())
    }
  }, [dispath])

  return <React.Fragment>
    <header>
      <Header />
      {/* <Route path="/blogs" element={<Blogs />} /> */}
      {/* <Blogs /> */}
    </header>
    <main>
      <Routes>
        {/* {!isLoggedIn ? <Route path="/auth" element={<Auth />} /> : */}
        <>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetial />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/' element={<Blogs />} />
        </>
        {/* } */}
      </Routes>
    </main>
  </React.Fragment>;
}

export default App;
