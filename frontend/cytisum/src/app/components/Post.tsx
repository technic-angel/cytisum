import React from 'react'
import { Avatar, Card, Stack, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import  Models from "../../interfaces/chan_interface"


const Post = (props: any) => {
  const { post } = props;
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
                    {props.post.sub}
                  </Typography>
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
                    {props.post.name}
                  </Typography>
                  <Typography sx={{ color: "neutral.grayishBlue" }}>{props.post.now}</Typography>
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
                    No. {props.post.no}
                  </Typography>
                </Stack>
            </Stack>
              {props.post.com}
            </Box>
          </Stack>
        </Box>
      </Card>
  )
}

export default Post