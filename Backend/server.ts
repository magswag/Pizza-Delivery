import express, { Application, Request, Response } from 'express';

const port = 5500;

const app: Application = express()

type Product = {
    name: string;
    price: number;
    image: string;
};

const products: Product[] = [
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Pepperoni', price: 17900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Diavola', price: 18900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},
    { name: 'Margarita', price: 15900, image: "https://pizzashow.no/image/cache/catalog/pizza-nou/Pizza-Tropicale-500x500.png"},


];

app.get<{}, { data: Product[] }>('/products', (req, res) => {
    res.json({ data: products });
});

app.get<
    { name: string; },
    { data: Product }
>('/product/:name', (req: Request, res: Response) => {
    const query: string = req.params.name.toLowerCase();
    const product: Product = products.find(p => p.name.toLowerCase() === query);
    res.status(200).json({ data: product });
});

app.listen(port, () => console.log(`Server started on port ${port}`));

