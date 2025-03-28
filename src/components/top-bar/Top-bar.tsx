import styles from "./styles.module.scss";
import { Categories, SortPopup } from "../index";
import { Container } from "../../ui";
import { categories } from "../../constant/ingredients";
import { SortType } from "../../types/types";

interface TopBarProps {
  onSortChange: (sortOption: SortType) => void;
}

export function TopBar({ onSortChange }: TopBarProps) {
  return (
    <div className={styles.topBar}>
      <Container className={styles.container}>
        <Categories categories={categories} />
        <SortPopup onChange={onSortChange} />
      </Container>
    </div>
  );
}
