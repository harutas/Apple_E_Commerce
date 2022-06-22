// hooks
import { useStoreContext } from '../context/StoreContext';
// components
import Category from "../components/Category";
// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const ProductPage = ({sort, filter, setSort, setFilter}) => {

  const  { products } = useStoreContext();

  const handleChange = (event) => {
    if (event.target.name === "sort") {
      setSort(event.target.value);
    } else if (event.target.name === "filter") {
      setFilter(event.target.value);
    }
  };

  const filteredAndSortedProducts = (array, sortCondition, filterCondition) => {
    const f = filterProducts(array, filterCondition);
    const s = sortProducts(f, sortCondition);
    return s;
  };

  // ソート関数
  const sortProducts = (array, condition) => {
    switch (condition){
      case "highToLow" :
        return array.slice().sort(function (a, b) {
          let priceA = a.price;
          let priceB = b.price;
          if (priceA < priceB) return 1;
          else return -1;
        });
      case "lowToHigh" :
        return array.slice().sort(function (a, b) {
          let priceA = a.price;
          let priceB = b.price;
          if (priceA > priceB) return 1;
          else return -1;
        });
      default : 
        return array;
    }
  };

  // フィルター関数
  const filterProducts = (array, condition) => {
    switch (condition){
      case "Mac" :
        return array.filter((product) => product.category === "Mac");
      case "iPhone" :
        return array.filter((product) => product.category === "iPhone");
      case "iPad" :
        return array.filter((product) => product.category === "iPad");
      case "Watch" :
        return array.filter((product) => product.category === "Watch");
      case "higherThan100000" :
        return array.filter((product) => product.price >= 100000);
      case "higherThan200000" :
        return array.filter((product) => product.price >= 200000);
      case "Favorites" :
        return array.filter((product) => product.isFavorite);
      default :
        return array;
    }
  };

  const filterCategory = (products, category) => {
    return products.filter((product) => {
      return product.category === category;
    });
  };

  return (
    <div className="container pt-3">
      <Forms sort={sort} filter={filter} handleChange={(event) => {handleChange(event)}}/>
      <Category sortedProducts={filterCategory(filteredAndSortedProducts(products, sort, filter), 'Mac')} category={'Mac'} />
      <Category sortedProducts={filterCategory(filteredAndSortedProducts(products, sort, filter), 'iPhone')} category={'iPhone'} />
      <Category sortedProducts={filterCategory(filteredAndSortedProducts(products, sort, filter), 'iPad')} category={'iPad'} />
      <Category sortedProducts={filterCategory(filteredAndSortedProducts(products, sort, filter), 'Watch')} category={'Watch'} />
    </div>
  );
}

const Forms = (props) => {
  return (
    <Box sx={{display: "flex", justifyContent: "end"}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="sort-select">Sort</InputLabel>
        <Select
          name="sort"
          labelId="sort-select"
          id="sort-select"
          defaultValue={props.sort}
          value={props.sort}
          label="Sort"
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>Sort</em>
          </MenuItem>
          <MenuItem value={"highToLow"}>High to Low</MenuItem>
          <MenuItem value={"lowToHigh"}>Low to High</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="filter-select">filtering</InputLabel>
        <Select
          name="filter"
          labelId="filter-select"
          id="filter-select"
          defaultValue={props.filter}
          value={props.filter}
          label="Filter"
          onChange={props.handleChange}
        >
          <MenuItem value="">
            <em>Filterring</em>
          </MenuItem>
          <MenuItem value={"higherThan100000"}>100,000円～</MenuItem>
          <MenuItem value={"higherThan200000"}>200,000円～</MenuItem>
          <MenuItem value={"Mac"}>Mac</MenuItem>
          <MenuItem value={"iPhone"}>iPhone</MenuItem>
          <MenuItem value={"iPad"}>iPad</MenuItem>
          <MenuItem value={"Watch"}>Watch</MenuItem>
          <MenuItem value={"Favorites"}>Favorites</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ProductPage;