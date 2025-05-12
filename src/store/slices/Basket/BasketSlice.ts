import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBasketItem, TIngredient, TPizzaBasketItem } from "../../../types/types"
import { RootState } from "../../store";

export type TBasketSlice = {
    basketItems: TBasketItem[];
    total: number;
};

export const initialState: TBasketSlice = {
    basketItems: [],
    total: 0,
};

const areIngredientsEqual = (a: TIngredient[], b: TIngredient[]) => {
    if (a.length === 0 && b.length === 0) return true;
    if (a.length !== b.length) return false;
    return a.every(ing => b.some(bIng => bIng.id === ing.id));
};

export const BasketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        addToBasket: (
            state, 
            { payload }: PayloadAction<TBasketItem>
        ) => {

            if (payload.type === 'pizza') {
                const existingPizza = state.basketItems.find(item => 
                    item.type === 'pizza' &&
                    item.productId === payload.productId &&
                    item.price / item.count === payload.price / payload.count &&
                    item.description === payload.description &&
                    areIngredientsEqual(item.ingredients, payload.ingredients)
                ) as TPizzaBasketItem | undefined;

                if (existingPizza) {
                    existingPizza.count += 1;
                    existingPizza.price = (existingPizza.price / (existingPizza.count - 1)) * existingPizza.count;
                    state.total = state.basketItems.reduce((sum, item) => sum + item.price, 0);
                    return;
                }
            } else {
                const existingItem = state.basketItems.find(item => 
                    item.type === 'other' &&
                    item.productId === payload.productId &&
                    item.price / item.count === payload.price / payload.count &&
                    item.description === payload.description
                );
                
                if (existingItem) {
                    existingItem.count += 1;
                    existingItem.price = (existingItem.price / (existingItem.count - 1)) * existingItem.count;
                    state.total = state.basketItems.reduce((sum, item) => sum + item.price, 0);
                    return;
                }
            };

            state.basketItems.push({
                ...payload,
                count: 1
            });

            state.total = state.basketItems.reduce((sum, item) => sum + item.price, 0);
        },
        removeFromBasket: (
            state,
            { payload }: PayloadAction<{ id: string }>
        ) => {
            const itemIndex = state.basketItems.findIndex(item => item.id === payload.id);

                if (itemIndex === -1) return; 

            const item = state.basketItems[itemIndex];
            const basePrice = item.price / item.count;

            if (item.count === 1) {
                state.basketItems.splice(itemIndex, 1);
            } else {
                item.count -= 1;
                item.price = basePrice * item.count;
            }

            state.total = state.basketItems.reduce((sum, item) => sum + item.price, 0);
        }
    },
    selectors: {
        getBasketItemsCount: (state) => {
            return state.basketItems.reduce((count, item) => count + item.count, 0);
        }
    }
});

export const {
    addToBasket,
    removeFromBasket,   
} = BasketSlice.actions;

export const { getBasketItemsCount } = BasketSlice.selectors;

export const selectBasketItems = (state: RootState) => state.basketSlice.basketItems;
export const selectTotalPrice = (state: RootState) => state.basketSlice.total;