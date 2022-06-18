import { Box, Stack, Typography } from "@mui/material";
import Item from "./Item"

const Category = (props) => {
  const items = props.products;
  const listItems = items.map((item) => 
    <Item item={item} key={item.productName} />
  );

  return (
    <Box>
      <Typography sx={{fontWeight: "bold", textAlign: "start", margin: 0}} variant="h4" component="h2">{props.category}</Typography>
      <Stack direction={"row"} sx={{overflow: "auto"}}>
        {listItems}
      </Stack>
    </Box>
  )
}

export default Category