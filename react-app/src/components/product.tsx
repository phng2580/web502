import React from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '~/interface/product'

type TProps = {
  products: TProduct[]
}

const Product = (props: TProps) => {
  return (
    <section className='products py-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>Sản phẩm</h2>
        <div className='row'>
          {props.products.map((product) => (
            <div className='col-md-4 mb-4' key={product.id}>
              <div className='card' style={{ maxHeight: '600px' }}>
                <img src={product.thumbnail} className='card-img-top' alt='Product 1' style={{ height: '200px' }} />
                <div className='card-body '>
                  <Link to={`/shop/${product.id}`}>
                    <h5 className='card-title'>{product.title}</h5>
                  </Link>

                  <p className='card-text' style={{ maxHeight: '20px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.description}
                  </p>
                  <p className='fw-bold' style={{ color: 'rgb(247, 7, 87)' }}>
                    {product.price}$
                  </p>
                  <p>{product.discountPercentage && 'Dang cap nhat'}</p>

                  <div className='d-flex justify-content-center'>
                    <a
                      href='#'
                      className='btn d-flex align-items-center justify-content-center bg-light text-primary border-0 mx-2 p-3'
                    >
                      Thêm vào giỏ hàng
                    </a>
                    <a
                      href='#'
                      className='btn d-flex align-items-center justify-content-center border-0 p-2'
                      style={{ backgroundColor: 'rgb(247, 7, 87)', color: 'white' }}
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product
