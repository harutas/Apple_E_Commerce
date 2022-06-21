import { Box, Stack, Typography } from "@mui/material";
import Item from "./Item"

const Category = ({sortedProducts, category}) => {
  const items = sortedProducts;
  const listItems = items.map((item) => 
    <Item item={item} key={item.productName} />
  );

  return (
    <Box sx={{mt: 2}}>
      <Typography sx={{textAlign: "start", margin: 0}} variant="h4" component="h2">{category}ストア</Typography>
      <Stack direction={"row"} sx={{overflow: "auto"}}>
        {listItems}
      </Stack>
    </Box>
  )
}

export default Category