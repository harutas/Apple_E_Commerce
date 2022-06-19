import { Box, Divider, Typography, Button, Grid } from "@mui/material"

const FavoritePage = (props) => {

  return (
    <div className="container">
      <Typography sx={{mt: 1}} variant="h3" component="h1">Favorite Items</Typography>
      <Box sx={{pt: 1}}>
        <Divider></Divider>
        <FavoriteItem name="MacBook Air" image="images/macbook-air.jpeg"></FavoriteItem>
        <FavoriteItem name="iPhone 13 Pro" image="images/iphone13pro.jpeg"></FavoriteItem>
        <FavoriteItem name="iPad Air" image="images/ipad-air.jpeg"></FavoriteItem>
      </Box>
    </div>
  )
}

const FavoriteItem = (props) => {
  return (
    <>
      <Grid container alignItems="center" sx={{my: 1}}>
        <Grid item xs={5} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image image={props.image}/>
        </Grid>
        <Box sx={{flexGrow: 1}}></Box>
        <Grid container item xs={7} sm={9} justifyContent="end">
            <Grid item sm={8} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Title name={props.name}/>
            </Grid>
            <Grid item sm={4}>
              <Price/>
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button sx={{minWidth: 170}} color="secondary" variant="contained" disableElevation>
                  カートに追加する
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end"}}>
                <Button sx={{minWidth: 170}} color="warning" variant="contained" disableElevation>
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
      <Typography sx={{margin: 0}} variant="h6" paragraph={true}>148,280円</Typography>
    </Box>
  )
}

export default FavoritePage