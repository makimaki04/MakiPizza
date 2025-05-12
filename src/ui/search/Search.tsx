import styles from './styles.module.scss'

export const Search = () => {
    return <input type="search" placeholder="Поиск пиццы..." className={`text ${styles.search__input}`}/>
}