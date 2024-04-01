import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'
import Login from './pages/Login'
import Notfound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Shop from './pages/Shop'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar '
import DropdownMenu from './components/DropdownMenu'
import Dashboard from './admin/dashboard'
import List from './admin/product/list'
import { useEffect, useState } from 'react'
import { TProduct } from './interface/product'
import Product from './components/product'
import Add from './admin/product/add'
import { creatProduct } from './api/product'
import Edit from './admin/product/Edit'
import instance from './api'
function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])
  const handleAdd = (data: TProduct) => {
    ;(async () => {
      const newProduct = await creatProduct(data)
      setProducts([...products, newProduct])
      navigate('/admin/list')
    })()
  }
  const handleEdit = (product: TProduct) => {
    ;(async () => {
      const { data } = await instance.put(`/products/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
      navigate('/admin/list')
    })()
  }

  return (
    <>
      <div className='app'>
        {/* <Navbar />
        <DropdownMenu />
        <Header /> */}
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<Dashboard />} />
            <Route path='/admin/list' element={<List products={products} />} />
            <Route path='/admin/addProduct' element={<Add onAdd={handleAdd} />} />
            <Route path='/admin/edit/:id' element={<Edit onEdit={handleEdit} />} />
          </Route>
          <Route>
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
