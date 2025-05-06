import { useEffect, useRef } from 'react';
import { Button, Container } from '../../ui'
import styles from './styles.module.scss'
import clsx from 'clsx';
import { MoveRight, X } from 'lucide-react';

export interface basketProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Basket = ({ onClose, isOpen }: basketProps) => {
    
    const timerRef = useRef<any>();
    const count = 3;
    const price = 2245;
    const tax = Math.floor(price * 0.05);

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

    return (
        <Container className={clsx(styles.basket__container, {[styles.open]: isOpen})}>
            <h3 className={clsx('text text_size_medium  m-0 default', styles.title)} >В корзине <span className={styles.bold_text}>{count} товара</span></h3>
            
            <Container className={styles.items__container}>
                <></>
                    {/* <BasketItem item={item} /> */}
            </Container>

            <Container className={styles.footer}>
                <p className={clsx('text m-0 p-0 text_size_middle default', styles.footer__text)} >
                   Сумма заказа: <span className={styles.bold_text}>{price} ₽</span>
                </p>

                <p className={clsx('text m-0 p-0 text_size_middle default', styles.footer__text)} >
                    Налог 5%: <span className={styles.bold_text}>{tax} ₽</span>
                </p>

                <Button type="button" className={clsx('text bold', styles.order__button)}>
                    К оформлению заказа
                    <MoveRight size={25} className={styles.arrow} />
                </Button>
            </Container>

            <button className={styles.close__button} onClick={onClose}>
                <X size={40} color='#FFFF' />
            </button>
        </Container>
    )
}