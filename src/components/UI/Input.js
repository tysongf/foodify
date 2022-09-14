import React from "react";
import css from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
   return (
      <div className={css.input}>
         <label htmlFor={props.input.id}>{props.input.label}</label>
         <input ref={ref} {...props.input}></input>
      </div>
   );
});

export default Input;
