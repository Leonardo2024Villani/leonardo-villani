import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './componenti/header';
import { Root } from './types';
import { Contesto, TContesto } from './context';
import Test from './componenti/test';

function App() {

  const [jsonData, setJsonData] = useState<Root | undefined>();
  const json = {jsonData, setJsonData}

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(json => setJsonData(json))
  }, []);
  return (
    <Contesto.Provider value={json}>
      <div id="tutto">
      <Header />
      <Test />
      </div>
    </Contesto.Provider>
    
  );
}

export default App;
