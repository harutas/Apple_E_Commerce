import React, {useState} from 'react';
import Category from "../components/Category";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useStoreContext } from '../context/StoreContext';

const ProductPage = () => {
  const  { products } = useStoreContext();
  // ソートとフィルタリングの状態を管理
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    if (event.target.name === "sort") {
      setSort(event.target.value);
    } else if (event.target.name === "filter") {
      setFilter(event.target.value);
    }
    // products = sortHighToLow(products, sort)
  };

  const filterCategory = (products, category) => {
    return products.filter((product) => {
      return product.category === category;
    })
  };

  return (
    <div className="container pt-3">
      <Forms sort={sort} filter={filter} handleChange={(event) => {handleChange(event)}}/>
      <Category sortedProducts={filterCategory(products, 'Mac')} category={'Mac'} />
      <Category sortedProducts={filterCategory(products, 'iPhone')} category={'iPhone'} />
      <Category sortedProducts={filterCategory(products, 'iPad')} category={'iPad'} />
      <Category sortedProducts={filterCategory(products, 'Watch')} category={'Watch'} />
    </div>
  )
}

// const sortHighToLow = (products, howToSort) => {
//   if (howToSort === "") {
//     return products;
//   } else if (howToSort === "HighToLow") {
//     return products.slice().sort(function (a, b) {
//       let priceA = parseInt(a.price);
//       let priceB = parseInt(b.price);
//       if (priceA > priceB) return 1;
//       else return -1;
//     })
//   }
// }

const Forms = (props) => {
  return (
    <Box sx={{display: "flex", justifyContent: "end"}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-select">Sort</InputLabel>
        <Select
          name="sort"
          labelId="sort-select"
          id="sort-select"
          defaultValue={""}
          value={props.sort}
          label="Sort"
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>Sort</em>
          </MenuItem>
          <MenuItem value={"HighToLow"}>High to Low</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="filter-select">filtering</InputLabel>
        <Select
          name="filter"
          labelId="filter-select"
          id="filter-select"
          defaultValue={""}
          value={props.filter}
          label="Filter"
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>Filterring</em>
          </MenuItem>
          <MenuItem value={"Mac"}>Mac</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default ProductPage