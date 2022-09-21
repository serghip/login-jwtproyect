import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Username() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        sx={{
            width:'300px'}}
        helperText="Ingrese su nombre de usuario"
        id="demo-helper-text-aligned"
        label="Usuario"
      />
    </Box>
  );
}
