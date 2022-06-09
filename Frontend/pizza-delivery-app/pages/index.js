import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch("http://localhost:5500/products")
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

export default function Home({ products }) {
  return (
    <div className="container">
      <Head>
        <title>Pizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "4px", padding: "8px" }}>
        {products.data.map((product, i) => (
          <Link href={`/product/${product.name}`} key={i}>
            <div style={{ background: "#efefef", borderRadius: "12px" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", padding: "24px" }} />
              <h1 style={{ margin: "0px" }}>{product.name}</h1>
              <p>{product.price / 100}</p>
            </div>
          </Link>
        ))}
      </div>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
