import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return(
  <section className={classes.summary}>
    <h2>Delicious food, Delivered To You</h2>
    <p>
      Chouse our favorite meal for our board selection of available meals enjoy
      a delicious lunch or dinner at home.
    </p>
    <p>
      All our meals are cooked with high-quality ingredients,just-in-time and of
      course by exprienced chefs!
    </p>
  </section>
  );
};

export default MealsSummary