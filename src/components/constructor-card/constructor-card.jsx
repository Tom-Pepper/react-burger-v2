import React from 'react';
import { CurrencyIcon, LockIcon, DeleteIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './constructor-card.module.css';

function ConstructorCard({type, item}) {
  return (
    <div className={`${styles.bun} ${type === 'bun-top' ? `${styles.bun__top}` : ''} ${type === 'bun-bottom' ? `${styles.bun__bottom}` : ''}`}>
      {type === 'default' ? <span className={styles.bun__drag}><DragIcon type="primary" /></span> : null}
      <div className={`${styles.bun__wrap} ${styles.bun__wrap_center}`}>
        <img src={item.image_mobile} alt={item.name} className={styles.bun__img}/>
        <h3 className="text text_type_main-default pl-5 pr-5">
          {item.name}
          {type === 'bun-top' ? " (верх)" : ""}
          {type === 'bun-bottom' ? " (низ)" : ""}
        </h3>
      </div>
      <div className={styles.bun__wrap}>
        <p className="text text_type_digits-default pr-2">{item.price}</p>
        <span className="pr-5">
          <CurrencyIcon type="primary" />
        </span>
        {type === 'default' ? <DeleteIcon type="primary" /> : <LockIcon type="secondary" />}
      </div>
    </div>
  );
}

export default ConstructorCard
