import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';
import { GiHamburgerMenu } from "react-icons/gi"
import './Header.css'

const Header = ({ setClickOnLogIn }) => {

  const dispath = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return <AppBar position='sticky' sx={{ background: "linear-gradient(90deg, rgba(32,2,30,1) 0%, rgba(65,7,107,1) 50%, rgba(28,1,26,1) 100%)" }}>

    <Toolbar>
      <div className='head1'>
        <Typography variant="">TravelDiaries</Typography>
      </div>
      {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
        <Tabs indicatorColor="white" textColor='white' value={value} onChange={(e, val) => setValue(val)}>
          <div className='head'>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
          </div>
        </Tabs>

      </Box>}
      <Box display="flex">
        {!isLoggedIn && <Button onClick={() => setClickOnLogIn(false)} LinkComponent={Link} to="/auth" color="warning">Login</Button>
        }
        {isLoggedIn && <Button onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/" color="warning">Logout</Button>}
      </Box>

      {/* <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div> */}


    </Toolbar>



  </AppBar >
}

export default Header