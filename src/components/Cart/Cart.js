import React from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = () => {
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

        <li>
          <div>
            <h3>Veg Biryani</h3>
            <div className={classes.summary}>
              <span className={classes.price}>₹199</span>
              <span className={classes.amount}>x 1</span>
            </div>
          </div>
        </li>
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹657</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal-root");

const Cart = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Cart;