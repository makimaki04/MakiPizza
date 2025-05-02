import { Minus, Plus } from "lucide-react";
import { Button, Container } from "../../../ui";
import styles from "./styles.module.scss"
import clsx from "clsx";
import { useState } from "react";
import { basketItem } from "../../../types/types";

export interface BasketItemProps {
    item: basketItem;
}

export const BasketItem = ({ item }: BasketItemProps) => {
    const [ count, setCount ] = useState<number>(item.count);

    const handleRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(count - 1);
    }

    const handleADdClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(count + 1);
    }

    if (count === 0) {
        return ;
    }

    return (
        <Container className={styles.basket__item__container}>

            <Container className={styles.image__container}>
                <img 
                src={item.image} 
                alt={item.title}
                className={styles.image}
                />

                <Container className={styles.description__container}>
                    <h4 
                    className={clsx('text m-0 text_size_middle bold')}
                    >
                        {item.title}
                    </h4>

                    <p
                    className={clsx('text m-0 text_size_small')}
                    >
                        {item.description}
                    </p>
                </Container>
            </Container>

            <span className={styles.separator} />

            <Container className={styles.footer}>
                <p
                className={clsx('text m-0 text_size_middle bold')}
                >
                    {item.price} ₽
                </p>

                <Container className={styles.card__button_block}>
                    <Button type='button' 
                    className={styles.count__button} 
                    onClick={handleRemoveClick}
                    >
                        <Minus size={17} />
                    </Button>

                    <span 
                    className={clsx('text m-0 text_size_middle bold')}
                    >
                        {count}
                    </span>
                    
                    <Button type='button'  
                    className={styles.count__button} 
                    onClick={handleADdClick}
                    >
                        <Plus size={17}/>
                    </Button>
                </Container>
            </Container>
        </Container>
    )
};