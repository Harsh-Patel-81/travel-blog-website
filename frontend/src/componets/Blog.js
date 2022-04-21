import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardHeader, Avatar, CardMedia, CardContent,  Typography,Card, Box, IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Blog = (title,description, imageURL, userName , isUser, id) => {
  const navigate= useNavigate();
  const handleEdit=(e)=>{
    navigate(`/myblogs/${id}`)
  }
  //console.log(title,isUser);
  return (
    <div><Card sx={{ Width: "40%", margin: 'auto', mt:2, padding:2, boxShadow:"5px 5px 0px #ccc",":hover:":{
        boxShadow:"10px 10px 20px #ccc"
    }  }}>
      { isUser && (
        <Box display='flex'>
          <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><ModeEditOutlineIcon/></IconButton>
          <IconButton onClick={handleEdit}><DeleteForeverIcon/></IconButton>
        </Box>
      )

      }
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor:'red' }} aria-label="recipe">
         {userName.charAt[0]} 
        </Avatar>
        //{userName}
      }
      
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
    
  </Card></div>
  )
}

export default Blog