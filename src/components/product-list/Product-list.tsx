import { Container } from "../../ui";
import { ProductItem } from "../product-item/Product-item";
import styles from "./styles.module.scss"

export interface ProductListProps {
    products: Ingredient[];
}

export type Ingredient = {
    title: string;
    price: number;
    description: string;
    src: string
}



export function ProductList({ products }: ProductListProps) {
    return (
        <Container className={styles.container}>
            {products.map((item) => (
                <ProductItem title={item.title} price={item.price} description={item.description} src={item.src}/>
            ))}
        </Container>
    )
}