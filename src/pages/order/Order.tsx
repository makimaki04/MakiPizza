import clsx from "clsx"
import { BasketItem, Logo } from "../../components"
import { Button, Container } from "../../ui"
import styles from './styles.module.scss'
import { User } from "lucide-react"
import { useSelector } from "react-redux"
import { selectBasketItems } from "../../store/slices/Basket/BasketSlice"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export const Order = () => {
    const basketItems = useSelector(selectBasketItems);
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<IFormInput>()

    if (basketItems.length === 0) navigate('/')

    return (
    <Container className={styles.container}>
        <Container className={styles.header}>
            <Logo />
            <Button type="button" className={clsx(styles.button, styles.login)}>
              <User className={styles.user__icon} size={16} />
              Войти
            </Button>
        </Container>
        <Container className={styles.title__container}>
             <h2 className={clsx('m-0 p-0 text text_size_large')}>Оформление заказа</h2>
        </Container>
        <Container className={styles.order__container}>
            <Container className={styles.order__info__block}>
                 <Container className={clsx(styles.basket__container, styles.info__container)}>
                <h3 className={clsx('text m-0 bold text_size_medium')}>1. Корзина</h3>
                <span className={styles.separator} />
                {basketItems.map((item, index) => (
                    <>
                        <BasketItem item={item} className={styles.basket__item} separator={false} key={item.id} />
                        {index !== basketItems.length - 1 && <span className={styles.separator} />}
                    </>
                ))}
            </Container>
            <Container className={clsx(styles.info__container)}>
                <h3 className={clsx('text m-0 bold text_size_medium')}>2. Персональная информация</h3>
                <span className={styles.separator} />
                <form className={styles.contact__info__form}>
                    <Container className={styles.form__field}>
                        <label htmlFor="firstName" className={clsx('text bold text_size_small m-0 p-0')}>Имя</label>
                        <input 
                        id="firstName"
                        placeholder="Иван"
                        {...register("firstName", {
                            required: "Имя обязательно",
                            pattern: { value: /^[A-Za-zA-Яа-яЁё]+$/, message: 'Имя должно содержать только буквы'}
                        })}
                        className={styles.input}
                        />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </Container>
                    
                    <Container className={styles.form__field}>
                        <label htmlFor="lastName" className={clsx('text bold text_size_small m-0 p-0')}>Фамилия</label>
                        <input 
                            id="lastName"
                            placeholder="Иванов"
                            {...register("lastName", { 
                            required: "Фамилия обязательна", 
                            pattern: { value: /^[A-Za-zА-Яа-яЁё]+$/, message: "Фамилия должна содержать только буквы" } 
                            })}
                            className={styles.input}
                        />
                        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                    </Container>
                    
                    <Container className={styles.form__field}>
                        <label htmlFor="phone" className={clsx('text bold text_size_small m-0 p-0')}>Телефон</label>
                        <input 
                            id="phone"
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            {...register("phone", { 
                            required: "Телефон обязателен", 
                            minLength: { value: 10, message: "Минимум 10 цифр" } 
                            })}
                            className={styles.input}
                        />
                        {errors.phone && <p className="error">{errors.phone.message}</p>}
                    </Container>

                    <Container className={styles.form__field}>
                        <label htmlFor="email" className={clsx('text bold text_size_small m-0 p-0')}>E-Mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="ivan@ivanov.ru"
                            {...register("email", { 
                            required: "Email обязателен", 
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Некорректный email" } 
                            })}
                            className={styles.input}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </Container>
                </form>
            </Container>

            <Container className={clsx(styles.info__container)}>
                <h3 className={clsx('text m-0 bold text_size_medium')}>3. Адрес доставки</h3>
                <span className={styles.separator} />
                <form className={styles.contact__info__form}>
                    <Container className={styles.form__field}>
                        <label htmlFor="address" className={clsx('text bold text_size_small m-0 p-0')}>Введите адрес</label>
                        <input 
                        id="address"
                        placeholder="Москва, Ленинский пр-т д.12"
                        {...register("firstName", {
                            required: "Имя обязательно",
                            pattern: { value: /^[A-Za-zA-Яа-яЁё]+$/, message: 'Имя должно содержать только буквы'}
                        })}
                        className={styles.input}
                        />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </Container>
                </form>
            </Container>
           
            </Container>
        </Container>
    </Container>
    )
}