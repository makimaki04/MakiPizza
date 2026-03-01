import { useEffect, useRef } from 'react';
import { Button, Container } from '../../ui'
import styles from './styles.module.scss'
import clsx from 'clsx';
import { MoveRight, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { getBasketItemsCount, selectBasketItems, selectTotalPrice } from '../../store/slices/Basket/BasketSlice';
import { BasketItem } from './basket-item/Basket-item';
import { useNavigate } from 'react-router-dom';

export interface basketProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Basket = ({ onClose, isOpen }: basketProps) => {
    const timerRef = useRef<any>();
    const basketItems = useSelector(selectBasketItems);
    const count = useSelector(getBasketItemsCount);
    const price = useSelector(selectTotalPrice);
    const tax = Math.floor(price * 0.05);
    const navigate = useNavigate();

    const getItemsCountText = (count: number) => {
        if (count % 10 === 1 && count % 100 !== 11) {
          return `${count} товар`;
        }
        if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
          return `${count} товара`;
        }
        return `${count} товаров`;
      };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
            clearTimeout(timerRef.current);
        }
    }, []);
    
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';
    } else {
        timerRef.current = setTimeout(() => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
          }, 300)
    }
    
    const onBtnClick = () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        navigate('/order/');
    }

    return (
        <Container className={clsx(styles.basket__container, {[styles.open]: isOpen})}>
            {count === 0 ? (
                <Container className={styles.empty__container}>
                    <img 
                    src='https://cdn.dodostatic.net/pizza-site/dist/assets/5aa5dac99a832c62f3ef..svg'
                    alt='Корзина пуста'
                    className={styles.empty__image}
                    />
                    <h3 
                    className={clsx('text text_size_medium  m-0 default', styles.empty__title, styles.bold_text)} 
                    >
                        Пока тут пусто
                    </h3>
                    <p
                    className={clsx('text m-0 p-0 text_size_middle default', styles.empty__text)}
                    >
                        Добавьте хотя бы одну пиццу, чтобы совершить заказ
                    </p>
                </Container>
            ) : (
                <>
                    <h3 
                    className={clsx('text text_size_medium  m-0 default', styles.title)} 
                    >
                        В корзине <span className={styles.bold_text}>{getItemsCountText(count)}</span>
                    </h3>
                    
                    <Container className={styles.items__container}>
                        {basketItems.map((item) => (
                            <BasketItem item={item} separator={true} className={styles.item__container} key={item.id} />
                        ))}
                    </Container>

                    <Container className={styles.footer}>
                        <p className={clsx('text m-0 p-0 text_size_middle default', styles.footer__text)} >
                        Сумма заказа: <span className={styles.bold_text}>{price} ₽</span>
                        </p>

                        <p className={clsx('text m-0 p-0 text_size_middle default', styles.footer__text)} >
                            Налог 5%: <span className={styles.bold_text}>{tax} ₽</span>
                        </p>

                        <Button 
                        type="button" 
                        className={clsx('text bold', styles.order__button)}
                        onClick={onBtnClick}
                        >
                            К оформлению заказа
                            <MoveRight size={25} className={styles.arrow} />
                        </Button>
                    </Container>
                </>
            )}

            <button className={styles.close__button} onClick={onClose}>
                <X size={40} color='#FFFF' />
            </button>
        </Container>
    )
}