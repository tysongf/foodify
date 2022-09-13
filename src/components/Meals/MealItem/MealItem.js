import React, { Fragment } from "react";
import css from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
   return (
      <Fragment>
         <li className={css["meal"]}>
            <div>
               <h3>{props.name}</h3>
               <div className={css.description}>{props.description}</div>
               <div className={css.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div>
               <MealItemForm></MealItemForm>
            </div>
         </li>
      </Fragment>
   );
};

export default MealItem;
