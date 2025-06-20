import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurant'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Cart from './components/Cart'
import Confirmacao from './pages/Confirmacao'

function AppWrapper() {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <>
      <GlobalStyles />
      {!isHomePage && <Header />}
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App