import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name="Sakib" job="Engineer" hobby="Gardening" ></Person>
        <Person name="Jahangir" job="Doctor" hobby="Reading Books"></Person>
        <Person name="Alomgir" job="Private Employee" hobby="Reading Novels"></Person>
        <Person name="Nowfel" job="Private Employee" hobby="Reading Novels"></Person>
        <Person name="Mark Joke" job="Private Employee" hobby="Reading Novels"></Person>
        <Person name="Kobir" job="Private Employee" hobby="Reading Novels"></Person>
        <Person name="Sazid" job="Private Employee" hobby="Reading Novels"></Person>
        <Person name="Sadik" job="Private Employee" hobby="Reading Novels"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  var style = {
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
