import { Card, CardContent, Typography } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scanner App - Login',
  description: 'Aplicatie de scanare a codurilor QR',
};

export default function Login() {
  return (
    <div className="">
      <Card>
        <CardContent>
          <Typography variant="h5">Login</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
