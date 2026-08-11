import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/CartContext';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${Number(props.price).toFixed(0)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: Number(props.price),
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes.price}>{price}</div>
      </div>

      <MealItemForm
        id={props.id}
        onAddToCart={addToCartHandler}
      />
    </li>
  );
};

export default MealItem;