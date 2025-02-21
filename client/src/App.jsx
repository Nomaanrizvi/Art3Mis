import { useState } from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import logo_2 from './assets/logo_2.png'

function App() {
  return (
    <>
      <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo_2} alt="logo" className='w-40 object-contain'/>
        </Link>

        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#ebefff] min-h-[calc(100vh - 73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}

export default App
