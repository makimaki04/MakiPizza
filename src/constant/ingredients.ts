import { TProduct, ProductInfo } from "../types/types";

export const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Кофе",
  "Напитки",
  "Десерты",
];

export const doughType = [
    {
        label: "Традиционное",
        value: "slim",
    },
    {
        label: "Тонкое",
        value: "tradirional",
    }
];

export const pizzaSize = [
    {
        label: "25 см",
        value: "small",
    },
    {
        label: "30 см",
        value: "medium",
    },
    {
        label: "35 см",
        value: "large",
    },
  ];

export const ingredientsFilter = [
    {
        label: 'Сырный соус',
        value: "Sauce",
    }, 
    {
        label: 'Моцарелла',
        value: "cheese",
    }, 
    {
        label: 'Чеснок',
        value: "garlic",
    }, 
    {
        label: 'Соленые огурчики',
        value: "pickle",
    }, 
    {
        label: 'Красный лук',
        value: "onion",
    }, 
    {
        label: 'Томаты',
        value: "tomatos",
    }, 
]

export const ingredients = [
    {
        id: 'spicy beef',
        title: 'Пряная говядина',
        price: 159,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png'
    },
    {
        id: 'mozarella',
        title: 'Моцарелла',
        price: 99,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png'
    },
    {
        id: 'cheddar cheese',
        title: 'Сыр чеддер и пармезан',
        price: 99,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796'
    },
    {
        id: 'jalapeno',
        title: 'Острый перец халапеньо',
        price: 79,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png'
    },
    {
        id: 'chicken',
        title: 'Нежный цыпленок',
        price: 99,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A'
    },
    {
        id: 'champignons',
        title: 'Шампиньоны',
        price: 79,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324'
    },
    {
        id: 'bacon',
        title: 'Бекон',
        price: 99,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F'
    },
    {
        id: 'ham',
        title: 'Ветчина',
        price: 99,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61'
    },
    {
        id: 'italian herbs',
        title: 'Итальянские травы',
        price: 39,
        src: 'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png'
    }
]

export const pizza: TProduct[] = [
    {   
        id: '98df7a545716',
        title: 'Баварская', 
        description: 'Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, фирменный томатный соус', 
        src: 'https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif', 
        price: 539,
        category: 'pizza'
    }, 

    {
        id: '6d5bd9568bb3',
        title: 'Бефстроганов ', 
        description: 'Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо', 
        src: 'https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif', 
        
        price: 549,
        category: 'pizza'
    },
    {
        id: '60603aa874b7',
        title: 'Овощи и грибы', 
        description: 'Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы', 
        src: 'https://media.dodostatic.net/image/r:584x584/11ee7d61546d8483a61a0bbaa7adcc78.avif', 
        price: 579,
        category: 'pizza'
    },
    {
        id: '0f325022a161',
        title: 'Чилл Грилл ', 
        description: 'Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо', 
        src: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif', 
        price: 519,
        category: 'pizza'
    },
    {
        id: '4e609b409ae5',
        title: 'Пепперони фреш ', 
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус', 
        src: 'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif', 
        price: 329,
        category: 'pizza'
    },
    {
        id: '0a25d67df8cb',
        title: 'Ветчина и грибы ', 
        description: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус', 
        src: 'https://media.dodostatic.net/image/r:584x584/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif', 
        price: 529,
        category: 'pizza'
    }];

export const otherProducts = [
    {
        id: 'c46b7f35fa2f',
        title: 'Кофе Карамельный капучино', 
        description: 'Классический капучино с молочной пенкой и карамельным сиропом', 
        src: 'https://media.dodostatic.net/image/r:292x292/11ee7d61aed6b6d4bfdad4e58d76cf56.avif', 
        price: 169,
        category: 'coffee'
    }
]

export const productsVariations: ProductInfo[] = [
    {
        productId: '98df7a545716',
        doughType: 'traditional',
        size: 'small',
        weight: '400 г',
        img: '019591a2daa67853a5f9e00acb20f6b4.avif',
        price: 539,
    },
    {
        productId: '98df7a545716',
        doughType: 'traditional',
        size: 'middle',
        weight: '590 г',
        img: '019591a2e222794a81731c99f3cc34ec.avif',
        price: 799,
    },
    {
        productId: '98df7a545716',
        doughType: 'traditional',
        size: 'large',
        weight: '820 г',
        img: '019591a2f375703390252bbac9bf1cc6.avif',
        price: 969,
    },
    {
        productId: '98df7a545716',
        doughType: 'thin',
        size: 'middle',
        weight: '440 г',
        img: '019591a2ea88709aad819409efa194d4.avif',
        price: 799,
    },
    {
        productId: '98df7a545716',
        doughType: 'thin',
        size: 'large',
        weight: '690 г',
        img: '019591a2fa8370419c7a7f799c268615.avif',
        price: 969,
    },
    {
        productId: '6d5bd9568bb3',
        doughType: 'traditional',
        size: 'small',
        weight: '400 г',
        img: '01953cebc82b777c96bfd4dd1a377eb0.avif',
        price: 549,
    },
    {
        productId: '6d5bd9568bb3',
        doughType: 'traditional',
        size: 'middle',
        weight: '590 г',
        img: '01953ced168c758399984df8561623a3.avif',
        price: 839,
    },
    {
        productId: '6d5bd9568bb3',
        doughType: 'traditional',
        size: 'large',
        weight: '820 г',
        img: '01953cece9107770849481f54187a17f.avif',
        price: 979,
    },
    {
        productId: '6d5bd9568bb3',
        doughType: 'thin',
        size: 'middle',
        weight: '440 г',
        img: '01953ced22e872f0acf1d1b2034330fd.avif',
        price: 839,
    },
    {
        productId: '6d5bd9568bb3',
        doughType: 'thin',
        size: 'large',
        weight: '690 г',
        img: '01953ced410e710d9d49552f6e2b9b9b.avif',
        price: 879,
    },
    {
        productId: '60603aa874b7',
        doughType: 'traditional',
        size: 'small',
        weight: '400 г',
        img: '11ee7d61543cb077931c15b0e271347f.avif',
        price: 579,
    },
    {
        productId: '60603aa874b7',
        doughType: 'traditional',
        size: 'middle',
        weight: '590 г',
        img: '11ee7d61546d8483a61a0bbaa7adcc78.avif',
        price: 849,
    },
    {
        productId: '60603aa874b7',
        doughType: 'traditional',
        size: 'large',
        weight: '820 г',
        img: '11ee7d6154c786f2940500127aa6d33e.avif',
        price: 999,
    },
    {
        productId: '60603aa874b7',
        doughType: 'thin',
        size: 'middle',
        weight: '440 г',
        img: '11ee7d6154983942b98a2318a1455f88.avif',
        price: 849,
    },
    {
        productId: '60603aa874b7',
        doughType: 'thin',
        size: 'large',
        weight: '690 г',
        img: '11ee7d6154ed7cedada4f410c8947498.avif',
        price: 999,
    },
    {
        productId: '0f325022a161',
        doughType: 'traditional',
        size: 'small',
        weight: '400 г',
        img: '019591c6990b7898b2da3a4645998358.avif',
        price: 519,
    },
    {
        productId: '0f325022a161',
        doughType: 'traditional',
        size: 'middle',
        weight: '590 г',
        img: '019591c69fac7921a27e4ecd8c99f9df.avif',
        price: 749,
    },
    {
        productId: '0f325022a161',
        doughType: 'traditional',
        size: 'large',
        weight: '820 г',
        img: '019591c6ae147092bab65405e08e005b.avif',
        price: 939,
    },
    {
        productId: '0f325022a161',
        doughType: 'thin',
        size: 'middle',
        weight: '440 г',
        img: '019591c6a7c97581b792c83177e69365.avif',
        price: 749,
    },
    {
        productId: '0f325022a161',
        doughType: 'thin',
        size: 'large',
        weight: '690 г',
        img: '019591c6b5dd71dc80b0d5e7b3e3ddd4.avif',
        price: 939,
    },
    {
        productId: '4e609b409ae5',
        doughType: 'traditional',
        size: 'small',
        weight: '400 г',
        img: '11ee7d612f98bc0ea828957caff9c8ec.avif',
        price: 329,
    },
    {
        productId: '4e609b409ae5',
        doughType: 'traditional',
        size: 'middle',
        weight: '590 г',
        img: '11ee7d612fc7b7fca5be822752bee1e5.avif',
        price: 559,
    },
    {
        productId: '4e609b409ae5',
        doughType: 'traditional',
        size: 'large',
        weight: '820 г',
        img: '11ee7d6130241e75b0ab33725248c0d0.avif',
        price: 679,
    },
    {
        productId: '4e609b409ae5',
        doughType: 'thin',
        size: 'middle',
        weight: '440 г',
        img: '11ee7d612ff49f2c98064fb647c3aa86.avif',
        price: 559,
    },
    {
        productId: '4e609b409ae5',
        doughType: 'thin',
        size: 'large',
        weight: '690 г',
        img: '11ee7d61304faf5a98a6958f2bb2d260.avif',
        price: 679,
    },
    {
        productId: '0a25d67df8cb',
        doughType: 'traditional',
        size: 'small',
        weight: '400 г',
        img: '11ee7d611f62c45b81e28c4c8b57a356.avif',
        price: 529,
    },
    {
        productId: '0a25d67df8cb',
        doughType: 'traditional',
        size: 'middle',
        weight: '590 г',
        img: '11ef5b10b39bbbbda9f8c4e4ff1b067c.avif',
        price: 769,
    },
    {
        productId: '0a25d67df8cb',
        doughType: 'traditional',
        size: 'large',
        weight: '820 г',
        img: '11ee7d611ff4e070bc833c66d67f2e44.avif',
        price: 889,
    },
    {
        productId: '0a25d67df8cb',
        doughType: 'thin',
        size: 'middle',
        weight: '440 г',
        img: '11ef5b10b4f3f53a86693b1614a719e7.avif',
        price: 769,
    },
    {
        productId: '0a25d67df8cb',
        doughType: 'thin',
        size: 'large',
        weight: '690 г',
        img: '11ee7d612021428999227f0b5fbb5b40.avif',
        price: 889,
    },
    {
        productId: 'c46b7f35fa2f',
        weight: '0.3 л',
        img: '11ee7d61aed6b6d4bfdad4e58d76cf56.avif',
        price: 169,
    }
]
