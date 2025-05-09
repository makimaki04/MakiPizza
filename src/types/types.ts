import { SORT_OPTIONS } from "../constant/sort";

export type TProduct = {
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

export type TIngredient = {
    id: string;
    title: string;
    price: number;
}

export type TBaseBasketItem = {
    id: string;
    productId: string;
    title: string;
    description: string;
    price: number;
    image: string;
    count: number;
};

export type TPizzaBasketItem = TBaseBasketItem & {
    type: 'pizza';
    ingredients: TIngredient[];
};

export type TOtherBasketItem = TBaseBasketItem & {
    type: 'other';
};

export type TBasketItem = TPizzaBasketItem | TOtherBasketItem;

export type SortType = keyof typeof SORT_OPTIONS;