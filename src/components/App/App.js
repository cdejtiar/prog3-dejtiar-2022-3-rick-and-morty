import { useState, useEffect, useCallback } from "react";
import styles from "./App.module.css";
import "bulma/css/bulma.css";
import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import PopUp from "../PopUp/PopUp";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const handleShowPopUp = (character = false) => {
    setSelectedCharacter(character);
    setShowPopUp(character ? true : false);
  };



  const getData = useCallback(async (from, to) => {
    try {
      setLoading(true);
      const charactersRange = Array.from(
        { length: to - from + 1 },
        (_, index) => index + 1
      ).join(",");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${charactersRange}`
      );
      console.log(response);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  }, []);

  useEffect(() => {
    getData(1, 52);
  }, [getData]);

  return (
    <div className={`${styles["App"]}`}>
      <Hero />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="container">
          <div className="columns is-desktop is-multiline">
            {data.map((character) => (
              <Card character={character} handleShowPopUp={handleShowPopUp} />
            ))}
          </div>
        </div>
      )}
      <PopUp display={showPopUp} handleShowPopUp={handleShowPopUp} character={selectedCharacter}/> 
    </div>
  );
};

export default App;
