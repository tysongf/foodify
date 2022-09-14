import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import css from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
   return (
      <Fragment>
         <header className={css.header}>
            <h1>Foodify</h1>
            <HeaderCartButton
               onClick={props.onShowCart}
               onClose={props.onHideCart}
            />
         </header>
         <div className={css["main-image"]}>
            <img src={mealsImage} alt="A table full of delicious food." />
         </div>
      </Fragment>
   );
};

export default Header;
