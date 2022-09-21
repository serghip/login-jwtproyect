import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonLogin() {
  return (
    <Stack sx={{m: 3 }} spacing={2} direction="row">
      <Button size="large" variant="contained">Iniciar sesión</Button>
    </Stack>
  );
}
