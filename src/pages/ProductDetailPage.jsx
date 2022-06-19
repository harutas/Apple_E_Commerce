import { Typography, Box, Button, Grid } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProductDetailPage = () => {
  return (
    <div className="container">
      <Typography sx={{mt: 1}} variant="h3" component="h1">Product Datail</Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box sx={{border: "solid 2px grey", p: 1, mr: {xs: 0, md: 1}, mb: 1}}>
            <Box sx={{width: "100%", height: 300}} >
              <Box sx={{objectFit: "contain", width: "100%", height: "100%"}} component="img" src="images/ipad-air.jpeg" alt="" />
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <Title/>
              <Price/>
            </Box>
            <Box>
              <Description/>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{width: "100%", border: "solid 2px grey", p: 1}}>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <p>単価</p>
              <Price/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
              <p>数量</p>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">amount</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value=""
                  label="amount"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <p>合計</p>
              <p>148,280円</p>
            </Box>
            <Box>
              <Box sx={{display: "flex", justifyContent: "end", my:1}}>
                <Button sx={{minWidth: 170}} color="warning" variant="contained" disableElevation>
                  お気に入りに追加
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button sx={{minWidth: 170}} color="secondary" variant="contained" disableElevation>
                  カートに追加する
                </Button>
              </Box>
              <Box sx={{display: "flex", justifyContent: "end", my: 1}}>
                <Button sx={{minWidth: 170}} color="primary" variant="contained" disableElevation>
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
    <Typography variant="h4" component="h2">Mac Book Air</Typography>
  )
}

const Price = (props) => {
  return (
    <Typography sx={{m: 0}} variant="h6" paragraph={true}>148,280円</Typography>
  )
}

const Description = (props) => {
  return (
    <Box sx={{width: "100%", border: "solid 2px grey", p: 1}}>
      <Typography paragraph={true}>
        M1チップを内蔵したMacBook Airは、驚くほどポータブルなノートブックです。軽快かつスピーディーな使い心地。静かなファンレス設計。美しいRetinaディスプレイ。飛ぶように軽々と持ち運べるのは、スリムなボディと一日中使えるバッテリーのおかげです。
      </Typography>
    </Box>
  )
}

export default ProductDetailPage