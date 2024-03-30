import { Route, Routes } from 'react-router-dom'
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
function App() {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

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
