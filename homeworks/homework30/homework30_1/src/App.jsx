import './App.css'
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {

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
