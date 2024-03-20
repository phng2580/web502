import React from 'react'
import { IonIcon } from '@ionic/react'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container d-flex justify-content-between align-items-center'>
        <a className='navbar-brand' href='#'>
          Logo
        </a>
        <form className='ms-3'>
          <input
            className='form-control me-2 rounded-pill bg-light'
            type='search'
            placeholder='Tìm kiếm'
            aria-label='Tìm kiếm'
          />
        </form>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <IonIcon name='call-sharp' className='me-1 text-primary'></IonIcon>
                <span>1900.63.3579</span>
              </a>
            </li>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <IonIcon name='location-sharp' className='me-1 text-primary'></IonIcon>
                <span>Địa chỉ cửa hàng</span>
              </a>
            </li>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <IonIcon name='headset-sharp' className='me-1 text-primary'></IonIcon>
                <span>Khiếu nại</span>
              </a>
            </li>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <IonIcon name='newspaper-sharp' className='me-1 text-primary'></IonIcon>
                <span>tin công nghệ</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className='bg-light rounded-circle d-flex justify-content-center align-items-center'
          style={{ width: '60px', height: '60px' }}
        >
          <IonIcon name='cart' style={{ fontSize: '1.5rem', color: 'black' }}></IonIcon>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
