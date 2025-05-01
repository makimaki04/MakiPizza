import { Minus, Plus } from "lucide-react";
import { Button, Container } from "../../../ui";
import styles from "./styles.module.scss"
import clsx from "clsx";
import { useState } from "react";

export interface BasketItemProps {
    item: {src: string};

}

export const BasketItem = ({ item }: BasketItemProps) => {
    const [ count, setCount ] = useState<number>(0);

    const handleRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCount(count - 1);
    }

    return (
        <Container>
            <img src={item.src}></img>
            <Container>
                <h4></h4>
                <p></p>
                <span></span>
                <Container>
                    <Container className={styles.card__button_block}>
                            <Button type='button' 
                                className={styles.count__button} 
                                onClick={handleRemoveClick}>
                                <Minus size={17} />
                            </Button>
                            <span className={clsx('text m-0 text_size_middle', styles.count)}>{count}</span>
                            <Button type='button' 
                                className={styles.count__button} 
                                onClick={() => {}}
                            >
                                <Plus size={17}/>
                            </Button>
                        </Container>
                </Container>
            </Container>
        </Container>
    )
};