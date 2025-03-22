import { useMemo } from "react"
import { pizzaVariations } from "../constant/ingredients";

interface ImageSrc {
    src: string
}

export const useProductImage = (id: string, size: string, dough: string): ImageSrc => {
    return useMemo(() => {
        const baseUrl = 'https://media.dodostatic.net/image';
        let imageName = '';

        const pizza = pizzaVariations.find((item) => {
            return item.productId === id && item.doughType === dough && item.size === size;
        });

        if (pizza) {
            imageName = pizza.img;
        }

        const src = `${baseUrl}/r:760x760/${imageName}`;

        return {
            src
        }
    }, [id, size, dough])
}