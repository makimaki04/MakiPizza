import { SORT_OPTIONS } from "../constant/sort";

export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    src: string
    category: string
}


export type BaseProductInfo = {
    productId: string,
    weight: string,
    img: string,
    price: number,
}

export type PizzaInfo = BaseProductInfo & {
    doughType: string; // Обязательно для пицц
    size: string;      // Обязательно для пицц
};

export type RegularProductInfo = BaseProductInfo & {
    doughType?: never;
    size?: never;      
};

export type ProductInfo = PizzaInfo | RegularProductInfo;

export type SortType = keyof typeof SORT_OPTIONS;