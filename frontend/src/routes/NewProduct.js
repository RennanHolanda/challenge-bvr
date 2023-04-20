import styles from "./NewProduct.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import { ApiAlert } from "../services/ApiAlert";

const NewProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    value: "",
  });

  const handleInput = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
  };

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  // const handleHomePage = (e) => {
  //   e.preventDefault();
  //   return navigate("/");
  // }

  return (
    <div id={styles.register}>
      <h2>Novo produto</h2>
      <form onSubmit={handleSubmit}>
        <label> Nome do produto</label>
        <input
          type="text"
          placeholder="ex: Iphone x"
          onChange={handleInput}
          name="title"
        />
        <label> Valor</label>
        <input
          type="text"
          placeholder="R$ 0.00"
          onChange={handleInput}
          name="value"
        />
        <label>Descrição</label>
        <textarea
          cols="30"
          rows="10"
          onChange={handleInput}
          name="description"
        ></textarea>
        <br />
        <button onClick={handleCancel}>Cancelar</button>
        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
};

export default NewProduct;
