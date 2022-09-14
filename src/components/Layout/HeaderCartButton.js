import React from "react";
import CartIcon from "./CartIcon";
import css from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
   return (
      <button className={css.button} onClick={props.onClick}>
         <span className={css.icon}>
            <CartIcon />
         </span>
         <span>My Cart</span>
         <span className={css.badge}>3</span>
      </button>
   );
};

export default HeaderCartButton;
