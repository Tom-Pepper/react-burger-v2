import React from 'react';
import AppHeader from "../app-header/app-header";
import appStyles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <>
      <AppHeader />
      <main className={appStyles.container}>
        <section className={`${appStyles.container__inner} pl-5 mr-10`}>
          <BurgerIngredients />
        </section>
        <section className={`${appStyles.container__inner} ${appStyles.container__constructor}`}>
          <BurgerConstructor />
        </section>
      </main>
    </>
  );
}

export default App;
