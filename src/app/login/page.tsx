import { Card, CardContent, Divider, TextField, Typography } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scanner App - Login',
  description: 'Aplicatie de scanare a codurilor QR',
};

export default function Login() {
  return (
    <div className="px-4 py-6">
      <Card>
        <CardContent className="flex flex-col gap-2">
          <Typography variant="h5">Login</Typography>
          <Divider />
          <div className='flex flex-col gap-4'>
            <TextField type="text" id="email" label="Email" variant="outlined" />
            <TextField type="password" id="password" label="Password" variant="outlined" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
