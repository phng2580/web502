import React from 'react'

type Props = {}

const product = (props: Props) => {
  return (
    <section className='products py-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>Sản phẩm</h2>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='card'>
              <img src='https://picsum.photos/id/7/200/200' className='card-img-top' alt='Product 1' />
              <div className='card-body'>
                <h5 className='card-title'>Sản phẩm 1</h5>
                <p className='card-text'>Mô tả ngắn về sản phẩm 1.</p>
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
        </div>
      </div>
    </section>
  )
}

export default product
