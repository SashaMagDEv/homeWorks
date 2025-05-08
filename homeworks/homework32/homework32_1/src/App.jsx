import './App.css'
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import routes from "./routes/index.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4">
            <Routes>
                {routes.map(({ path, element }, index) => (
                    <Route key={index} path={path} element={element} />
                ))}
            </Routes>
        </main>
        <Footer />

    </div>
  )
}

export default App
