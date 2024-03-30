import React from 'react'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
const add = () => {
  return (
    <div>
      <div className='container' style={{ width: 'calc(100% - 250px)' }}>
        <h1 className='h2 mt-3'>Thêm mới sản phẩm</h1>
        <hr />
        <div className='mt-3'>
          <form className='' style={{ width: 800 }}>
            <div className='mt-4'>
              <label className='form-label' htmlFor=''>
                Id:
                <input className='form-control' type='text' />
              </label>
            </div>
            <div className='mt-3'>
              <label className='form-label' htmlFor=''>
                Tên sản phẩm:
                <input className='form-control' type='text' />
              </label>
            </div>
            <div className='mt-3'>
              <label className='form-label' htmlFor=''>
                Ảnh:
                <input className='form-control' type='file' />
              </label>
            </div>
            <div className='mt-3'>
              <label className='form-label' htmlFor=''>
                Danh mục:
                <select name='' id='' className='form-control'>
                  <option value={1}>-- Lựa chọn --</option>
                  <option value=''>Danh mục 1</option>
                  <option value=''>Danh mục 2</option>
                </select>
              </label>
            </div>
            <div className='mt-3'>
              <label className='form-label' htmlFor=''>
                Trạng thái:
                <select name='' id='' className='form-control'>
                  <option value={1}>-- Lựa chọn --</option>
                  <option value=''>Còn hàng</option>
                  <option value=''>Hết hàng</option>
                </select>
              </label>
            </div>
            <div className='text-center mt-3'>
              <a href='' className='btn btn-secondary'>
                Quay lại
              </a>
              <input type='submit' className='btn btn-primary' defaultValue='Tạo Mới' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default add
