import { useEffect, useState } from "react";
import Index from "./components";
import Paginado from "./components/paginado";

function App() {

  const URL = "https://rickandmortyapi.com/api/character?page=";
  const [data, setData] = useState([{}]);
  const page = 1;
  const fetchData = (p = page) => {
    try {
      fetch( URL + p,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }
      )
      .then(
        (rta) => { return( rta.json() ) }
      )
      .then(
        (result) => {
          setData( result );
        }
      )
      .catch(
        (err) => { console.log( "ERROR" + err.message) }
      );
    } catch (error) {
      console.log( "ERROR:" + error.message );
    }
  }

  useEffect( () => {
    fetchData();
  }, [])
  
  return (
    <>
      <div className="container">
        { data.results ? (
          <>
            <Index data={data}/>
            <Paginado info={data.info} page={fetchData} />
          </>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </>
  );
}

export default App;
