"use client";

import React, { StrictMode } from 'react'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import threads from '../../placeholder_data/placeholder_data';
import Typography from '@mui/material/Typography';
import { useState, createContext, useContext } from 'react';
import store from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFocusedThread,
  showContainer,
  hideContainer,
  selectFocusedThread,
  selectVisible
} from './threadSlice'
import { Provider, ReactReduxContext } from 'react-redux';

import { threadContext } from './threadContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const popularImages = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
const ThreadGallery = () => {
  const context = useContext(threadContext)
  const dispatch = useDispatch()
  const visible = useSelector(selectVisible)
  const focusedThread = useSelector(selectFocusedThread)
    return (
      <StrictMode>
        <Provider store={store}>
          <ImageList cols={7} rowHeight={164} sx={{height: "100%", alignContent:"start"}}>
              {threads["threads"].map((thread, index) => (
                <ImageListItem 
                  key={index} 
                  sx={{height: "164px", width: "164px", alignContent:"start"}}
                  onMouseEnter={() => {
                      if (!visible)
                        dispatch(setFocusedThread(thread.number))
                    }}
                  onMouseLeave={() => {
                      if (!visible)
                        dispatch(setFocusedThread(-1))
                    }}
                  onClick={() => {
                      if (!visible)
                        dispatch(showContainer())
                    }}
                  >
                  <img
                    srcSet={`${popularImages[index % popularImages.length]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${popularImages[index % popularImages.length].img}?w=164&h=164&fit=crop&auto=format`}
                    alt={thread.subject}
                    loading="lazy"
                    height="164px"
                    width="164px"
                  />
                  <div style={focusedThread == thread.number ? {marginTop: "-164px", height: "164px", width: "164px", opacity: "100%", backgroundColor: "rgba(160, 160, 160, .6)"} : {opacity: "0%"}} >
                    <Typography noWrap variant="h6">
                      {thread.subject}
                    </Typography>
                    <Typography variant="body2" sx={{display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical", WebkitLineClamp: thread.subject == null ? 8 : 6}}>
                      {thread.comment}
                    </Typography>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
        </Provider>
      </StrictMode>
    )
}

export default ThreadGallery;