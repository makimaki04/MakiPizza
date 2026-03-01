import { Minus, Plus } from "lucide-react";
import { Button, Container } from "../../../ui";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { TBasketItem } from "../../../types/types";
import { useAppDispatch } from "../../../store/store";
import { addToBasket, removeFromBasket } from "../../../store/slices/Basket/BasketSlice";

export interface BasketItemProps {
    item: TBasketItem;
    className: string;
    separator: boolean;
}

export const BasketItem = ({ item, className, separator }: BasketItemProps) => {
    const dispatch = useAppDispatch();

    const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(removeFromBasket({ id: item.id }));
    };

    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToBasket(item));
    };

    return (
        <Container className={clsx(styles.basket__item__container, className)}>
            <Container className={styles.image__container}>
                <img 
                    src={item.image} 
                    alt={item.title}
                    className={styles.image}
                />

                <Container className={styles.description__container}>
                    <h4 className={clsx('text m-0 text_size_middle bold')}>
                        {item.title}
                    </h4>

                    <p className={clsx('text m-0 text_size_small')}>
                        {item.description}
                    </p>
                </Container>
            </Container>

            {separator && <span className={styles.separator} />}

            <Container className={styles.footer}>
                <p className={clsx('text m-0 text_size_middle bold')}>
                    {item.price} ₽
                </p>

                <Container className={styles.card__button_block}>
                    <Button 
                        type='button' 
                        className={styles.count__button} 
                        onClick={handleRemoveClick}
                        aria-label="Уменьшить количество"
                    >
                        <Minus size={17} />
                    </Button>

                    <span className={clsx('text m-0 text_size_middle bold')}>
                        {item.count}
                    </span>
                    
                    <Button 
                        type='button'  
                        className={styles.count__button} 
                        onClick={handleAddClick}
                        aria-label="Увеличить количество"
                    >
                        <Plus size={17}/>
                    </Button>
                </Container>
            </Container>
        </Container>
    );
};