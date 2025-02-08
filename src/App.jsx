import { CartProvider } from "./components/context/cartContext/CartContext";

import ProductList from "./components/productList/ProductList";
import Cart from "./components/cart/Cart";
import CartSummary from "./components/cartSummary/CartSummary";

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Sklep</h1>
        <ProductList />
        <Cart />
        <CartSummary />
      </div>
    </CartProvider>
  );
};

export default App;
