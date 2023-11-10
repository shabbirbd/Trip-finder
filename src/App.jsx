
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';



function App() {

  return (
    <>
      
        <Navbar/>
        <div className='w-11/12 mx-auto lg:px-[100px] relative'>
        <Routes>
          <Route index path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
