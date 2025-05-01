import clsx from "clsx";
import { Filters, ProductList, TopBar } from "../../components";
import { Container } from "../../ui";
import styles from './styles.module.scss'
import { pizza } from "../../constant/ingredients";
import { useState } from "react";
import { SortType } from "../../types/types";

export const Home = () => {
    const [sortOption, setSortOption] = useState<SortType>('rating');

    return <>
        <Container className={styles.title__container}>
            <h2 className={clsx('text_size_large', 'text', styles.home__title)}>Все пиццы</h2>
        </Container>
        <TopBar onSortChange={setSortOption} />
        <Container className={styles.container}>
            <Filters />
            <ProductList products={pizza} sortBy={sortOption}></ProductList>
        </Container>
    </>
}