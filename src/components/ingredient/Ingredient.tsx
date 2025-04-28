import styles from './styles.module.scss'
import { CircleCheck } from "lucide-react";
import clsx from "clsx";

interface IngredientProps {
    id: string;
    title: string;
    price: number;
    src: string;
    isChecked: boolean;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Ingredient({ id, title, price, src, onClick, isChecked }: IngredientProps) {
    const handleClick = () => {
        const mockEvent = {
            target: {
                id,
                value: price,
                checked: !isChecked,
            }
        } as unknown as React.ChangeEvent<HTMLInputElement>;

        onClick(mockEvent);
    }

    return (
        <div onClick={handleClick} className={clsx('text_size_small text',styles.ingredient, isChecked && styles.checked)}>
            <input 
              id={id}
              type="checkbox"
              checked={isChecked}
              value={price}
              className={styles.hidden__input}
            />
            <img src={src} alt={title} className={styles.image} />
            <p className={clsx(styles.title, 'm-0')}>{title}</p>
            <p className={clsx(styles.price, 'm-0')}>{price} ₽</p>
            <CircleCheck size={20} className={clsx(isChecked && styles.check__mark_active, styles.check__mark)} />
        </div>
    )
}