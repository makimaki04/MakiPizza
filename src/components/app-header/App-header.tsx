import { Container, Search } from "../../ui";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Basket, FloatingButtons, Logo } from "../index"
import { useState } from "react";

interface AppHeaderProps {
  showFloatingButtons: boolean;
}

export const AppHeader = ( { showFloatingButtons }: AppHeaderProps) => {
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
      <header className={styles.header}>

        <Container className={styles.container}>
          <Logo />

          <Search />

          { !showFloatingButtons && <FloatingButtons onOpen={onOpen}/> }
        </Container>
      
        <div className={clsx(styles.overlay, {[styles.open]: isOpen})} onClick={onOverlayClick}>
          <Basket onClose={onClose} isOpen={isOpen} />
        </div>
      </header>
    </>
  );
}
