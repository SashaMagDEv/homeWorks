import './App.css'
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import routes from "./routes/index.jsx";

function App() {

  return (
    <>
        <Header />
        <Routes>
            {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
            ))}
        </Routes>

    </>
  )
}

export default App
