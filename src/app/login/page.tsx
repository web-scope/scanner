import { Slider } from '@mui/material';

export default function Login() {
  return (
    <div>
      <Slider defaultValue={30} />
      <Slider defaultValue={30} className="text-teal-600" />
    </div>
  );
}
