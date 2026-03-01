import styles from "./styles.module.scss";
import { Basket, Categories, FloatingButtons, SortPopup } from "../index";
import { Container } from "../../ui";
import { categories } from "../../constant/ingredients";
import { SortType } from "../../types/types";
import clsx from "clsx";
import { useState } from "react";


interface TopBarProps {
  onSortChange: (sortOption: SortType) => void;
  showFloatingButtons: boolean;
}

export const TopBar = ({ onSortChange, showFloatingButtons }: TopBarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    const onOverlayClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
          onClose();
      }
    }
  
    const onClose = () => {
      setIsOpen(false);
    }
  
    const onOpen = () => {
      setIsOpen(true);
    }

  return (
    <>
      <Container className={styles.topBar}>
        <Container className={styles.container}>
          <Categories categories={categories} />
          <SortPopup onChange={onSortChange} />
          {showFloatingButtons && <FloatingButtons  onOpen={onOpen} />}
        </Container>
      </Container>
      <div className={clsx(styles.overlay, {[styles.open]: isOpen})} onClick={onOverlayClick}>
            <Basket onClose={onClose} isOpen={isOpen} />
      </div>
    </>
  );
}
