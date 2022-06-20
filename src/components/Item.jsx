import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Box, createTheme, Stack, ThemeProvider, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { pink } from '@mui/material/colors';

const Item = ({item, products, setProducts, cart, setCart}) => {

  // お気に入りの切替
  const handleToggleFavorite = () => {
    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isFavorite = !product.isFavorite;
      }
      return product;
    });
    setProducts(newProductList);
  }

  // 買い物かご切替
  const handeleToggleShoppingCart = (item) => {
    if (!item.isInCart) addShoppingCart(item);
    else removeShoppingCart(item);
  }

  // 買い物かごへの追加
  const addShoppingCart = () => {

    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isInCart = !product.isInCart;
      }
      return product;
    });
    setProducts(newProductList);

    setCart(prevState => [...prevState, {
      ...item,
      amount: 1
    }]);

  }

  // 買い物かごからの削除
  const removeShoppingCart = () => {
    
    const newCartList = [...cart].filter((product) => {
      return product.productName !== item.productName;
    });
    setCart(newCartList);

    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isInCart = !product.isInCart;
      }
      return product;
    });
    setProducts(newProductList);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: pink[500]
      }
    }
  })

  return (
    <Box m={2}>
      <Card sx={{ minWidth: 275}} className="rem20">
        <ProductCardContent>
          <Image image={item.image} />
          <Title title={item.productName} />
          <Price price={item.price} />
          <Stack direction={"row"} justifyContent={"end"} alignItems={"center"}>
            <ThemeProvider theme={theme}>
              <IconButton color={item.isFavorite ? "primary" : "default"} aria-label="favorite" onClick={() => handleToggleFavorite()}>
                <FavoriteIcon />
              </IconButton>
              <IconButton color={item.isInCart ? "secondary" : "default"} aria-label="add to shopping cart" sx={{marginLeft: 1}} onClick={() => handeleToggleShoppingCart(item)}>
                <AddShoppingCartIcon />
              </IconButton>
            </ThemeProvider>
          </Stack>
        </ProductCardContent>
      </Card>
    </Box>
  )
}



const ProductCardContent = styled(CardContent)`
  &:last-child {
  padding-bottom: 16px;
 } 
`

const Image = (props) => {
  return (
    <Box sx={{height: 300}} >
      <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={props.image} className="" alt="" />
    </Box>
  )
}

const Title = (props) => {
  return (
    <Box textAlign={"start"} ps={1}>
      <Typography sx={{fontWeight: "bold"}} gutterBottom={true} variant="h5" component="h3">{props.title}</Typography>
    </Box>
  )
}

const Price = (props) => {
  return (
    <Box textAlign={"end"} pe={1}>
      <Typography sx={{margin: 0}} paragraph={true}>{props.price.toLocaleString()}円(税込)から</Typography>
    </Box>
  )
}

export default Item