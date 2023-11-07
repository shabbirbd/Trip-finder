import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Navbar/>
        <div className='w-11/12 mx-auto lg:px-[100px]'>
        <Routes>
          <Route index path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
