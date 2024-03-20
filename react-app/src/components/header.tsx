import React from 'react'
import { IonIcon } from '@ionic/react'
type Props = {}

const header = (props: Props) => {
  return (
    <header className='bg text-white align-items-center py-4'>
      <div className='container-fluid'>
        <div className='row g-0'>
          <div className='col bg-info col-lg-4 ps-4'>
            <div className='text'>
              <h6 className='display-6 pt-4'> ThinkPro để EmPro 💓</h6>
              <p className='lead'>
                Hãy tới ThinkPro để mua những món đồ công nghệ với mức giá cực "Hời" dành cho người phụ nữ bạn yêu
                thương. Đừng bỏ lỡ cơ hội trải nghiệm những sản phẩm, dịch vụ và Ưu Đãi đặc biệt diễn ra đến hết ngày
                15/3 này!!
              </p>
            </div>
            <button className='btn btn-outline-dark btn-lg'>
              Nhận ưu đãi <IonIcon name='arrow-forward-outline' className='ps-2 align-items-center'></IonIcon>
            </button>
          </div>
          <div className='col'>
            <img src='/frame-95720-thinkpro.png' alt='' height='100%' width='100%' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default header
