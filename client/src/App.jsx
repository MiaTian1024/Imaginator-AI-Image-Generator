import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, CreatePost, Nav, Community } from './pages'

const App = () => (
    <BrowserRouter>
      <header className="relative bg-primary">
        <Nav />         
      </header>
      
      <main className="sm:p-8 px-4 py-8 w-full">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />}/>
          <Route path="/community" element={<Community />}/>
        </Routes>
      </main>      
    </BrowserRouter>
  );

export default App;