import {
  Container,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './About.scss';

function About() {
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
          alignItems: 'flex-start',
          gap: '38px',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#42446e',
              fontSize: '42px',
              fontWeight: 700,
              marginBottom: '38px',
            }}
          >
            Sobre mim.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#666',
              fontSize: '18px',
              fontWeight: 400,
              fontStyle: 'normal',
              width: '60%',
            }}
          >
            The Generator App is an online tool that helps
            you to export ready-made templates ready to work
            as your future website. It helps you to combine
            slides, panels and other components and export
            it as a set of static files: HTML/CSS/JS.
          </Typography>
        </Box>

        <Box
          sx={{
            width: '80%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#42446e',
              fontSize: '42px',
              fontWeight: 700,
              marginBottom: '38px',
            }}
          >
            Experiência de Trabalho
          </Typography>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                color: '#666',
                fontSize: '20px',
                fontWeight: 400,
              }}
            >
              Frontend Developer
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                color: '#a7a7a7',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <BusinessIcon /> Accenture Brasil
                <Box
                  sx={{
                    width: '39%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div className="location">
                    <LocationOnIcon /> Brasil
                  </div>
                  <Box>Julho 2021 - o momento</Box>
                </Box>
              </Box>
            </Typography>
          </Box>
          <br />
          <Divider />
          <br />
          <Box>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                color: '#666',
                fontSize: '20px',
                fontWeight: 400,
              }}
            >
              Frontend Developer
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                color: '#a7a7a7',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <BusinessIcon /> IntMed Software
                <Box
                  sx={{
                    width: '39%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div className="location">
                    <LocationOnIcon /> Brasil
                  </div>
                  <Box>Janeiro 2020 - Julho 2021</Box>
                </Box>
              </Box>
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              color: '#42446e',
              fontSize: '42px',
              fontWeight: 700,
              marginBottom: '38px',
            }}
          >
            Formação
          </Typography>
          <Box>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                color: '#666',
                fontSize: '20px',
                fontWeight: 400,
              }}
            >
              Bacharel em Sistema de Informação
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                color: '#a7a7a7',
                fontSize: '12px',
                fontWeight: 500,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <BusinessIcon /> Unifametro
                {/* <Box
                  sx={{
                    width: '39%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div className="location">
                    <LocationOnIcon /> Brasil
                  </div>
                  <Box>Janeiro 2020 - Julho 2021</Box>
                </Box> */}
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default About;
