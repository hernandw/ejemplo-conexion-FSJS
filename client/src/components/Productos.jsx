import { useState, useEffect } from 'react'
const urlBase = "http://localhost:3005/products"
const Productos = () => {
    const [products, setProducts] = useState([])

const getData = async () => {
  const res = await fetch(urlBase)
  const data = await res.json()
  setProducts(data)
    }
    
    useEffect(() => {
      getData()
    }, [])

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productos
