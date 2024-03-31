import  { useEffect, useState } from 'react';
function App() {
  const [products, setProducts] = useState(
    [
      { name: 'product 1', price: 100.00 },
      { name: 'product 2', price: 200.00 },
      { name: 'product 3', price: 300.00 },

    ]
  )
  
  useEffect(()=>{
    fetch('http://localhost:5000/api/product')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() { 
    setProducts(prevState => [...prevState,
    { name: 'product' + (prevState.length + 1), price: (prevState.length*100)+100}])
  }
  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={index}> {item.name} - {item.price}</li>
        ))}
      </ul>

      <button onClick={addProduct}>Add Product</button>

    </div>
  );
}

export default App;
