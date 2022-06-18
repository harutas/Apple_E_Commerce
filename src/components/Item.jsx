import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Box, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = (props) => {
  return (
    <Box m={2}>
      <Card sx={{ minWidth: 275}} className="rem20">
        <ProductCardContent>
          <Image image={props.item.image} />
          <Title title={props.item.productName} />
          <Price description={props.item.price} />
          <Stack direction={"row"} justifyContent={"end"} alignItems={"center"}>
            <IconButton color="default" aria-label="favorite">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="default" aria-label="add to shopping cart" sx={{marginLeft: 1}}>
              <AddShoppingCartIcon />
            </IconButton>
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
    <div className='img-container h300'>
      <img src={props.image} className="item-img" alt="" />
    </div>
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
      <Typography sx={{margin: 0}} paragraph={true}>{props.description.toLocaleString()}円(税込)から</Typography>
    </Box>
  )
}

export default Item