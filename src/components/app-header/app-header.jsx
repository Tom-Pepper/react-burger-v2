import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={headerStyles.header__bg}>
      <div className={headerStyles.header__container}>
        <ul className={headerStyles.header__list}>
          <li className={headerStyles.header__item}>
            <button className={headerStyles.header__button}>
              <BurgerIcon type="primary" />
              <p className={headerStyles.buttonText}>
                Конструктор
              </p>
            </button>
          </li>
          <li className={headerStyles.header__item}>
            <button className={headerStyles.header__button}>
              <ListIcon type="secondary" />
              <p className={`${headerStyles.buttonText} text_color_inactive`}>
                Лента заказов
              </p>
            </button>
          </li>
        </ul>
        <Logo />
        <button className={headerStyles.header__button}>
          <ProfileIcon type="secondary" />
          <p className={`${headerStyles.buttonText} text_color_inactive`}>
            Личный кабинет
          </p>
        </button>
      </div>
    </header>
  )
}

export default AppHeader;
