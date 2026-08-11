import { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../Store/CartContext';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={classes.backdrop}
        onClick={props.onClose}
      ></div>

      <div className={classes.modal}>
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              <div>
                <h3>{item.name}</h3>

                <div className={classes.summary}>
                  <span className={classes.price}>
                    ₹{item.price}
                  </span>

                  <span className={classes.amount}>
                    x {item.amount}
                  </span>
                </div>
              </div>

              <div className={classes.actionsItem}>
                <button
                  onClick={cartItemRemoveHandler.bind(
                    null,
                    item.id
                  )}
                >
                  −
                </button>

                <button
                  onClick={cartItemAddHandler.bind(
                    null,
                    item
                  )}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className={classes.total}>
          <span>Total Amount</span>

          <span>
            ₹{cartCtx.totalAmount.toFixed(0)}
          </span>
        </div>

        <div className={classes.actions}>
          <button
            className={classes['button--alt']}
            onClick={props.onClose}
          >
            Close
          </button>

          <button className={classes.button}>
            Order
          </button>
        </div>
      </div>
    </>,

    document.getElementById('modal-root')
  );
};

export default Cart;