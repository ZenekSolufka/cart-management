import { useCart } from "../context/useCart/UseCart";

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Smartphone", price: 1500 },
    { id: 3, name: "Tablet", price: 1000 },
  ];

  return (
    <div className="product-list">
      <h2>Lista produktów</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <span>
            {product.name} - {product.price} zł
          </span>
          <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
