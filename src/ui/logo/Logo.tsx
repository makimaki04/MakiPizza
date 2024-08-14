import { ReactNode } from "react"
import styles from './styles.module.scss'

interface LogoProps {
    src: string,
    alt: string
}

export function Logo({ src, alt }: LogoProps): ReactNode {
    return <img className={styles.logo} src={src} alt={alt} />
}