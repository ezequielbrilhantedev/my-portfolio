import { Container, Box, Typography } from '@mui/material';

export const MyStack = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: 'auto',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#42446E',
              fontSize: '58px',
              fontWeight: '700',
              letterSpacing: '-1px',
              width: 'auto',
              height: 'auto',
            }}
          >
            Minhas Stacks
          </Typography>
          <Typography
            variant={'subtitle1'}
            textAlign={'center'}
          >
            Tecnologias que possuo mais experiência.
          </Typography>
        </Box>
        <Box></Box>
      </Container>
    </>
  );
};
