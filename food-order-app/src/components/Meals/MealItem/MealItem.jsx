import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, description, price } = props.meal;

  const real_price = "$" + price.toFixed(2);

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{real_price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
