// hooks
import { createContext, useState, useContext } from "react";
// model
import productList from '../model/products';

const StoreContext = createContext();

export function useStoreContext() {
  return useContext(StoreContext);
};

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
  };

  // カート状態の切替え
  const handleToggleShoppingCart = (item, quantity) => {
    if (!item.isInCart) addShoppingCart(item, quantity);
    else removeShoppingCart(item);
  };

  // カートへ追加
  const addShoppingCart = (item, quantity) => {

    const newProductList = products.map((product) => {
      if (product.productName === item.productName) {
        product.isInCart = !product.isInCart;
      }
      return product;
    });
    setProducts(newProductList);

    setCart(prevState => [...prevState, {
      ...item,
      quantity: quantity
    }]);

  };

  // カートから削除
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
  };

  const value = {
    products,
    setProducts,
    cart,
    setCart,
    removeShoppingCart,
    handleToggleFavorite,
    handleToggleShoppingCart
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}