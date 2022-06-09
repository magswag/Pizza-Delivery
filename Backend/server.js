"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 5500;
const app = (0, express_1.default)();
const products = [
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Pepperoni', price: 17900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Diavola', price: 18900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png" },
];
app.get('/products', (req, res) => {
    res.json({ data: products });
});
app.get('/product/:name', (req, res) => {
    const query = req.params.name.toLowerCase();
    const product = products.find(p => p.name.toLowerCase() === query);
    res.status(200).json({ data: product });
});
app.listen(port, () => console.log(`Server started on port ${port}`));
