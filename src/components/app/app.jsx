import React from 'react';
import AppHeader from "../app-header/app-header";
import appStyles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <>
      <AppHeader />
      <main className={appStyles.container}>
        <section className={`${appStyles.container__inner} pl-5`}>
          <BurgerIngredients />
        </section>
      </main>
    </>
  );
}

export default App;
