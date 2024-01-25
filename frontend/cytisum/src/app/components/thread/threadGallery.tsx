"use client";

import React, { useEffect, useReducer } from 'react'

import Image from 'next/image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import threads from '../../placeholder_data/placeholder_data';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
  setThreadNumber,
  openThread
} from './threadSlice'
import { mapStateToProps } from './threadContainer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const ThreadGallery = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state: any) => state.thread.open)
  const focusedThread = useSelector((state: any) => state.thread.threadNumber)
  const [, forceUpdate] = useReducer(x => x + 1, 0);

    return (
      <ImageList cols={7} rowHeight={164} sx={{height: "70%", alignContent:"start"}}>
          {threads["threads"].map((thread, index) => (
            <ImageListItem 
              key={index} 
              sx={{height: "164px", width: "164px", alignContent:"start"}}
              onMouseEnter={() => {
                  if (!visible) {
                    dispatch(setThreadNumber(thread.number))
                    forceUpdate()
                  }
                }}
              onMouseLeave={() => {
                  if (!visible) {
                    dispatch(setThreadNumber(-1))
                    forceUpdate()
                  }
                }}
              onClick={() => {
                  if (!visible) {
                    dispatch(openThread())
                    forceUpdate()
                  }
                }}
              >
              <Image
                src = {thread.filenames.length > 0 ? thread.filenames[0] : ""}
                alt = {""}
                fill = {true}
                style = {{marginTop: "-164px"}}
              />
              <div style={focusedThread == thread.number ? {marginTop: "-164px", height: "164px", width: "164px", opacity: "100%", backgroundColor: "rgba(160, 160, 160, .6)", zIndex: 99} : {opacity: "0%"}} >
                <Typography noWrap variant="h6" sx={{userSelect: "none"}}>
                  {thread.subject}
                </Typography>
                <Typography variant="body2" sx={{display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical", WebkitLineClamp: thread.subject == null ? 8 : 6, userSelect: 'none'}}>
                  {thread.comment}
                </Typography>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
    )
}

export default connect(mapStateToProps)(ThreadGallery);