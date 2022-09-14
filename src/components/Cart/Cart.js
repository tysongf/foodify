import React from "react";
import css from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
   const cartItems = (
      <ul className={css["cart-items"]}>
         {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
            return <li key={item.id}>{item.name}</li>;
         })}
      </ul>
   );
   return (
      <Modal onClose={props.onClose}>
         {cartItems}
         <div className={css.total}>
            <span>Total Amount</span>
            <span>23.42</span>
         </div>
         <div className={css.actions}>
            <button className={css["button-alt"]} onClick={props.onClose}>
               Close
            </button>
            <button className={css.button}>Order</button>
         </div>
      </Modal>
   );
};

export default Cart;
