import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

const App = () => {
  return (
    <div>
      <Router>
        <section className="layoutContainer">
          <header className="headerContainer">
            <Routes>
              <Route path='/login' />
            </Routes>
          </header>

          <main className='mainContainer'>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/' element={<Login />} />
            </Routes>
          </main>
          <footer className="footerContainer">
            <div>footer</div>
          </footer>
        </section>
      </Router>
    </div>
  )
}

export default App