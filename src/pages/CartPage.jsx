// router
import { Link } from "react-router-dom";
// hooks
import { useStoreContext } from '../context/StoreContext';
// components
import FavoritePage from "./FavoritePage";
// mui
import { Box, Typography, Grid, FormControl, Select, InputLabel, MenuItem, Button, Divider } from "@mui/material";

const CartPage = () => {

  const { products, setProducts, cart, setCart } = useStoreContext();

  if (cart.length === 0) return (
    <>
      <Box className="container">
        <Typography sx={{mt: 1}} variant="h3" component="h1">Shopping Cart</Typography>
        <Typography textAlign={"center"} sx={{mt: 1}} variant="h5" component="h1">★カートは空です★</Typography>
      </Box>
      <FavoritePage />
    </>
  );

  const items = cart;
  const listItems = items.map((item) => 
    <CartItem item={item} key={item.productName} />
  );

  // 小計
  const totalQuantity = () => {
    return cart.reduce(((previousValue, currentValue) => previousValue + currentValue.quantity), 0);
  };

  // 合計
  const totalPayment = () => {
    return cart.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price * currentValue.quantity;
    }, 0);
  };

  // 購入
  const buyProducts = () => {
    if (window.confirm("購入を確定します。よろしいですか？")) {
      resetIsInCart();
      setCart([]);
      alert("おめでとうございます。購入が完了しました。");
    } else {
      return ;
    }
  };

  // 商品のisInCart情報をリセット
  const resetIsInCart = () => {
    const newProductList = products.map((product) => {
      return Object.assign({...product}, {isInCart : false});
    })
    setProducts(newProductList);
  };

  return (
    <>
      <Box className="container">
        <Typography sx={{mt: 1}} variant="h3" component="h1">Shopping Cart</Typography>

        <Grid container>

          <Grid item xs={12} md={8}>
            <Box className="bg-white" sx={{p: 1, mr: {xs: 0, md: 1}, my: 1, border: "solid 1px grey"}}>
              <Divider/>
              {listItems}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="bg-white" sx={{width: "100%", border: "solid 1px grey", p: 2, mt: 1}}>

              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography sx={{m: 0}} variant="h6" paragraph={true}>小計</Typography>
                <Typography sx={{m: 0}} variant="h6" paragraph={true}>{totalQuantity()}個</Typography>
              </Box>

              <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography sx={{m: 0}} variant="h6" paragraph={true}>合計</Typography>
                <Typography sx={{m: 0}} variant="h6" paragraph={true}>{totalPayment().toLocaleString()}円</Typography>
              </Box>

              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button
                  onClick={() => buyProducts()}
                  sx={{minWidth: 170}}
                  color="primary"
                  variant="contained"
                  disableElevation
                >
                  購入する
                </Button>
              </Box>

            </Box>
          </Grid>
          
        </Grid>
      </Box>
      <FavoritePage />
    </>
  );
}

const CartItem = ({item}) => {

  const  { cart, setCart, handleToggleShoppingCart } = useStoreContext();

  // 商品の数量を変更
  const changeProductQuantity = (event) => {
    const newCartList = cart.map((product) => {
      if (product.productName === item.productName){
        product.quantity = event.target.value;
      }
      return product;
    });
    setCart(newCartList);
  };

  return (
    <>
      <Grid container sx={{my: 1}}>
        <Grid item xs={5} sm={3}>
          <Link to={`/${item.productName}`}>
            <Image image={item.image} />
          </Link>
        </Grid>
        <Box sx={{flexGrow: 1}}></Box>
        <Grid container item xs={7} sm={9} justifyContent="end">
          <Grid item sm={8} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Title title={item.productName} />
          </Grid>
          <Grid item sm={4} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end"}}>
            <Price price={item.price} />
            <Quantity
              quantity={item.quantity}
              onChange={(event) => changeProductQuantity(event)}
            />
            <Box sx={{display: "flex", justifyContent: "end", my: 1, mr: 1}}>
              <Button
                sx={{minWidth: 170}}
                color="secondary"
                variant="contained"
                disableElevation
                onClick={() => handleToggleShoppingCart(item)}
              >
                カートから削除
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Divider/>
    </>
  );
}

const Image = (props) => {
  return (
    <Box sx={{width: "100%", height: 170}} >
      <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={props.image} alt="" />
    </Box>
  );
}

const Title = (props) => {
  return (
    <Typography variant="h5" component="h2">{props.title}</Typography>
  );
}

const Price = (props) => {
  return (
    <Typography sx={{m: 0, mr: 1}} variant="h6" paragraph={true}>{props.price.toLocaleString()}円</Typography>
  );
}

const Quantity = (props) => {

  return (
    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <InputLabel id="quantity">quantity</InputLabel>
        <Select
          labelId="quantity"
          id="quantity"
          defaultValue={props.quantity}
          value={props.quantity}
          label="quantity"
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={props.onChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CartPage;