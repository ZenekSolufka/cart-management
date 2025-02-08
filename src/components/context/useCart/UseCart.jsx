import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";

export const useCart = () => {
  return useContext(CartContext);
};
