import React from 'react'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { TProduct } from '~/interface/product'
import Register from './../../pages/Register'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
type Props = {
  onAdd: (data: TProduct) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})
const Add = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit: SubmitHandler<TProduct> = (data) => {
    onAdd(data)
  }
  return (
    <div>
      <div className='container' style={{ width: 'calc(100% - 250px)' }}>
        <h1 className='h2 mt-3'>Thêm mới sản phẩm</h1>
        <hr />
        <div className='mt-3'>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: 800 }}>
            <div className='mt-4'>
              <label className='form-label' htmlFor=''>
                Id:
                <input className='form-control' type='text' />
              </label>
            </div>
            <div className='mt-3'>
              <label className='form-label' htmlFor=''>
                Tên sản phẩm:
                <input className='form-control' type='text' {...register('title', { required: true })} />
                {errors.title && <span className='text-danger'>{errors.title.message}</span>}
              </label>
            </div>
            <div className='mt-3'>
              <label htmlFor=''>Giá sản phẩm:</label>
              <input type='text' className='form-control' {...register('price', { required: true })} />
              {errors.price && <span className='text-danger'>{errors.price.message}</span>}
            </div>
            <div className='text-center mt-3'>
              <Link to='/admin' className='btn btn-secondary'>
                {' '}
                Quay lại
              </Link>
              <input type='submit' className='btn btn-primary' defaultValue='Tạo Mới' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add
