import { useMemo } from "react"
import { productsVariations } from "../constant/ingredients";

interface ImageSrc {
    src: string,
    description: string[];
}

enum productOptions {
    'traditional' = 'традиционное тесто',
    'thin' = 'тонкое тесто',
    'small' = '25 см',
    'middle' = '30 см',
    'large' = '35 см',

}

export const useProductInfo = (id: string, size?: string, dough?: string): ImageSrc => {
    return useMemo(() => {
        const baseUrl = 'https://media.dodostatic.net/image';
        let imageName = '';
        const description = [];

        if (size && dough) {
            const pizza = productsVariations.find((item) => {
                return item.productId === id && item.doughType === dough && item.size === size;
            });

            if (pizza) {
                imageName = pizza.img;
                description.push(productOptions[pizza.size as keyof typeof productOptions], productOptions[pizza.doughType as keyof typeof productOptions], pizza.weight);
            }
        } else {
            const product = productsVariations.find((item) => {
                return item.productId === id;
            })

            if (product) {
                imageName = product.img;
                description.push('1 шт', product.weight)
            }
        }
        

        const src = `${baseUrl}/r:760x760/${imageName}`;

        return {
            src,
            description
        }
    }, [id, size, dough])
}