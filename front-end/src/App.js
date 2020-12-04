import React, { Children, useState } from 'react'
import  data  from "./data"


function App() {

  console.log(data)


  return (
    <div className="app">
      <div>
        {data.products.map((product) => (
          <div className="card" key={product._id}>
            <a href={`/products/${product._id}`}>
              <img className="medium" src={product.image} alt={product.name}/>
            </a>
            <div className="card-body">
              <a href={`/product/${product._id}`}></a>
              <h2>{product.name}</h2>
              <div className="price">THB {product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
