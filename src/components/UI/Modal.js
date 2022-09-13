import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const overlayPortal = document.getElementById("overlays");

const Backdrop = (props) => {
   return <div className={css.backdrop}></div>;
};

const ModalOverlay = (props) => {
   return (
      <div className={css.modal}>
         <div className={css.content}>{props.children}</div>
      </div>
   );
};

const Modal = (props) => {
   return (
      <Fragment>
         {createPortal(<Backdrop></Backdrop>, overlayPortal)}
         {createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            overlayPortal
         )}
      </Fragment>
   );
};

export default Modal;
