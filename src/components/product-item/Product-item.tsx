import clsx from 'clsx';
import { Button, Container } from '../../ui';
import styles from './styles.module.scss'
import { useState } from 'react';

export interface ProductCardProps {
    title: string;
    src: string;
    description: string;
    price: number;
}

export function ProductItem({ title, src, description, price }: ProductCardProps) {
    const [ count, setCount ] = useState(0);
    // const [ isOpen, setIsOpen ] = useState(false);

    // const handleAddToCart = () => {
    //     setCount(count + 1);
    //     setIsOpen(false);
    // }
    return (
        <Container className={styles.card__container}>
            <Container className={styles.card__image_wrapper}>
                <img src={src} alt={title} className={styles.card__iamge} />
            </Container>
            <Container className={styles.card__info}>
                <h3 className={clsx('text m-0 text_size_medium', styles.card__title)}>{title}</h3>
                <p className={clsx('text m-0 text_size_small', styles.card__description)}>{description}</p>
            </Container>
            <Container className={styles.card__footer}>
                    <p className={clsx('text m-0 text_size_middle')}>
                       от <span className={styles.card__price}>{price} ₽</span> 
                    </p>
                    {count === 0 ? (
                        <Button type='button' 
                            className={styles.card__button} 
                            // onClick={() => setIsOpen(true)}
                        >
                            + Добавить
                        </Button>
                    ) : (
                        <Container className={styles.card__button_block}>
                            <Button type='button' 
                                className={styles.count__button} 
                                onClick={() => setCount(count - 1)}>
                                -
                            </Button>
                            <span className={clsx('text m-0 text_size_middle', styles.count)}>count</span>
                            <Button type='button' 
                                className={styles.card__button} 
                                // onClick={() => setIsOpen(true)}
                            >
                                +
                            </Button>
                        </Container>
                    )}
                    
                </Container>
        </Container>
    )
}