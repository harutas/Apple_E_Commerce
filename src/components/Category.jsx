// components
import Item from "./Item";
// mui
import { Box, Stack, Typography } from "@mui/material";

const Category = ({sortedProducts, category}) => {
  const items = sortedProducts;

  if (items.length === 0) return ;

  return (
    <Box sx={{mt: 2}}>
      <Typography sx={{textAlign: "start", margin: 0}} variant="h4" component="h2">{category}ストア</Typography>
      <Stack direction={"row"} sx={{overflow: "auto"}}>
        {items.map((item) => <Item item={item} key={item.productName} />)}
      </Stack>
    </Box>
  );
}

export default Category;