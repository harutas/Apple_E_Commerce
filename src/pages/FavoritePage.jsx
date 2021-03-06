// router
import { Link } from "react-router-dom";
// hooks
import { useStoreContext } from '../context/StoreContext';
// mui
import { Box, Divider, Typography, Button, Grid } from "@mui/material";

const FavoritePage = () => {

  const { products } = useStoreContext();

  const items = products.filter((product) => {
    return product.isFavorite;
  });

  const listItems = items.map((item) => 
    <FavoriteItem item={item} key={item.productName} />
  );

  if (items.length === 0) {
    return (
      <Box className="container">
        <Typography sx={{mt: 1}} variant="h3" component="h1">Favorite Items</Typography>
        <Typography textAlign={"center"} sx={{mt: 1}} variant="h5" component="h1">★お気に入り登録なし★</Typography>
      </Box>
    );
  }

  return (
    <Box className="container" sx={{mb: 2}}>
      <Typography sx={{mt: 1}} variant="h3" component="h1">Favorite Items</Typography>
      <Box className="bg-white" sx={{mt: 1, p: 1, border: "solid 1px grey",}}>
        <Divider></Divider>
        {listItems}
      </Box>
    </Box>
  );
}

const FavoriteItem = ({item}) => {

  const { handleToggleFavorite, handleToggleShoppingCart } = useStoreContext();
  
  return (
    <>
      <Grid container alignItems="center" sx={{my: 1}}>
        <Grid item xs={5} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Link to={`/${item.productName}`}>
            <Image image={item.image}/>
          </Link>
        </Grid>
        <Box sx={{flexGrow: 1}}></Box>
        <Grid container item xs={7} sm={9} justifyContent="end">
            <Grid item sm={8} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Title name={item.productName}/>
            </Grid>
            <Grid item sm={4}>
              <Price price={item.price} />
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button
                  sx={{minWidth: 170}}
                  color="secondary"
                  variant="contained"
                  disableElevation
                  onClick={() => handleToggleShoppingCart(item, 1)}
                >
                  {item.isInCart ? "カートから削除" : "カートに追加する"}
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end"}}>
                <Button
                  sx={{minWidth: 170}}
                  color="warning"
                  variant="contained"
                  disableElevation
                  onClick={() => handleToggleFavorite(item)}
                >
                  お気に入りから削除
                </Button>
              </Box>
            </Grid>
        </Grid>
      </Grid>
      <Divider/>
    </>
  )
}

const Image = (props) => {
  return (
    <Box sx={{width: "100%", height: 170}} >
      <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={props.image}  alt="" />
    </Box>
  );
}

const Title = (props) => {
  return (
    <Typography variant="h5" component="h2">{props.name}</Typography>
  );
}

const Price = (props) => {
  return (
    <Box textAlign={"end"}>
      <Typography sx={{margin: 0}} variant="h6" paragraph={true}>{props.price.toLocaleString()}円</Typography>
    </Box>
  );
}

export default FavoritePage;