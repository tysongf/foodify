import React from "react";
import css from "./Input.module.css";

const Input = (props) => {
   return (
      <div className={css.input}>
         <label htmlFor={props.input.id}>{props.input.label}</label>
         <input {...props.input}></input>
      </div>
   );
};

export default Input;
