import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const ProductDetailPage = ({products, setProducts, cart, setCart}) => {
  const [ quantity, setQuantity ] = useState(1);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const params = useParams();
  const product = products.find((product) => {
    return product.productName === params.productName;
  });

  // お気に入りの切替
  const handleToggleFavorite = (item) => {
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
  const addShoppingCart = (item) => {

    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isInCart = !product.isInCart;
      }
      return product;
    });
    setProducts(newProductList);

    setCart(prevState => [...prevState, {
      ...item,
      quantity: quantity
    }]);

  }

  // 買い物かごからの削除
  const removeShoppingCart = (item) => {
    
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

  return (
    <div className="container">
      <Typography sx={{mt: 1}} variant="h3" component="h1">Product Datail</Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box sx={{border: "solid 2px grey", p: 1, mr: {xs: 0, md: 1}, mb: 1}}>
            <Box sx={{width: "100%", height: 300}} >
              <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={product.image} alt="" />
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Title title={product.productName} />
              <Price price={product.price} />
            </Box>
            <Box>
              <Description description={product.description} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{width: "100%", border: "solid 2px grey", p: 1}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography sx={{m: 0}} paragraph={true}>単価</Typography>
              <Price price={product.price}/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography sx={{m: 0}} paragraph={true}>数量</Typography>
              <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">quantity</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  defaultValue={quantity}
                  value={quantity}
                  label="quantity"
                  onChange={(event) => handleChange(event)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <Typography sx={{m: 0}} paragraph={true}>合計</Typography>
              <Price price={product.price * quantity} />
            </Box>
            <Box>
              <Box sx={{display: "flex", justifyContent: "end", my:1}}>
                <Button onClick={() => handleToggleFavorite(product)} sx={{minWidth: 170}} color="warning" variant="contained" disableElevation>
                  {product.isFavorite ? "お気に入りから削除" : "お気に入りに追加"}
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button onClick={() => handeleToggleShoppingCart(product)} sx={{minWidth: 170}} color="secondary" variant="contained" disableElevation>
                  {product.isInCart ? "カートから削除" : "カートに追加する"}
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button onClick={() => navigate('/cart')} sx={{minWidth: 170}} color="primary" variant="contained" disableElevation>
                  カートに移動する
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

const Title = (props) => {
  return (
    <Typography variant="h4" component="h2">{props.title}</Typography>
  )
}

const Price = (props) => {
  return (
    <Typography sx={{m: 0}} variant="h6" paragraph={true}>{props.price.toLocaleString()}円</Typography>
  )
}

const Description = (props) => {
  return (
    <Box sx={{width: "100%", border: "solid 2px grey", p: 1}}>
      <Typography paragraph={true}>{props.description}</Typography>
    </Box>
  )
}

export default ProductDetailPage