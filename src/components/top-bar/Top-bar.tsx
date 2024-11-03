import styles from "./styles.module.scss";
import { Categories, SortPopup } from "../index";
import { Container } from "../../ui";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <Container className={styles.container}>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
}
