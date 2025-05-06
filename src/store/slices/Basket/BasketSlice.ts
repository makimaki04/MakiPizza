import { createSlice } from "@reduxjs/toolkit";
import { BasketItemType, IngredientType, Product } from "../../../types/types"

export type TBasketSlice = {
    basketItems: BasketItemType[];
    total: number;
};

export const initialState: TBasketSlice = {
    basketItems: [],
    total: 0,
}

export const BasketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addToBasket: {
            prepare: (baseProduct: Product, ingredients?: IngredientType[]) {
                if (ingredients) {
                    const description = 
                }
            }
        }
    }
})