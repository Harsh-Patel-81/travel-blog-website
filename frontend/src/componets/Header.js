import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';
const Header = ({ setClickOnLogIn }) => {

  const dispath = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return <AppBar position='sticky' sx={{ background: "linear-gradient(90deg, rgba(32,2,30,1) 0%, rgba(65,7,107,1) 50%, rgba(28,1,26,1) 100%)" }}>
    <Toolbar>
      <Typography variant="h4">TravelDiaries</Typography>
      {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
        <Tabs indicatorColor="white" textColor='white' value={value} onChange={(e, val) => setValue(val)}>
          <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
          <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
          <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
        </Tabs>
      </Box>}
      <Box display="flex" marginLeft="auto">
        {!isLoggedIn && <Button onClick={() => setClickOnLogIn(false)} LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: '1', borderRadius: 10 }} color="warning">Login</Button>
        }
        {isLoggedIn && <Button onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/" variant='contained' sx={{ margin: '1', borderRadius: 10 }} color="warning">Logout</Button>}
      </Box>
    </Toolbar>
  </AppBar>
}

export default Header