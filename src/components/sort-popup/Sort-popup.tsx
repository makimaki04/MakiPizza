import { ArrowUpDown } from "lucide-react";
import { Button, Container } from "../../ui";
import styles from "./styles.module.scss"
import clsx from "clsx";
import { useState } from "react";

const categories = ['по рейтингу', 'по цене'];

export function SortPopup() {
    const [category, setCategory] = useState<string>(categories[0]);

    const onClick = (index: number) => {
        setCategory(categories[index]);
    }

    return <>
        <Container className={styles.container}>
            <ArrowUpDown className={styles.icon} size={16} />
            <p className={clsx('text', 'm-0', 'text_size_middle')}>Сортировка:</p>
            <Button type='button' className={styles.button}>
                {category}
                 <span className={styles.popup}>
                    {categories.map((category, index) => (
                        <Button type='button' onClick={() => {onClick(index)}} className={styles.category__button}>{category}</Button>
                    ))}
                 </span>
                 </Button>
        </Container>
    </>
}