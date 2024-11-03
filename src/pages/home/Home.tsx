import clsx from "clsx";
import { Filters, TopBar } from "../../components";
import { Container } from "../../ui";
import styles from './styles.module.scss'

export function Home() {
    return <>
        <Container className={styles.title__container}>
            <h2 className={clsx('text_size_large', 'text', styles.home__title)}>Все пиццы</h2>
        </Container>
        <TopBar />
        <Container className={styles.container}>
            <Filters />
        </Container>
    </>
}