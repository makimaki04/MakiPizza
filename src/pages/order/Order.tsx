import clsx from "clsx"
import { BasketItem, Logo } from "../../components"
import { Button, Container } from "../../ui"
import styles from './styles.module.scss'
import { MoveLeft, MoveRight, PackageOpen, Percent, Truck, User } from "lucide-react"
import { useSelector } from "react-redux"
import { selectBasketItems, selectTotalPrice } from "../../store/slices/Basket/BasketSlice"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  comment?: string
}

export const Order = () => {
    const basketItems = useSelector(selectBasketItems);
    const navigate = useNavigate();
    const price = useSelector(selectTotalPrice);
    const tax = Math.floor(price * 0.05);
    const delivery = price < 1000 ? 350 : 150; 
    const cost = price + tax + delivery;

    const { 
        register, 
        formState: { errors } 
    } = useForm<IFormInput>()

    if (basketItems.length === 0) navigate('/')

    const onBackButtonClick = () => {
        navigate('/');
    }

    const onBtnClick = () => {

    }

    return (
    <Container className={styles.container}>
        <Container className={styles.header}>
            <Logo />
            <Container className={styles.header__button__container}>
                <Button type="button" className={styles.arrow__button} onClick={onBackButtonClick}>
                    <MoveLeft size={29} />
                </Button>
                <Button type="button" className={clsx(styles.button, styles.login)}>
                    <User className={styles.user__icon} size={16} />
                    Профиль
                </Button>
            </Container> 
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
                            required: "Введите Ваше имя",
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
                            required: "Введите Вашу фамилию", 
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
                            required: "Введите номер телефона", 
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
                            required: "Введите Email", 
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
                <form className={styles.address__form}>
                    <Container className={styles.form__field}>
                        <label htmlFor="address" className={clsx('text bold text_size_small m-0 p-0')}>Введите адрес</label>
                        <input 
                        id="address"
                        placeholder="Москва, Ленинский пр-т д.12"
                        {...register("address", {
                            required: "Введите адрес",
                            pattern: { value: /^[A-Za-zA-Яа-яЁё]+$/, message: 'Имя должно содержать только буквы'}
                        })}
                        className={styles.input}
                        />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </Container>

                     <Container className={styles.form__field}>
                        <label htmlFor="comment" className={clsx('text bold text_size_small m-0 p-0')}>Комментарий к заказу</label>
                        <textarea 
                        id="comment"
                        placeholder="Укажите тут дополнительную информацию для курьера"
                        {...register("comment", {})}
                        className={styles.textrea}
                        />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </Container>
                </form>
            </Container>
            </Container>

            <Container className={styles.cost__container}>
                <Container className={styles.price__container}>
                    <p className={clsx('text m-0 p-0 text_size_medium')}>Итого:</p>
                    <p className={clsx('text m-0 p-0 text_size_medium bold')}>{cost} ₽</p>
                </Container>
                    
                <span className={styles.separator} />

                <Container className={styles.cost__info__container}>
                        <Container className={styles.cost__info}>
                            <Container className={styles.description__block}>
                                <PackageOpen size={15} className={styles.icon} />
                                <p 
                                className={clsx('m-0 text text_size_middle', styles.description)}
                                >
                                    Стоимость товаров:
                                </p>
                            </Container>
                            <p 
                            className={clsx('m-0 text text_size_middle bold', styles.price)}
                            >
                                {price} ₽
                            </p>
                        </Container>

                        <Container className={styles.cost__info}>
                            <Container className={styles.description__block}>
                                <Percent size={16} className={styles.icon} />
                                    <p 
                                    className={clsx('m-0 text text_size_middle', styles.description)}
                                    >
                                        Налоги:
                                    </p>
                            </Container>
                            <p 
                            className={clsx('m-0 text text_size_middle bold', styles.price)}
                            >
                                {tax} ₽
                            </p>
                        </Container>

                        <Container className={styles.cost__info}>
                            <Container className={styles.description__block}>
                                <Truck size={16} className={styles.icon} />
                                <p 
                                className={clsx('m-0 text text_size_middle', styles.description)}
                                >
                                    Доставка:
                                </p>
                            </Container>
                            <p 
                            className={clsx('m-0 text text_size_middle bold', styles.price)}
                            >
                                {delivery} ₽
                            </p>
                        </Container>
                </Container>

                    <Button 
                    type="button" 
                    className={clsx('text bold', styles.confirm__button)}
                    onClick={onBtnClick}
                    >
                        К оформлению заказа
                        <MoveRight size={25} className={styles.arrow} />
                    </Button>
            </Container>
        </Container>
    </Container>
    )
}