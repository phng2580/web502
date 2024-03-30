import React from 'react'
import Navitem from '~/components/Navitem'
import Navbaradmin from '~/components/navbar_admin'
import { TProduct } from '~/interface/product'

type Props = {
  products: TProduct[]
}

const List = ({ products }: Props) => {
  return (
    <>
      <Navbaradmin />
      <div className='d-flex'>
        <Navitem />
        <div className='container' style={{ width: 'calc(100% - 250px)' }}>
          <h1 className='h2 mt-3'>Danh sách sản phẩm</h1>
          <hr></hr>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' />
                </th>
                <th>Id</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Trạng thái</th>
                <th>Tương tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input type='checkbox' />
                  </td>
                  <td>{item.id}</td>
                  <td>
                    <div
                      className='border rounded overflow-hidden d-flex justify-content-center align-items-center'
                      style={{ width: '120px', height: '120px' }}
                    >
                      <img src={item.thumbnail} alt='' className='mh-100 mw-100' />
                    </div>
                  </td>
                  <td>{item.title}</td>
                  <td>Danh Mục 1</td>
                  <td>
                    <span className='badge bg-danger rounded-pill'>hết hàng</span>
                  </td>
                  <td className='text-nowrap' style={{ width: ' 1px' }}>
                    <button className='btn btn-primary btn-sm'>Xem</button>
                    <button className='btn btn-warning btn-sm'>Sửa</button>
                    <button className='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target='#modalDel'>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ul className='pagination justify-content-end' style={{ margin: '20px 0' }}>
        <li className='page-item'>
          <a className='page-link' href='#'>
            <i className='fa-solid fa-chevron-left fa-sm'></i>
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link active' href='#'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            <i className='fa-solid fa-chevron-right fa-sm'></i>
          </a>
        </li>
      </ul> */}
        </div>
      </div>
    </>
  )
}

export default List
