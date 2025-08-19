import React from 'react'
import './global.css'
import Header from './components/layout/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>
      
    </ BrowserRouter>
  )
}

export default App
