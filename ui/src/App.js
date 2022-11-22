import React, { useState, useEffect } from "react";
import axios from "axios";
import BreweryList from './view/BreweryList';
import { Routes, Route } from 'react-router-dom'
import CreateForm from './components/CreateForm';
import Detail from './view/Detail';
import Update from './components/Update';
import CreatedDetail from './view/CreatedDetail';

function App() {
  const [brewery, setBrewery] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const reloadList = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries`)
      .then((res) => {
        setBrewery(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const deleteBrewery = (breweryId) => {
    setBrewery(brewery.filter((brewery) => brewery.id !== breweryId));
    reloadList();
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BreweryList brewery={brewery} deleteBrewery={deleteBrewery} />} />
        <Route path="/brewery/new" element={<CreateForm />} />
        <Route path="/brewery/:breweryId" element={<Detail />} />
        <Route path="/brewery/edit/:id" element={<Update />} />
        <Route path="/brewery/created/:id" element={<CreatedDetail />} />
      </Routes>
    </div>
  );
}

export default App;
