import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Button, Container, Logo, Search } from "../../ui";
import styles from "./styles.module.scss";
import clsx from "clsx";

export function AppHeader() {
  const price = "2123";
  const count = 3;
  return (
    <>
      <header className={styles.header}>
        <Container className={styles.container}>
          <Logo
            src="src/assets/images/logo.png"
            alt="Логотип в виде кусочка пиццы"
          />
          <Container className={styles.logo__container}>
            <h1 className="m-0 text">Makki Pizza</h1>
            <p
              className={clsx('m-0', 'text', 'text-size-middle', styles.logo__description)}
            >
              вкусней уже некуда
            </p>
          </Container>
          <Search />
          <Container className={styles.buttons__container}>
            <Button type="button" className={styles.button}>
              <User className={styles.user__icon} size={16} />
              Войти
            </Button>
            <Container className={styles.basket__button_container}>
              <Button type="button" className={styles.button}>
                {price + " ₽"}
                <span className={styles.separator} />
                <Container className={styles.basket__Container}>
                <ShoppingCart size={16} />
                {count}
                </Container>
                <ArrowRight size={20} className={styles.basket__arrow} />
              </Button>
            </Container>
          </Container>
        </Container>
      </header>
    </>
  );
}
