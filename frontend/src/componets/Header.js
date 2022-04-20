import React, { useState } from 'react'
import {AppBar, Typography ,Toolbar,Box,Button, Tabs,Tab} from '@mui/material'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const Header = () => {
  const isLoggedIn=useSelector((state)=>state.isLoggedIn);
  const [value, setValue]=useState();
  return <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(32,2,30,1) 0%, rgba(65,7,107,1) 50%, rgba(28,1,26,1) 100%)"}}>
      <Toolbar>
          <Typography variant="h4">BlogsApp</Typography>
          {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
              <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
              </Tabs>
          </Box>}
          <Box display="flex" marginLeft="auto">
           {!isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:'1', borderRadius:10}} color="warning">Login</Button>
            <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:'1', borderRadius:10}} color="warning">SignUp</Button> </>}
           {isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{margin:'1', borderRadius:10}} color="warning">Logout</Button>}
          </Box>
      </Toolbar>
  </AppBar>
}

export default Header