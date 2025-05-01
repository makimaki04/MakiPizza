    import { useCallback, useEffect, useMemo, useRef, useState } from "react";
    import { Button, Container } from "../../ui";
    import styles from "./styles.module.scss"
    import clsx from "clsx";
    import { doughType, ingredients, pizzaSize } from "../../constant/ingredients";
    import { X } from "lucide-react";
    import { useProductInfo } from "../../hooks/useProductInfo";
    import { Ingredient } from "../ingredient/Ingredient";

    export interface ProductCardProps {
        title: string;
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

    export const ProductCard = ({ id, title, onAdd, onClose, category }: ProductCardProps) => {
        const [ size, setSize ] = useState<{index: number, size: string}>({index: 1, size: 'middle'});
        const [ dough, setDough ] = useState<{index: number, type: string}>({index: 0, type: 'traditional'});
        const [basePrice, setBasePrice] = useState<number>(0);
        const [additionalPrice, setAdditionalPrice] = useState<number>(0);
        const [selectedIngredients, setSelectedIngredients] = useState<{[id: string]: boolean}>({});

        const isThinDisabled = size.size === 'small';

        const handleSizeChange = useCallback((index: number) => {
            if (pizzaSizeMap[index] === 'small') {
                setDough({ index: 0, type: doughTypeMap[0] });
            }

            setSize({ index, size: pizzaSizeMap[index] });
        }, []);

        const handleDoughChange = useCallback((index: number) => {
            if (isThinDisabled && doughTypeMap[index] === "thin") return;
            setDough({ index, type: doughTypeMap[index] });
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
                clearTimeout(timerRef.current);
            }
        }, []);

        let src: string;
        let description: string[];
        let price: number;

        if (category === 'pizza') {
            ({ src, description, price } = useProductInfo(id, size.size, dough.type));
        } else {
            ({ src, description, price } = useProductInfo(id));
        }

        useEffect(() => {
            setBasePrice(price);
        }, [price]);


        const addIngredient = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            const { id, value, checked } = e.target;
            setSelectedIngredients(prev => ({
                ...prev,
                [id]: checked
            }));
            setAdditionalPrice(prev => 
                checked ? prev + Number(value) : prev - Number(value)
            );
        }, [])

        const timerRef = useRef<any>();

        const handleAddToCart = ()  => {
            onAdd();

            timerRef.current = setTimeout(() => {
                setAdditionalPrice(0)
                setSelectedIngredients({});
                setSize({index: 1, size: 'middle'});
                setDough({index: 0, type: 'traditional'});
            }, 300)
        }

        const totalPrice = useMemo(() => basePrice + additionalPrice, [basePrice, additionalPrice]);

        const sizeGliderPosition = `${139 * size.index}px`;
        const doughGliderPosition = `${208 * dough.index}px`;

        const isPizza = category === 'pizza';

        const isSmall = size.size === pizzaSizeMap[0];
        const isMiddle = size.size === pizzaSizeMap[1];
        const isLarge = size.size === pizzaSizeMap[2];

        return (
            <Container className={styles.card__contaier}>
                <Container className={styles.image__container}>
                    {isPizza ? (
                        <>
                            <img 
                            src={src} 
                            alt={title} 
                            className={clsx(styles.image, isSmall && styles.image__small, isMiddle && styles.image__middle, isLarge && styles.image__large)} 
                            />
                            <span className={clsx(styles.small__сircle, (!isMiddle && !isLarge) && styles.active)} />
                            <span className={clsx(styles.big__сircle, !isLarge && styles.active)} />
                        </>
                    ) : (
                        <img 
                        src={src} 
                        alt={title} 
                        className={styles.image__large}
                        />
                    )
                    }
                </Container>

                <Container className={styles.description__container}>
                    <Container className={styles.title__container}>
                        <h3 className={clsx('text_size_medium m-0 text')}>{title}</h3>
                        <p className={clsx('text_size_small m-0 text', styles.description)}>{description.join(', ')}</p>
                    </Container>

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
                                                    name='pizza-size'
                                                    defaultChecked={size.index === index}
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
                                                    defaultChecked={dough.index === index}
                                                    id={`dough-${index}`}
                                                    name="pizza-dough"
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
                            
                            <Container className={styles.add__ingredietns_container}>
                                <p className={clsx('text_size_medium text m-0 bold')}>Добавить по вкусу</p>
                                <Container className={styles.ingredients__container}>
                                    {ingredients.map((item, index) => (
                                        <Ingredient 
                                        id={item.id}
                                        title={item.title} 
                                        price={item.price} 
                                        src={item.src} 
                                        onClick={addIngredient} 
                                        isChecked={!!selectedIngredients[item.id]} 
                                        key={index} 
                                        />
                                    ))}
                                </Container>
                            </Container>
                        </>
                    )}
                    
                    <Button type="button" onClick={handleAddToCart} className={styles.add__bttuon}>
                        Добавить в корзину за {totalPrice} ₽
                    </Button>

                    
                </Container>
                <button className={styles.close__button} onClick={onClose}>
                    <X size={35} color='#FFFF' />
                </button>
            </Container>
        )
    }