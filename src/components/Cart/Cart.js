import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <ul className={classes["cart-items"]}>
        <li>
          <div>
            <h3>Paneer Butter Masala</h3>
            <div className={classes.summary}>
              <span className={classes.price}>₹229</span>
              <span className={classes.amount}>x 2</span>
            </div>
          </div>
        </li>
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹458</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>

        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Cart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </>
  );
};

export default Cart;