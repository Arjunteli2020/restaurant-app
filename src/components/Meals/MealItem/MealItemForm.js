import { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(Number(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value: amount,
          onChange: amountChangeHandler,
        }}
      />

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;