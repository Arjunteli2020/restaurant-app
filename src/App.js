import { Fragment } from 'react';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  );
}

export default App;