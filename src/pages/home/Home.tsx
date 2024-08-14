import clsx from "clsx";
import { Categories, TopBar } from "../../components";
import { Container } from "../../ui";
import styles from './styles.module.scss'

export function Home() {
    return <>
        <Container>
            <h2 className={clsx('text_size_large', 'text', styles.home__title)}>Все пиццы</h2>
            <TopBar />
        </Container>
    </>
}