import { useMemo } from "react";
import { Product, SortType } from "../../types/types";
import { Container } from "../../ui";
import { ProductItem } from "../product-item/Product-item";
import styles from "./styles.module.scss"

export interface ProductListProps {
    products: Product[];
    sortBy: SortType;
}


export const ProductList = ({ products, sortBy }: ProductListProps) => {
    const sortedProducts = useMemo(() => {
        if (sortBy === 'price') {
            return [...products].sort((a,b) => a.price- b.price);
        } 

        return products
    }, [products, sortBy])

    return (
        <Container className={styles.container}>
            {sortedProducts.map((item, index) => (
                <ProductItem product={item} key={index} />
            ))}
        </Container>
    )
}