import { Box, Container, Typography } from '@mui/material';
import ProfileImg from '../../assets/images/FotoPerfil.jpg';

import './Home.scss';

function Home() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: 'auto',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#42446E',
              fontSize: '58px',
              fontWeight: '700',
              letterSpacing: '-1px',
              width: '56%',
              height: '297px',
            }}
          >
            Olá,
            <br />
            meu nome é Ezequiel,
            <br /> e sou Frontend Developer.
          </Typography>
          <Box
            sx={{
              background:
                'linear-gradient(to right, #E70FAA, #00C0FD)',
              borderRadius: '230px',
              flexShrink: '0',
              width: '370px',
              height: '370px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              className="imageProfile"
              src={ProfileImg}
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
