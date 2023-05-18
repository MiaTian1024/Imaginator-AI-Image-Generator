import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets';
import { Home, CreatePost } from './pages'

const App = () => (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-primary sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <div className='w-full flex justify-between items-center'>
          <img src={logo} alt="logo" className="w-12 object-contain" />
          <p className="font-extrabold text-secondary text-[22px] px-2 pt-2">Imaginator</p>
          </div>
        </Link>
        
        <div className='flex justify-between'>
        <Link to="/create-post" className="font-bold text-secondary mx-2 px-4 py-2">Community</Link>
        <Link to="/create-post" className="font-bold text-secondary mx-2 px-4 py-2">Create</Link>
        </div>
      </header>
      
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>      
    </BrowserRouter>
  );

export default App;