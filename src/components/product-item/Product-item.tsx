import clsx from 'clsx';
import { Button, Container } from '../../ui';
import styles from './styles.module.scss'
import { useState } from 'react';
import { ProductCard } from '../index';
import { TBasketItem, TProduct } from '../../types/types';
import { useAppDispatch } from '../../store/store';
import { addToBasket } from '../../store/slices/Basket/BasketSlice';

export interface ProductCardProps {
    product: TProduct;
}

export const ProductItem = ({ product }: ProductCardProps) => {
    const { title, src, description, price} = product;
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleAddToCart = (basketItem: TBasketItem) => {
        dispatch(addToBasket(basketItem));
        onClose();
    }

    const onClose = () => {
        setIsOpen(false);
    }

    const onOpen = () => {
        setIsOpen(true);
    }

    const onOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';
    } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }

    return (
        <Container className={styles.card__container} >
            <Container className={styles.card__image_wrapper} onClick={onOpen}>
                <img src={src} alt={title} className={styles.card__image} />
            </Container>

            <Container className={styles.card__info} onClick={onOpen}>
                <h3 className={clsx('text m-0 text_size_medium', styles.card__title)}>{title}</h3>

                <p className={clsx('text m-0 text_size_small', styles.card__description)}>{description}</p>
            </Container>

            <Container className={styles.card__footer} onClick={onOpen}>
                <p className={clsx('text m-0 text_size_middle')}>
                    от <span className={styles.card__price}>{price} ₽</span> 
                </p>

                <Button type='button' 
                    className={styles.card__button} 
                    onClick={onOpen}
                >
                    + Добавить
                </Button>
            </Container>
            
            <div className={clsx(styles.overlay, {[styles.open]: isOpen})} onClick={onOverlayClick}>
                {isOpen && (
                        <ProductCard 
                            onAdd={handleAddToCart} 
                            product={product} 
                            onClose={onClose} 
                        />
                    )}
            </div>
        </Container>
    )
}