import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import PrivateRoute from './utils/PrivateRoute'
import AdminOnlyRoute from './utils/AdminOnlyRoute'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <main className='main py-3'>
        <Container>
          <Routes>
            <Route path='/order/:id' element={<PrivateRoute><OrderScreen /></PrivateRoute>} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/profile' element={<PrivateRoute><ProfileScreen /></PrivateRoute>} />
            <Route path='/shipping' element={<PrivateRoute><ShippingScreen /></PrivateRoute>} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/' element={<CartScreen />} />
            <Route path='/admin/userlist' element={<AdminOnlyRoute><UserListScreen /></AdminOnlyRoute>} />
            <Route path='/admin/user/:id/edit' element={<AdminOnlyRoute><UserEditScreen /></AdminOnlyRoute>} />
            <Route path='/admin/productlist' element={<AdminOnlyRoute><ProductListScreen /></AdminOnlyRoute>} />
            <Route path='/admin/productlist/page/:pageNumber' element={<AdminOnlyRoute><ProductListScreen /></AdminOnlyRoute>} />
            <Route path='/admin/product/:id/edit' element={<AdminOnlyRoute><ProductEditScreen /></AdminOnlyRoute>} />
            <Route path='/admin/orderlist' element={<AdminOnlyRoute><OrderListScreen /></AdminOnlyRoute>} />
            <Route path='/search/:keyword' element={<HomeScreen />}/>
            <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} />
            <Route path='/page/:pageNumber' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
