import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  return (
    <Stack
      p={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Stack
        py={10}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <h1>Checkout Success</h1>
        <p>Thank you for your purchase!</p>
        <Stack py={5}>
          <Button variant="contained" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CheckoutSuccess;