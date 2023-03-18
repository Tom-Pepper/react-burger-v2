import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../ingredient-card/ingredient-card";
import ingsStyles from './burger-ingredients.module.css';
import { testData } from "../../utils/data";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');

  function renderMenu(category) {
    return testData.map((item) => {
      if (item.type === category) {
        return (
          <IngredientCard item={item} key={item._id}/>
        )
      }
      return false;
    });
  }

  return (
    <>
      <h2 className="mt-10 text text_type_main-large">
        Соберите бургер
      </h2>
      <div className={`${ingsStyles.burger__tab} mt-5`}>
        <Tab value="Булки" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={ingsStyles.menu__window}>
        <h3 className="mt-10 mb-6 text text_type_main-medium">
          Булки
        </h3>
        <ul className={`${ingsStyles.menu__section} pr-4 pl-4`}>
          {renderMenu('bun')}
        </ul>
        <h3 className="mb-6 text text_type_main-medium">
          Соусы
        </h3>
        <ul className={`${ingsStyles.menu__section} pr-4 pl-4`}>
          {renderMenu('sauce')}
        </ul>
        <h3 className="mb-6 text text_type_main-medium">
          Начинки
        </h3>
        <ul className={`${ingsStyles.menu__section} pr-4 pl-4`}>
          {renderMenu('main')}
        </ul>
      </div>
    </>
  );
}

export default BurgerIngredients;
