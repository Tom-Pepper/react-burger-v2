import React from 'react';
import styles from './burger-constructor.module.css';
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
    <div className="mt-25">
      <ConstructorCard type="bun-top" item={testData[0]}/>
      <ul className={styles.constructor__list}>
        {renderConstructor()}
      </ul>
      <ConstructorCard type="bun-bottom" item={testData[0]}/>
    </div>
  );
}

export default BurgerConstructor;
