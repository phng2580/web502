import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='bg text-white align-items-center py-4'>
      <div className='container-fluid'>
        <div className='row g-0'>
          <div className='col bg-info col-lg-4 ps-4'>
            <div className='text'>
              <h6 className='display-6 pt-2'>ThinkPro để EmPro 💓</h6>
              <p className='lead '>
                Hãy tới ThinkPro để mua những món đồ công nghệ với mức giá cực "Hời" dành cho người phụ nữ bạn yêu
                thương. Đừng bỏ lỡ cơ hội trải nghiệm những sản phẩm, dịch vụ và Ưu Đãi đặc biệt diễn ra đến hết ngày
                15/3 này!!
              </p>
            </div>
            <button className='btn btn-outline-dark btn-lg mb-2'>
              Nhận ưu đãi <IoArrowForward />
            </button>
          </div>
          <div className='col'>
            <img
              src='https://images.thinkgroup.vn/unsafe/1600x600/filters:quality(100)/https://media-api-beta.thinkpro.vn/media/core/categories/2024/3/2/frame-95720-thinkpro.jpeg'
              alt=''
              height='100%'
              width='100%'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
