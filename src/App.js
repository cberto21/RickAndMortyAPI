import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";

import Pagination from "./Components/Pagination";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Card from "./Components/Card";

function App() {
  const url = "https://rickandmortyapi.com/api/character";


  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')


  const charactersObstained = (url) =>
    fetch(url) //realizar request de la api
      .then(response => response.json())  //convertir a obj
      .then(data => {
        setPersonajes(data.results);
        setInfo(data.info);
        setLoading(false)
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

	const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

  return (
    <div className="background">
      <Navbar />
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevious} onNext={onNext} />
        <Search filter={filter} setFilter={setFilter} />
        

        <section className='lista-personajes'>
				{loading ? (
					<p>Cargando...</p>
				) : personjesFiltrados.length > 0 ? (
					personjesFiltrados.map((personaje) => (
						<Card key={personaje.id} personaje={personaje} />
					))
				) : (
					<p>
						No se encontro personajes con la busqueda{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			</section>

        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevious} onNext={onNext} />
      </div>
      <Footer />
    </div>
  );
}
export default App