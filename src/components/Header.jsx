import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppleIcon from '@mui/icons-material/Apple';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <AppBar position="static" theme={theme}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="apple"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
            >
            <AppleIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Apple E-Commerce
          </Typography>
          <Box sx={{flexGrow: 1}}/>
          <IconButton
            size="large"
            color="inherit"
            aria-label="favorite"
            component={Link}
            to="/favorite"
            >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            edge="end"
            size="large"
            color="inherit"
            aria-label="to shopping page"
            component={Link}
            to="/cart"
            >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default Header