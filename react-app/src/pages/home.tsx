import { useEffect, useState } from 'react'
import Product from '~/components/product'
import ProductList from '~/components/productList'
import { TProduct } from '~/interface/product'

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <div>
      <Product products={products} />
    </div>
  )
}

export default Home
