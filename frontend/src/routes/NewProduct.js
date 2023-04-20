import styles from "./NewProduct.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Api from "../services/Api";

const NewProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      title,
      description,
      value
    };
    console.log(product);
  };

  const navigate = useNavigate();

  const handleProjects = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <div id={styles.register}>
      <h2>Novo produto</h2>
      <form onSubmit={handleSubmit}>
        <label> Nome do produto</label>
        <input 
        type="text"
        placeholder="ex: Iphone x"
        onChange={(e) => setTitle(e.target.value)}
        value={title}/>
        <label> Valor</label>
        <input 
        type="text"
        placeholder="R$ 0.00"
        onChange={(e) => setValue(e.target.value)}
        value={value}/>
        <label>Descrição</label>
        <textarea 
        cols="30"
        rows="10" 
        onChange={(e) => setDescription(e.target.value)}
        value={description}>
        </textarea><br />
        <button onClick={handleProjects}>Cancelar</button>
        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
};

export default NewProduct;
