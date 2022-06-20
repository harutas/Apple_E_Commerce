import { Box, Typography, Grid, FormControl, OutlinedInput, InputAdornment, Button, Divider } from "@mui/material"

const CartPage = ({products, setProducts, cart, setCart}) => {
  if (cart.length === 0) return (
    <Box className="container">
      <Typography textAlign={"center"} sx={{mt: 1}} variant="h5" component="h1">★カートは空です★</Typography>
    </Box>
  )

  const items = cart;
  const listItems = items.map((item) => 
    <CartItem
      item={item}
      key={item.productName}
      products={products}
      setProducts={setProducts}
      cart={cart}
      setCart={setCart}
    />
  )
  return (
    <div className="container">
      <Typography sx={{mt: 1}} variant="h3" component="h1">Shopping Cart</Typography>

      <Grid container>

        <Grid item xs={12} md={8} >
          <Box sx={{p: 1, mr: {xs: 0, md: 1}, mb: 1}}>
            <Divider/>
            {listItems}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{width: "100%", border: "solid 2px grey", p: 2}}>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Typography sx={{m: 0}} variant="h6" paragraph={true}>小計</Typography>
              <Typography sx={{m: 0}} variant="h6" paragraph={true}>10個</Typography>
            </Box>

            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <Typography sx={{m: 0}} variant="h6" paragraph={true}>合計</Typography>
              <Typography sx={{m: 0}} variant="h6" paragraph={true}>148,200円</Typography>
            </Box>

            <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
              <Button sx={{minWidth: 170}} color="primary" variant="contained" disableElevation>
                購入する
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

const CartItem = ({item, products, setProducts, cart, setCart}) => {

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
  return (
    <>
      <Grid container sx={{my: 1}}>
        <Grid item xs={3} >
          <Image image={item.image} />
        </Grid>
        <Grid item xs={5} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Title title={item.productName} />
        </Grid>
        <Grid item xs={4} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end"}}>
          <Price price={item.price} />
          <Amount amount={item.amount} />
          <DeleteCartButton onClick={() => removeShoppingCart()} />
        </Grid>
      </Grid>
      <Divider/>
    </>
  )
}

const Image = (props) => {
  return (
    <Box sx={{width: "100%", height: 170, border: "solid 2px grey"}} >
      <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={props.image} alt="" />
    </Box>
  )
}

const Title = (props) => {
  return (
    <Typography variant="h5" component="h2">{props.title}</Typography>
  )
}

const Price = (props) => {
  return (
    <Typography sx={{m: 0}} variant="h6" paragraph={true}>{props.price.toLocaleString()}円</Typography>
  )
}

const Amount = (props) => {

  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Typography sx={{m: 0}} paragraph={true}>数量</Typography>
      <FormControl sx={{ m: 1, maxWidth: 100}} variant="outlined">
        <OutlinedInput
          inputProps={{min: "0", max: "5"}}
          id="delete-from-cart"
          type='number'
          name="delete-from-cart"
          value={props.amount}
          // onChange={handleChange}
          endAdornment={<InputAdornment position="end">個</InputAdornment>}
          size="small"
        />
      </FormControl>
    </Box>
  )
}

const DeleteCartButton = (props) => {
  return (
    <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
      <Button sx={{minWidth: 135}} color="primary" variant="contained" disableElevation onClick={props.onClick}>
        カートから削除
      </Button>
    </Box>
  )
}

export default CartPage