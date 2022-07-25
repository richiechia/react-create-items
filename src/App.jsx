import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Title } from './components/atoms'
import { useEffect } from 'react';

const address = 'http://localhost:3004'

function App() {

  const hehe = "hi"

  const resp = async () => {
    const response = await axios.get(`${address}/items`)
    console.log(response)
    return response
  }

  useEffect(() => {
    resp();
  }, []);



  return (
    <div className="App">
      <Title text={hehe}/>
    </div>
  );
}

export default App;
