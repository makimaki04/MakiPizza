import { ArrowUpDown } from "lucide-react";
import { Button, Container } from "../../ui";
import styles from "./styles.module.scss"
import clsx from "clsx";
import { useState } from "react";
import { SortType } from "../../types/types";
import { SORT_OPTIONS } from "../../constant/sort";

interface SortPopupProps {
    onChange: (sortType: SortType) => void;
}

export function SortPopup({ onChange }: SortPopupProps) {
    const [currentSort, setCurrentSort] = useState<SortType>('rating');

    const handleSortChange = (sortKey: SortType) => {
        setCurrentSort(sortKey);
        onChange(sortKey)
    }

    return <>
        <Container className={styles.container}>
            <ArrowUpDown className={styles.icon} size={16} />
            <p className={clsx('text', 'm-0', 'text_size_middle')}>Сортировка:</p>
            <Button type='button' className={styles.button}>
                {SORT_OPTIONS[currentSort]}
                 <span className={styles.popup}>
                    {Object.entries(SORT_OPTIONS).map(([key, label]) => (
                        <Button key={key} type='button' onClick={() => {handleSortChange(key as SortType)}} className={styles.category__button}>{label}</Button>
                    ))}
                 </span>
                 </Button>
        </Container>
    </>
}