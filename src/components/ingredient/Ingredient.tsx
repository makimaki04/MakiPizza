import { useState } from "react"
import styles from './styles.module.scss'
import { CircleCheck } from "lucide-react";
import clsx from "clsx";

interface IngredientProps {
    title: string;
    price: number;
    src: string;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Ingredient({ title, price, src, onClick }: IngredientProps) {
    const [ isChecked, setIsChecked ] = useState<boolean>(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onClick(e); 
    };

    return (
        <label className={clsx('text_size_small text',styles.ingredient, isChecked && styles.checked)}>
            <input 
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              value={price}
              className={styles.hidden__input}
            />
            <img src={src} alt={title} className={styles.image} />
            <p className={clsx(styles.title, 'm-0')}>{title}</p>
            <p className={clsx(styles.price, 'm-0')}>{price} ₽</p>
            <CircleCheck size={20} className={clsx(isChecked && styles.check__mark_active, styles.check__mark)} />
        </label>
    )
}