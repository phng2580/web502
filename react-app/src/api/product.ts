import { TProduct } from '~/interface/product'
import instance from '.'

export const creatProduct = async (product: TProduct) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProduct = async () => {
  try {
    const { data } = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProductById = async (id: string) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
