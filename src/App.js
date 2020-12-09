import React, { useEffect, useState } from 'react';
import { FormNoti } from './components/FormNoti';

import { Header } from './components/Header';
import { ListadoNoticias } from './components/ListadoNoticias';

function App() {
  const [category, setCategory] = useState('');
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const consultaAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=e420dee84e53411ca487b26289e26e87`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    }
    consultaAPI();
  }, [category])
  return (
    <>
      <Header titulo="NOTICIAS"/>
      <div className="container white">
        <FormNoti setCategory={ setCategory }/>
        <ListadoNoticias noticias = { noticias }/>
      </div>
    </>
  );
}

export default App;
