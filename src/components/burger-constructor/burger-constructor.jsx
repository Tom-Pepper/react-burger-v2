import React from 'react';
import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorCard from "../constructor-card/constructor-card";
import {testData} from "../../utils/data";

function BurgerConstructor() {

  function renderConstructor() {
    return testData.map((item) => {
      if (item.type !== 'bun') {
        return (<li key={item._id}>
          <ConstructorCard type="default" item={item} />
        </li>);
      }
      return false;
    });
  }

  return (
    <>
      <div className="mt-25 mb-10">
        <ConstructorCard type="bun-top" item={testData[0]}/>
        <ul className={styles.constructor__list}>
          {renderConstructor()}
        </ul>
        <ConstructorCard type="bun-bottom" item={testData[0]}/>
      </div>
      <div className={styles.constructor__wrap}>
        <div className={styles.constructor__wrap}>
          <p className="text text_type_digits-medium">
            1234
          </p>
          <span className={styles.constructor__icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

export default BurgerConstructor;
