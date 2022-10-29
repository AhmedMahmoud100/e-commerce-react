import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Mainpage/Home'
import { Search } from './Components/Header/Search'
import NavBar from './Components/Header/NavBar'
import SearchPage from './pages/SearchPage/SearchPage'
import Footer from './Components/Footer/Footer'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Categories from './pages/Categories/Categories'
import TrackTheOrder from './pages/TrackMyOrder/TrackTheOrder'
import LogIn from './pages/Login/LogIn'
import Help from './pages/Help/Help'
import TodayDeals from './pages/TodayDeals/TodayDeals'

function App() {

  return (
    <div className="App">
      <Search />
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<ShoppingCart />} />
        <Route path='/Search' element={<SearchPage />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/TrackMyOrder' element={<TrackTheOrder />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/help' element={<Help />} />
        <Route path='/deals' element={<TodayDeals />} />
      </Routes>

      <Footer />
    </div>
  )
}
export default App
