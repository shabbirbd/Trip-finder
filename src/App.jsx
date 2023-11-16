
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Listings from './pages/Listings';

export const BookingContext = createContext();

function App() {

  const [bookingData, setBookingData] = useState({
    guestCount: 0,
  })

  

  return (
    <>
      <BookingContext.Provider value={[bookingData, setBookingData]}>
        <Navbar/>
        <div className='w-11/12 mx-auto lg:px-[100px] relative'>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/listings" element={<Listings/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </div>
        <Footer/>
      </BookingContext.Provider>
    </>
  )
}

export default App
