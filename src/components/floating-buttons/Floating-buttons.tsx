import clsx from "clsx"
import { Button, Container } from "../../ui"
import styles from './styles.module.scss'
import { ArrowRight, ShoppingCart, User } from "lucide-react"
import { useSelector } from "react-redux";
import { getBasketItemsCount, selectTotalPrice } from "../../store/slices/Basket/BasketSlice";

interface FloatingButtonsProps {
    onOpen: () => void;
}

export const FloatingButtons = ({ onOpen }: FloatingButtonsProps) => {
    const count = useSelector(getBasketItemsCount);
    const price = useSelector(selectTotalPrice);

    return(
            <Container className={styles.buttons__container}>
                <Button type="button" className={clsx(styles.button, styles.login)}>
                <User className={styles.user__icon} size={16} />
                Войти
                </Button>

                <Container className={styles.basket__button_container}>
                <Button type="button" className={styles.button} onClick={onOpen} >
                {!price ? 'Корзина' : (
                    <>
                    {`${price} ₽`}
                    <span className={styles.separator} />
                    <Container className={styles.basket__Container}>
                        <ShoppingCart className={styles.cart__icon} size={16} />
                        {count}
                    </Container>
                    <ArrowRight size={20} className={styles.basket__arrow} />
                    </>
                )}
                </Button>
                </Container>
          </Container>
    )
}