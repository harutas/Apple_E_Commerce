import { Box, Stack, Typography } from "@mui/material";
import Item from "./Item"

const Category = ({products, sortedProducts, category, setProducts}) => {
  const items = sortedProducts;
  const listItems = items.map((item) => 
    <Item item={item} key={item.productName} products={products} setProducts={setProducts}/>
  );

  return (
    <Box>
      <Typography sx={{fontWeight: "bold", textAlign: "start", margin: 0}} variant="h4" component="h2">{category}</Typography>
      <Stack direction={"row"} sx={{overflow: "auto"}}>
        {listItems}
      </Stack>
    </Box>
  )
}

export default Category