import Card from "../UI/Card";
import MealItem  from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css"

const DUMMY_MEALS=[
    {id:'m1',
    name:'Paneer Butter Masala',
    description:'Creamy paneer curry with rich Indian spices',
    price:'229',
    },
     {id:'m2',
    name:'Veg Biryani',
    description:'Fragrant basmati rice with vegetables and spices',
    price:'199',
    },
     {id:'m3',
    name:'Masala Dosa',
    description:'Crispy dosa served with potato masala and chutney',
    price:'149',
    },
     {id:'m4',
    name:'Chole Bhature',
    description:'Spicy chickpea curry served with fluffy bhature',
    price:'219',
    },
]

const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal)=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return(
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>

        </section>
    );

};

export default AvailableMeals;