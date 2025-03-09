interface productsListProps {
    id?: string;
    src?: string;
    name?: string;
    price?: number;
    image?: string;
    description?: string;
    content?: string;
}

const productsList: productsListProps[] = [
    {
        id: '1',
        name: 'Ritual Candle - Farewell Candle',
        price: 28.90,
        image: '/src/assets/images/product1.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },

    {
        id: '2',
        name: 'product2',
        price: 58.90,
        image: '/src/assets/images/product2.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },

    {
        id: '3',
        name: 'Ritual Candle - Farewell Candle',
        price: 128.90,
        image: '/src/assets/images/product3.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },

    {
        id: '4',
        name: 'Ritual Candle - Farewell Candle',
        price: 283.90,
        image: '/src/assets/images/product4.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },

    {
        id: '5',
        name: 'Ritual Candle - Farewell Candle',
        price: 228.90,
        image: '/src/assets/images/product1.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },

    {
        id: '6',
        name: 'Ritual Candle - Farewell Candle',
        price: 528.90,
        image: '/src/assets/images/product2.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },

    {
        id: '7',
        name: 'Ritual Candle - Farewell Candle',
        price: 18.90,
        image: '/src/assets/images/product3.webp',
        description: 'Perhaps your beloved animal has crossed the rainbow bridge, or a loved one has left this planet. You can use this candle as a ritual candle to stand by your deceased loved one.',
    },
];

export default productsList;  