import clsx from 'clsx';
import { Button, Container } from '../../ui';
import styles from './styles.module.scss'
import { useState } from 'react';
import { ProductCard } from '../index';
import { Minus, Plus } from 'lucide-react';

export interface ProductCardProps {
    id: string;
    title: string;
    src: string;
    description: string;
    price: number;
    category: string;
}

export function ProductItem({ title, src, description, price, id, category }: ProductCardProps) {
    const [ count, setCount ] = useState(0);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleAddToCart = () => {
        setCount(count + 1);
        setIsOpen(false);
    }

    const handleAddClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(count + 1);
    }
    
    const handleRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(count - 1);
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

                {count === 0 ? (
                    <Button type='button' 
                        className={styles.card__button} 
                        onClick={() => setIsOpen(true)}
                    >
                        + Добавить
                    </Button>
                ) : (
                    <Container className={styles.card__button_block}>
                        <Button type='button' 
                            className={styles.count__button} 
                            onClick={handleRemoveClick}>
                            <Minus size={17} />
                        </Button>
                        <span className={clsx('text m-0 text_size_middle', styles.count)}>{count}</span>
                        <Button type='button' 
                            className={styles.count__button} 
                            onClick={handleAddClick}
                        >
                            <Plus size={17}/>
                        </Button>
                    </Container>
                )}
            </Container>
            
            <div className={clsx(styles.overlay, {[styles.open]: isOpen})} onClick={onOverlayClick}>
                <ProductCard onAdd={handleAddToCart} id={id} title={title} price={price} onClose={onClose} category={category} />
            </div>
        </Container>
    )
}