import styles from './styles.module.scss'

export function Search() {
    return <input type="search" placeholder="Поиск пиццы..." className={`text ${styles.search__input}`}/>
}