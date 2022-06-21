import { createContext, useState, useContext } from "react";
import productList from '../model/products';


const StoreContext = createContext();

export function useStoreContext() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [products, setProducts] = useState(productList);
  const [cart, setCart] = useState([]);

  // お気に入りの切替
  const handleToggleFavorite = (item) => {
    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isFavorite = !product.isFavorite;
      }
      return product;
    });
    setProducts(newProductList);
  }

  // 買い物かご切替
  const handeleToggleShoppingCart = (item) => {
    if (!item.isInCart) addShoppingCart(item);
    else removeShoppingCart(item);
  }

  // 買い物かごへの追加
  const addShoppingCart = (item) => {

    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isInCart = !product.isInCart;
      }
      return product;
    });
    setProducts(newProductList);

    setCart(prevState => [...prevState, {
      ...item,
      quantity: 1
    }]);

  }

  // 買い物かごからの削除
  const removeShoppingCart = (item) => {

    if (window.confirm("商品は既にカートに入っています。削除してよろしいですか？")){
      const newCartList = [...cart].filter((product) => {
        return product.productName !== item.productName;
      });
      setCart(newCartList);
  
      const newProductList = products.map((product) => {
        if (product.productName === item.productName) {
          product.isInCart = !product.isInCart;
        }
        return product;
      });
      setProducts(newProductList);
    } else {
      return ;
    }
    
  }

  const value = {
    products,
    setProducts,
    cart,
    setCart,
    removeShoppingCart,
    handleToggleFavorite,
    handeleToggleShoppingCart
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )

}