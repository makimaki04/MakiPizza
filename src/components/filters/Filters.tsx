import clsx from "clsx";
import { Button, Container } from "../../ui";
import styles from "./styles.module.scss";
import { CheckBoxGroup } from "../index";
import { RussianRuble } from "lucide-react";

export function Filters() {
  return (
    <div className={styles.filters__block}>
      <h3 className={clsx("text_size_medium text m-0")}>Фильтрация</h3>
      <Container className={styles.filters__container}>
        <CheckBoxGroup
          title="Тип теста"
          items={[
            {
              label: "Тонкое",
              value: "1",
            },
            {
              label: "Традиционное",
              value: "2",
            },
          ]}
        />

        <CheckBoxGroup
          title="Размеры"
          items={[
            {
              label: "20 см",
              value: "20",
            },
            {
              label: "30 см",
              value: "30",
            },
            {
              label: "40 см",
              value: "40",
            },
          ]}
        />
        <Container className={styles.inputs__container}>
          <div className={styles.intup__block}>
            <input type="number" placeholder="0" min={0} max={1000} defaultValue={0} minLength={1} maxLength={4} className={styles.price__input}/>
            <RussianRuble size={16} className={styles.input__icon} />
          </div>
          <div className={styles.intup__block}>
            <input type="number" placeholder="1000" min={300} max={1000} defaultValue={500} className={styles.price__input} />
            <RussianRuble size={16} className={styles.input__icon} />
          </div>
        </Container>

        <CheckBoxGroup title="Ингредиенты" items={[]} />

        <Button type="submit">Применить</Button>
      </Container>
    </div>
  );
}
