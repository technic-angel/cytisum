"use client"

import React from 'react'
import { Avatar, Card, Stack, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import  Models from "../../interfaces/chan_interface"


const Post = (props: {Post: Models.Post}) => {
  const { comment, datetime, number, name, subject,  } = props.Post;
  return (
    <Card>
        <Box sx={{ p: "15px" }}>
          <Stack spacing={2} direction="row">
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                 <Stack spacing={2} direction="row" alignItems="center">
                  {/* <Avatar src={ava}></Avatar> */}
                  {/* User name */}
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkRed" }}>
                    {subject}
                  </Typography>
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
                    {name}
                  </Typography>
                  <Typography sx={{ color: "neutral.grayishBlue" }}>{datetime}</Typography>
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
                    No. {number}
                  </Typography>
                </Stack>
            </Stack>
              {comment}
            </Box>
          </Stack>
        </Box>
      </Card>
  )
}

export default Post