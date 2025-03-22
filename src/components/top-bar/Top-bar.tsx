import styles from "./styles.module.scss";
import { Categories, SortPopup } from "../index";
import { Container } from "../../ui";
import { categories } from "../../constant/ingredients";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <Container className={styles.container}>
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
}
