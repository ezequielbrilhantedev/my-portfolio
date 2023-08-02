import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Navbar.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <AppBar
        style={{ background: '#fff' }}
        position="fixed"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                width: '100%',
              }}
            >
              <ul className="ulTitle">
                <li>
                  <Link className="link" to="/">
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/sobre">
                    Sobre
                  </Link>
                </li>
                <li>Tech Stack</li>
                <li>Contatos</li>
              </ul>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  color: '#666666',
                }}
              >
                <ul className="ulIcons">
                  <li>
                    <GitHubIcon />
                  </li>
                  <li>
                    <TwitterIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
