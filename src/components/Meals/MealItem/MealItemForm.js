import React, { Fragment } from "react";
import Input from "../../UI/Input";
import css from "./MealItemForm.module.css";

const MealItemForm = (props) => {
   return (
      <Fragment>
         <form className={css.form}>
            <Input
               label="Amount"
               input={{
                  id: "amount",
                  type: "number",
                  min: 1,
                  max: 5,
                  step: 1,
                  default: 1,
               }}
            ></Input>

            <button>+ Add</button>
         </form>
      </Fragment>
   );
};

export default MealItemForm;
