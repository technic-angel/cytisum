import React from 'react'
import { Avatar, Card, Stack, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import  Models from "../../interfaces/chan_interface"


const Post = (props: {Post: Models.Post}) => {
  const { com, now, no, name, sub } = props.Post;
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
                    {sub}
                  </Typography>
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
                    {name}
                  </Typography>
                  <Typography sx={{ color: "neutral.grayishBlue" }}>{now}</Typography>
                  <Typography fontWeight="bold" sx={{ color: "neutral.darkBlue" }}>
                    No. {no}
                  </Typography>
                </Stack>
            </Stack>
              {com}
            </Box>
          </Stack>
        </Box>
      </Card>
  )
}

export default Post