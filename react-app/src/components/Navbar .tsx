import React from 'react'
import { IoCallSharp, IoNewspaperSharp, IoCartSharp } from 'react-icons/io5'
import { ImLocation } from 'react-icons/im'
import { FaHeadset } from 'react-icons/fa6'
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
            <li className='nav-item ms-5'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <IoCallSharp name='call-sharp' className='me-1 text-primary'></IoCallSharp>
                <span>1900.63.3579</span>
              </a>
            </li>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <ImLocation name='location-sharp' className='me-1 text-primary'></ImLocation>
                <span>Địa chỉ cửa hàng</span>
              </a>
            </li>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <FaHeadset name='headset-sharp' className='me-1 text-primary'></FaHeadset>
                <span>Khiếu nại</span>
              </a>
            </li>
            <li className='nav-item ms-3'>
              <a className='nav-link d-flex align-items-center bg-white' href='#'>
                <IoNewspaperSharp name='newspaper-sharp' className='me-1 text-primary'></IoNewspaperSharp>
                <span>tin công nghệ</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className='bg-light rounded-circle d-flex justify-content-center align-items-center'
          style={{ width: '60px', height: '60px' }}
        >
          <IoCartSharp name='cart' style={{ fontSize: '1.5rem', color: 'black' }}></IoCartSharp>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
