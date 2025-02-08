import { useCart } from "../context/useCart/UseCart";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Koszyk</h2>
      {cart.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <p>
              {item.name} - {item.price} zł
            </p>
            <button onClick={() => removeFromCart(item.id)}>Usuń</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
