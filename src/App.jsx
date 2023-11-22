
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './components/authentication/Authentication';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Listings from './pages/Listings';

export const BookingContext = createContext();

function App() {
  const [dark, setDark] = useState(false)

  const [bookingData, setBookingData] = useState({
    guestCount: 0,
  })

  

  return (
    <>
      <BookingContext.Provider value={[bookingData, setBookingData]}>
        <Navbar />
        <div className='w-screen dark:bg-darkBg'>
          <div className='container mx-auto lg:px-[100px] relative dark:bg-darkBg dark:text-neutral-200'>
          <Routes>
            <Route index path="/" element={<Home/>} />
            <Route path="/listings" element={<Listings/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/login" element={<Authentication auth={"login"}/>} />
            <Route path="/signup" element={<Authentication auth={"signup"}/>} />
          </Routes>
          </div>
        </div>
        <Footer/>
      </BookingContext.Provider>
    </>
  )
}

export default App
