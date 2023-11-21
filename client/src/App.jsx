import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Footer, Home, Categories, SingleProduct, Newsletter } from "./components/index"
import AppContext from './utils/context.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AppContext>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Categories />} />
            <Route path='/product/:id' element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </Router>
    </>
  )
}

export default App
