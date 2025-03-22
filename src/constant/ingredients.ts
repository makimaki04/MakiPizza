export const categories = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
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

export const ingredients = [
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

export const pizza = [
    {   
        id: '1',
        title: 'Баварская', 
        description: 'Баварские колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, фирменный томатный соус', 
        src: 'https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif', 
        price: 250,
        category: 'pizza'
    }, 

    {
        id: '2',
        title: 'Бефстроганов ', 
        description: 'Пряная говядина, шампиньоны, ароматный грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо', 
        src: 'https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif', 
        
        price: 300,
        category: 'pizza'
    },
    {
        id: '3',
        title: 'Овощи и грибы', 
        description: 'Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы', 
        src: 'https://media.dodostatic.net/image/r:584x584/11ee7d61546d8483a61a0bbaa7adcc78.avif', 
        price: 800,
        category: 'pizza'
    },
    {
        id: '4',
        title: 'Чилл Грилл ', 
        description: 'Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо', 
        src: 'https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif', 
        price: 500,
        category: 'pizza'
    },
    {
        id: '5',
        title: 'Пепперони фреш ', 
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус', 
        src: 'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif', 
        price: 745,
        category: 'pizza'
    },
    {
        id: '6',
        title: 'Ветчина и грибы ', 
        description: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус', 
        src: 'https://media.dodostatic.net/image/r:584x584/11ef5b10b39bbbbda9f8c4e4ff1b067c.avif', 
        price: 450,
        category: 'pizza'
    }
    ];

export const pizzaVariations = [
    {
        productId: '1',
        doughType: 'traditional',
        size: 'small',
        img: '019591a2daa67853a5f9e00acb20f6b4.avif'
    },
    {
        productId: '1',
        doughType: 'traditional',
        size: 'middle',
        img: '019591a2e222794a81731c99f3cc34ec.avif'
    },
    {
        productId: '1',
        doughType: 'traditional',
        size: 'large',
        img: '019591a2f375703390252bbac9bf1cc6.avif'
    },
    {
        productId: '1',
        doughType: 'thin',
        size: 'middle',
        img: '019591a2ea88709aad819409efa194d4.avif'
    },
    {
        productId: '1',
        doughType: 'thin',
        size: 'large',
        img: '019591a2fa8370419c7a7f799c268615.avif'
    },
    {
        productId: '2',
        doughType: 'traditional',
        size: 'small',
        img: '01953cebc82b777c96bfd4dd1a377eb0.avif'
    },
    {
        productId: '2',
        doughType: 'traditional',
        size: 'middle',
        img: '01953ced168c758399984df8561623a3.avif'
    },
    {
        productId: '2',
        doughType: 'traditional',
        size: 'large',
        img: '01953cece9107770849481f54187a17f.avif'
    },
    {
        productId: '2',
        doughType: 'thin',
        size: 'middle',
        img: '01953ced22e872f0acf1d1b2034330fd.avif'
    },
    {
        productId: '2',
        doughType: 'thin',
        size: 'large',
        img: '01953ced410e710d9d49552f6e2b9b9b.avif'
    },
    {
        productId: '3',
        doughType: 'traditional',
        size: 'small',
        img: '11ee7d61543cb077931c15b0e271347f.avif'
    },
    {
        productId: '3',
        doughType: 'traditional',
        size: 'middle',
        img: '11ee7d61546d8483a61a0bbaa7adcc78.avif'
    },
    {
        productId: '3',
        doughType: 'traditional',
        size: 'large',
        img: '11ee7d6154c786f2940500127aa6d33e.avif'
    },
    {
        productId: '3',
        doughType: 'thin',
        size: 'middle',
        img: '11ee7d6154983942b98a2318a1455f88.avif'
    },
    {
        productId: '3',
        doughType: 'thin',
        size: 'large',
        img: '11ee7d6154ed7cedada4f410c8947498.avif'
    },
    {
        productId: '4',
        doughType: 'traditional',
        size: 'small',
        img: '019591c6990b7898b2da3a4645998358.avif'
    },
    {
        productId: '4',
        doughType: 'traditional',
        size: 'middle',
        img: '019591c69fac7921a27e4ecd8c99f9df.avif'
    },
    {
        productId: '4',
        doughType: 'traditional',
        size: 'large',
        img: '019591c6ae147092bab65405e08e005b.avif'
    },
    {
        productId: '4',
        doughType: 'thin',
        size: 'middle',
        img: '019591c6a7c97581b792c83177e69365.avif'
    },
    {
        productId: '4',
        doughType: 'thin',
        size: 'large',
        img: '019591c6b5dd71dc80b0d5e7b3e3ddd4.avif'
    },
    {
        productId: '5',
        doughType: 'traditional',
        size: 'small',
        img: '11ee7d612f98bc0ea828957caff9c8ec.avif'
    },
    {
        productId: '5',
        doughType: 'traditional',
        size: 'middle',
        img: '11ee7d612fc7b7fca5be822752bee1e5.avif'
    },
    {
        productId: '5',
        doughType: 'traditional',
        size: 'large',
        img: '11ee7d6130241e75b0ab33725248c0d0.avif'
    },
    {
        productId: '5',
        doughType: 'thin',
        size: 'middle',
        img: '11ee7d612ff49f2c98064fb647c3aa86.avif'
    },
    {
        productId: '5',
        doughType: 'thin',
        size: 'large',
        img: '11ee7d61304faf5a98a6958f2bb2d260.avif'
    },
    {
        productId: '6',
        doughType: 'traditional',
        size: 'small',
        img: '11ee7d611f62c45b81e28c4c8b57a356.avif'
    },
    {
        productId: '6',
        doughType: 'traditional',
        size: 'middle',
        img: '11ef5b10b39bbbbda9f8c4e4ff1b067c.avif'
    },
    {
        productId: '6',
        doughType: 'traditional',
        size: 'large',
        img: '11ee7d611ff4e070bc833c66d67f2e44.avif'
    },
    {
        productId: '6',
        doughType: 'thin',
        size: 'middle',
        img: '11ef5b10b4f3f53a86693b1614a719e7.avif'
    },
    {
        productId: '6',
        doughType: 'thin',
        size: 'large',
        img: '11ee7d612021428999227f0b5fbb5b40.avif'
    }
]
