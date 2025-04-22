import './App.css'
import { Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import About from './pages/About';
import  Home from './pages/Home.jsx'
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <>
        <Header />
        <ErrorBoundary />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App
