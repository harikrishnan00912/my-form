import React, {useState} from 'react'
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  const [storedata, setStoreData] = useState([])

  const addData = (newData) => {
    setStoreData((prevState) => [...prevState, newData])
    console.log("Adding new data:", newData)
}

  return (
    <div className="App">
     <Form addData = {addData} />
     <Table data = {storedata} />
    </div>
  );
}

export default App;
