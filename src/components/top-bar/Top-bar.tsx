import styles from "./styles.module.scss";
import { Categories, SortPopup } from "../index";
import { Container } from "../../ui";

export function TopBar() {
  return (
    <Container className={styles.container}>
      <Categories />
      <SortPopup />
    </Container>
  );
}
