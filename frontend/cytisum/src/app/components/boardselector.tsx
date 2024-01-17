"use client";

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import boards from '../placeholder_data/placeholder_data';

export default function BoardSelector() {
    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="boardSelector"
          //     this is bothering me. -A
          //              v
          options={boards[0].map((option) => (option.title) )}
          renderInput={(params) => <TextField {...params} label="Boards" />}
        />
      </Stack>
    );
  }