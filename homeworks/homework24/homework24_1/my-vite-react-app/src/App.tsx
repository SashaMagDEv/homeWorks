import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const CardItem = () => (
        <div className="col-md-4">
            <div className="card mb-4">
                <img src="#" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Назва елемента</h5>
                    <p className="card-text">Короткий опис елемента.</p>
                    <a href="#" className="btn btn-primary">Детальніше</a>
                </div>
            </div>
        </div>
    )

  return (
      <>
          <div className="container mt-5">
              <header className="text-center mb-5">
                  <h1>SWAPI Інтерфейс</h1>
                  <p className="lead">Залиште без запитів та подій на цій сторінці</p>
              </header>
              <div className="mb-4">
                  <label htmlFor="categorySelect" className="form-label">Вибір категорії</label>
                  <select className="form-select" id="categorySelect">
                      <option value="people">Люди</option>
                      <option value="planets">Планети</option>
                      <option value="starships">Зорельоти</option>
                      <option value="vehicles">Транспортні засоби</option>
                      <option value="species">Види</option>
                      <option value="films">Фільми</option>
                  </select>
              </div>
              <div className="row">
                  <CardItem />
                  <CardItem />
                  <CardItem />
              </div>
              <div className="text-center mt-4">
                  <button className="btn btn-success">Додати новий елемент</button>
              </div>
          </div>
      </>
  )
}

export default App
