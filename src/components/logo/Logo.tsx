import clsx from "clsx"
import { Container, LogoImg } from "../../ui"
import logo from '../../assets/images/logo.png';
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    }
    return (
            <Container className={styles.logo__container} onClick={() => onClick()}>
            <LogoImg
                src={logo}
                alt="Логотип в виде кусочка пиццы"
            />

            <Container className={styles.title__container}>
                <h1 className="m-0 text">Makki Pizza</h1>
                <p
                className={clsx(
                    "m-0",
                    "text",
                    "text-size-middle",
                    styles.logo__description
                )}
                >
                вкусней уже некуда
                </p>
            </Container>
            </Container>
    )
        
    
}