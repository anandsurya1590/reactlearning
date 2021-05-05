import "../styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemanApiCom() {
  const [num, setNum] = useState();
  const [name, setName] = useState("");
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + num);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }

    getData();
  }, [num]);
  return (
    <>
      <h1>I am selected {num} </h1>
      <h1>My Name is {name} </h1>
      <h1>I have {moves} Moves</h1>
      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
}
