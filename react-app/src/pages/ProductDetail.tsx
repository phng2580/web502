import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/api'
import NavDetail from '~/components/NavDetail'
import { TProduct } from '~/interface/product'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct>({
    title: '',
    price: 0,
    description: ''
  })
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [])
  return (
    <div>
      <NavDetail />
      <div>
        <div className='pb-5'>
          <h2>{product.title}</h2>
          <p>Gia: {product.price}</p>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt={product.title} style={{ height: '200px' }} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
