import { useRouter } from 'next/router';

export const getStaticPaths = async () => {

    const res = await fetch("http://localhost:5500/products");
    const products = await res.json();

    const paths = products.data.map(product => ({
        params: { name: product.name },
    }));

    return {
        paths, //indicates that no page needs be created at build time
        fallback: false //indicates the type of fallback
    }
}

export async function getStaticProps({ params }) {


    const res = await fetch(`http://localhost:5500/product/${params.name}`)

    let product = await res.json()
    return {
        props: {
            product,
        },
    }
}

const Product = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h1>{product.data.name}</h1>
            <p>{product.data.price / 100}</p>
        </div>
    );
}

export default Product;