import React from 'react'
import { Link } from 'react-router-dom'

const Navitem = () => {
  return (
    <div>
      {' '}
      <div className='bg-dark navbar-dark' style={{ width: '250px', minHeight: 'calc(100vh - 146px)' }}>
        <ul className='navbar-nav m-4'>
          <li className='nav-item'>
            <Link to='/admin'>
              <i className='fa-solid fa-house fa-sm m-lg-1'></i>Trang chủ
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href=''>
              <i className='fa-solid fa-layer-group fa-sm m-lg-1'></i>Danh mục sản phẩm
            </a>
            <ul className='nav-item'>
              <li>
                <a href='Category/listCate.html' className='nav-link'>
                  <i className='fa-solid fa-list fa-sm m-lg-1'></i>Danh sách danh mục
                </a>
              </li>
              <li>
                <a href='Category/createCate.html' className='nav-link'>
                  Thêm mới
                </a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='fa-solid fa-clipboard fa-sm m-lg-1'></i>Quản lý sản phẩm
            </a>
            <ul className='nav-item'>
              <li>
                <a href='Product/listProduct.html' className='nav-link'>
                  <i className='fa-solid fa-list fa-sm m-lg-1'></i>Danh sách sản phẩm
                </a>
              </li>
              <li>
                <a href='Product/createProduct.html' className='nav-link'>
                  Thêm mới
                </a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='fa-solid fa-money-bill fa-sm m-lg-1'></i>Quản lý đơn hàng
            </a>
            <ul className='nav-item'>
              <li>
                <a href='Bill/listBill.html' className='nav-link'>
                  <i className='fa-solid fa-list fa-sm m-lg-1'></i>Danh sách đơn hàng
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navitem
