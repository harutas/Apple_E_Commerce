// router
import { Link } from 'react-router-dom';
// hooks
import { useStoreContext } from '../context/StoreContext';
// mui
import { Card, CardContent,IconButton, Box, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
// mui emotion
import styled from '@emotion/styled';
// mui icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = ({item}) => {

  const { handleToggleFavorite, handeleToggleShoppingCart } = useStoreContext();

  return (
    <Box m={2}>
      <Card sx={{ minWidth: 275}} className="rem21">
        <ProductCardContent>
          <Link to={`/${item.productName}`}>
            <Image image={item.image} />
          </Link>
          <Title title={item.productName} />
          <Price price={item.price} />
          <Stack direction={"row"} justifyContent={"end"} alignItems={"center"}>
            <ThemeProvider theme={theme}>
              <IconButton
                color={item.isFavorite ? "primary" : "default"}
                aria-label="favorite"
                onClick={() => handleToggleFavorite(item)}
                >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                color={item.isInCart ? "secondary" : "default"}
                aria-label="add to shopping cart"
                sx={{marginLeft: 1}}
                onClick={() => handeleToggleShoppingCart(item)}
                >
                <AddShoppingCartIcon />
              </IconButton>
            </ThemeProvider>
          </Stack>
        </ProductCardContent>
      </Card>
    </Box>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500]
    }
  }
});

const ProductCardContent = styled(CardContent)`
  &:last-child {
  padding-bottom: 16px;
 } 
`;

const Image = (props) => {
  return (
    <Box sx={{height: 300}} >
      <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={props.image} className="" alt="" />
    </Box>
  );
}

const Title = (props) => {
  return (
    <Box textAlign={"start"} ps={1}>
      <Typography sx={{fontWeight: "bold"}} gutterBottom={true} variant="h5" component="h3">{props.title}</Typography>
    </Box>
  );
}

const Price = (props) => {
  return (
    <Box textAlign={"end"} pe={1}>
      <Typography sx={{margin: 0}} paragraph={true}>{props.price.toLocaleString()}円(税込)から</Typography>
    </Box>
  );
}

export default Item;