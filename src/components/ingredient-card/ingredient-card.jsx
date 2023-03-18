import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cardStyles from './ingredient-card.module.css';
import ingsStyles from "../burger-ingredients/burger-ingredients.module.css";

function IngredientCard({ item }) {
  return (
    <li className={ingsStyles.menu__item}>
      <Counter count="1" />
      <div className={cardStyles.card__wrap} >
        <img src={item.image} alt={item.name} className="pr-4 pl-4"/>
        <div className={cardStyles.card__priceWrap}>
          <p className={cardStyles.card__price}>
            {item.price}
          </p>
          <CurrencyIcon type="primary"/>
        </div>
        <p className="text text_type_main-default">
          {item.name}
        </p>
      </div>
    </li>
  )
}

export default IngredientCard;
