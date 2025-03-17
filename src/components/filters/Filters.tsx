import clsx from "clsx";
import { Button, Container } from "../../ui";
import styles from "./styles.module.scss";
import { CheckBoxGroup } from "../index";
import { RussianRuble } from "lucide-react";
import { doughType, ingredients, pizzaSize } from "../../constant/ingredients";

export function Filters() {
  return (
    <div className={styles.filters__block}>
      <h3 className={clsx("text_size_medium text m-0")}>Фильтрация</h3>
      <Container className={styles.filters__container}>
        <CheckBoxGroup
          title="Тип теста"
          items={doughType}
        />

        <CheckBoxGroup
          title="Размеры"
          items={pizzaSize}
        />
        <Container className={styles.inputs__container}>
          <p className={clsx('m-0 text text_size_middle', styles.inputs__container__title)}>Стоимость</p>
          <div className={styles.flex__container}>
            <div className={styles.intup__block}>
              <input type="text" placeholder="0" min={0} max={1000} defaultValue={0} minLength={1} maxLength={4} className={styles.price__input}/>
              <RussianRuble size={16} className={styles.input__icon} />
            </div>
            
            <div className={styles.intup__block}>
              <input type="number" placeholder="1000" min={300} max={1000} defaultValue={500} className={styles.price__input} />
              <RussianRuble size={16} className={styles.input__icon} />
            </div>
          </div>
        </Container>

        <CheckBoxGroup title="Ингредиенты" items={ingredients} />

        <Button type="submit">Применить</Button>
      </Container>
    </div>
  );
}
