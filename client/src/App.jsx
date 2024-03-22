import Productos from "./components/Productos"


const App = () => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="container">
        <div className="row">
          <Productos />
        </div>
      </div>
    </div>
  )
}

export default App

