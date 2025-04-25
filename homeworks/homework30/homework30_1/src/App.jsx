import { useState } from 'react'
import './App.css'
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'wrap'}>
        <Header />
        <main className={'container'}>
            <Main/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
