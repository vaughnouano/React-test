import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
    
  )
}

export default App
