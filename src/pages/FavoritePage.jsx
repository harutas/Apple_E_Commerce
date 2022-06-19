import { Box, Divider, Typography, Button, Grid } from "@mui/material"

const FavoritePage = ({products, setProducts}) => {

  const items = products.filter((product) => {
    return product.isFavorite;
  });

  const listItems = items.map((item) => 
    <FavoriteItem item={item} key={item.productName} products={products} setProducts={setProducts} />
  );

  if (items.length === 0) {
    return (
      <Box className="container">
        <Typography textAlign={"center"} sx={{mt: 1}} variant="h5" component="h1">★お気に入り登録なし★</Typography>
      </Box>
    ) 
  }

  return (
    <Box className="container">
      <Typography sx={{mt: 1}} variant="h3" component="h1">Favorite Items</Typography>
      <Box sx={{pt: 1}}>
        <Divider></Divider>
        {listItems}
      </Box>
    </Box>
  )
}

const FavoriteItem = ({item, products, setProducts}) => {

  // お気に入りから削除
  const handleToggleFavorite = () => {
    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isFavorite = !product.isFavorite;
      }
      return product;
    });
    setProducts(newProductList);
  }
  
  return (
    <>
      <Grid container alignItems="center" sx={{my: 1}}>
        <Grid item xs={5} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image image={item.image}/>
        </Grid>
        <Box sx={{flexGrow: 1}}></Box>
        <Grid container item xs={7} sm={9} justifyContent="end">
            <Grid item sm={8} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Title name={item.productName}/>
            </Grid>
            <Grid item sm={4}>
              <Price price={item.price} />
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button sx={{minWidth: 170}} color="secondary" variant="contained" disableElevation>
                  カートに追加する
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end"}}>
                <Button sx={{minWidth: 170}} color="warning" variant="contained" disableElevation onClick={() => handleToggleFavorite()}>
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
    <Box className="img-container" sx={{width: "100%", height: 170, border: "solid 2px grey"}} >
      <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src={props.image}  alt="" />
    </Box>
  )
}

const Title = (props) => {
  return (
    <Typography variant="h5" component="h2">{props.name}</Typography>
  )
}

const Price = (props) => {
  return (
    <Box textAlign={"end"}>
      <Typography sx={{margin: 0}} variant="h6" paragraph={true}>{props.price.toLocaleString()}円</Typography>
    </Box>
  )
}

export default FavoritePage