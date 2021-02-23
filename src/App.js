import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const product = [{
    name: 'Photoshop', price: '$ 90.66'
  }, {
    name: 'Illustrator', price: '$ 66.55'
  }, {
    name: 'Lightroom', price: '$ 22.20'
  },
  {
    name: 'Adobe Reader', price: '$ 2.20'
  }]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <Counter></Counter>
        {
          product.map(pd => <Product product={pd} ></Product>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>Dynamic Users:</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
      <button onClick={() => setCount(count + 1)} >Increase</button>
    </div>
  )
}

function Product(props) {
  const style = {
    backgroundColor: 'lightgrey',
    width: '200px',
    height: '200px',
    float: 'left',
    color: 'black',
    borderRadius: '5px'
  }
  return (
    <div style={style}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
    </div>

  )
}

function Person(props) {
  const style = {
    border: '5px solid yellow',
    margin: '10px',
    padding: '15px',
    width: '600px'
  }
  return (
    <div style={style}>
      <h1>{"Name: " + props.name}</h1>
      <h3>{"Profession: " + props.job}</h3>
      <h3>{"Hobby: " + props.hobby}</h3>
    </div>
  );
}

export default App;
