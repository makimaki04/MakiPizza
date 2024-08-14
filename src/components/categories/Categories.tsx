import clsx from "clsx";
import { Button, Container } from "../../ui";
import styles from "./styles.module.scss";
import { useState } from "react";

const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];

export function Categories() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    const onClick = (index: number) => {
        setActiveIndex(index);
    }

  return (
    <>
      <Container className={styles.container}>
        {categories.map((category, index) => (
            <Button type="button" onClick={() => onClick(index)} className={clsx(styles.category, activeIndex === index && styles.category__active)}>{category}</Button>
        ))}
      </Container>
    </>
  );
}
