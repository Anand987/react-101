const { Fragment } = require("react");
const { default: AvailableMeals } = require("./AvailableMeals");
const { default: MealsSummary } = require("./MealsSummary");

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
