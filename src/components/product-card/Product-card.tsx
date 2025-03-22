    import { useCallback, useEffect, useState } from "react";
    import { Button, Container } from "../../ui";
    import styles from "./styles.module.scss"
    import clsx from "clsx";
    import { doughType, pizzaSize } from "../../constant/ingredients";
import { X } from "lucide-react";

    export interface ProductCardProps {
        title: string;
        price: number;
        id: string;
        category: string;
        onAdd: () => void;
        onClose: () => void
    }

    const pizzaSizeMap: Record<number, string> = {
        0: "small",
        1: "middle",
        2: "large"
    }

    const doughTypeMap: Record<number, string> = {
        0: "traditional",
        1: "thin",
    }

    export function ProductCard({ title, price, onAdd, onClose, category }: ProductCardProps) {
        const [ sizeInd, setSizeInd ] = useState<{index: number, size: string}>({index: 1, size: 'middle'});
        const [ doughInd, setDoughInd ] = useState<{index: number, type: string}>({index: 0, type: 'traditional'});

        const isThinDisabled = sizeInd.size === 'small';

        const handleSizeChange = useCallback((index: number) => {
            if (pizzaSizeMap[index] === 'small') {
                setDoughInd({ index: 0, type: doughTypeMap[0] });
            }

            setSizeInd({ index, size: pizzaSizeMap[index] });
        }, []);

        const handleDoughChange = useCallback((index: number) => {
            if (isThinDisabled && doughTypeMap[index] === "thin") return;
            setDoughInd({ index, type: doughTypeMap[index] });
        }, [isThinDisabled]);

        useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            }

            document.addEventListener('keydown', handleEscape);

            return () => {
                document.removeEventListener('keydown', handleEscape);
            }
        }, []);

        const sizeGliderPosition = `${139 * sizeInd.index}px`;
        const doughGliderPosition = `${208 * doughInd.index}px`;

        const isPizza = category === 'pizza';

        return (
            <Container className={styles.card__contaier}>
                <Container className={styles.image__container}>
                    <img src='' />
                </Container>

                <Container className={styles.ingredients__container}>

                    <h3 className={clsx('text_size_medium m-0 text')}>{title}</h3>

                    {isPizza && (
                        <>
                            <Container className={styles.options__block}>
                                <Container className={styles.options__container}>
                                    <ul className={styles.settings__list}>
                                        {pizzaSize.map((item, index) => (
                                            <li key={index} 
                                            className={
                                                clsx(
                                                    styles.list__item, 
                                                    'text m-0 text_size_small'
                                                )}
                                            >
                                                <label 
                                                htmlFor={`size-${index}`}
                                                className={styles.option}
                                                onClick={() => handleSizeChange(index)}
                                                >
                                                    <input type='radio'
                                                    id={`size-${index}`}
                                                    checked={sizeInd.index === index}
                                                    />
                                                    {item.label}
                                                </label>
                                            </li>
                                        ))}
                                        <span className={styles.size__glider} style={{ left: sizeGliderPosition }} />
                                    </ul>
                                </Container>

                                <Container className={styles.options__container}>
                                    <ul className={styles.settings__list}>
                                        {doughType.map((item, index) => (
                                            <li key={index} 
                                            className={
                                                clsx(
                                                    styles.list__item, 
                                                    'text m-0 text_size_small',
                                                    isThinDisabled && doughTypeMap[index] === 'thin' && styles.list__item__disabled
                                                )}
                                            >
                                                <label
                                                htmlFor={`dough-${index}`}
                                                className={styles.option}
                                                onClick={() => handleDoughChange(index)}
                                                >
                                                    <input type='radio'
                                                    checked={doughInd.index === index}
                                                    id={`dough-${index}`}
                                                    disabled={isThinDisabled && doughTypeMap[index] === 'thin'}
                                                    />
                                                    {item.label}
                                                </label>
                                            </li>
                                        ))}
                                        <span className={styles.dough__glider} style={{ left: doughGliderPosition }} />
                                    </ul>
                                </Container>
                            </Container>
                            
                            <p className={clsx('text_size_medium text m-0 bold')}>Добавить по вкусу</p>
                        </>
                    )}
    
                    <Button type="button" onClick={onAdd} className={styles.add__bttuon}>
                        Добавить в корзину за {price} ₽
                    </Button>
                    
                </Container>
                <button className={styles.close__button} onClick={onClose}>
                    <X size={35} color='#FFFF' />
                </button>
            </Container>
        )
    }