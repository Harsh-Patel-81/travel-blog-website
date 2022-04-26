import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CardHeader, Avatar, CardMedia, CardContent, Typography, Card, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactReadMoreReadLess from "react-read-more-read-less";
import './Blog.css'


const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myblogs/${id}`)
  }
  console.log(title, isUser);

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:2000/api/blogs/${id}`).catch((err) => console.log(err))
    const data = res.data
    return data
  }

  const sendRequestForUpdata = async () => {
    const res = await axios.get("http://localhost:2000/api/blogs").catch(err => console.log(err));
    const data = await res.data;
    return data;
  }

  const handleDelete = () => {
    deleteRequest()
    sendRequestForUpdata()
    navigate('/')
  }

  return (
    <div>
      {""}
      <Card className="blog" sx={{
        width: "40%", margin: 'auto', mt: 2, padding: 2, color: "black", boxShadow: "5px 5px 10px #d84315", ":hover": {
          boxShadow: "10px 10px 20px #d84315"
        }
      }}>

        {isUser && (
          <Box display='flex'>
            <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}><ModeEditOutlineIcon color='warning' /></IconButton>
            <IconButton onClick={handleDelete}><DeleteForeverIcon color='error' /></IconButton>
          </Box>
        )
        }

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
            //{userName}
            //{userName.charAt[0]} 
          }

          title={title}

        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent style={{ position: 'relative' }}>
          <hr />
          <br />
          <Typography className='container' variant="body2" >

            <b>{userName}</b> {": "}
            <ReactReadMoreReadLess
              charLimit={200}
              readMoreText={"...Read more ▼"}
              readLessText={"...Read less ▲"}
              readMoreClassName="read-more-less--more"
              readLessClassName="read-more-less--less"
            >
              {description}
            </ReactReadMoreReadLess>
          </Typography>
        </CardContent>


      </Card>
    </div >
    //{description}
  )
}

export default Blog