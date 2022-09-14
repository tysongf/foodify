import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";
import css from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
   const cartContext = useContext(CartContext);
   const numItems = cartContext.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
   }, 0);
   return (
      <button className={css.button} onClick={props.onClick}>
         <span className={css.icon}>
            <CartIcon />
         </span>
         <span>My Cart</span>
         <span className={css.badge}>{numItems}</span>
      </button>
   );
};

export default HeaderCartButton;
