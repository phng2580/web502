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
function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <DropdownMenu />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
