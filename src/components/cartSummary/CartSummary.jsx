import { useCart } from "../context/useCart/UseCart";

const CartSummary = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>Podsumowanie</h2>
      <p>Łączna wartość: {total} zł</p>
    </div>
  );
};

export default CartSummary;
