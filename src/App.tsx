import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Components/Blog'
import About from './Components/About'
import NotFound from './Components/NotFound'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
