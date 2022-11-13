import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Characters from './Components/Characters'
import Pagination from "./Components/Pagination";
import Footer from "./Components/Footer";

function App() {
  const url = "https://rickandmortyapi.com/api/character";

  const [charactersState, setStateCharacters] = useState([]);
  const [info, setInfo] = useState([]);



  const charactersObstained = (url) =>
    fetch(url) //realizar request de la api
      .then(response => response.json())  //convertir a obj
      .then(data => {
        setStateCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));


  //llamada a la API y refrescar personajess
  const onPrevious = () => {
    charactersObstained(info.prev);
  }

  const onNext = () => {
    charactersObstained(info.next)
  }

  useEffect(() => {
    charactersObstained(url);  // Cambio controlado
  }, []);


  return (
    <div className="background">
      <Navbar />
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevious} onNext={onNext} />
        <Characters charactersToPresent={charactersState} />
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevious} onNext={onNext} />
      </div>
      <Footer />
    </div>
  );
}
export default App