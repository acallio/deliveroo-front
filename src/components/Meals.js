import React from "react";
import Meal from "./Meal";

const Meals = ({ meals, darkMode, shoppingCart, setShoppingCart }) => {
  return (
    <div className={`meals-information-holder${darkMode ? " dark-mode" : ""}`}>
      {meals.map((meal) => {
        const { title, description, price, id, picture, popular } = meal;
        return (
          <Meal
            key={id}
            title={title}
            description={description}
            price={price}
            picture={picture}
            popular={popular}
            id={id}
            darkMode={darkMode}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        );
      })}
    </div>
  );
};
export default Meals;
