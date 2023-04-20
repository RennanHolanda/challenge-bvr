import styles from "./NewRequest.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Api from "../services/Api";
import Select from "../components/form/Select";

const NewRequest = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await Api.get("/products");
      console.log(response.data);
      setOptions(response.data);
    }
    loadProducts();
  }, []);

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id={styles.register}>
      <h2>Novo pedido</h2>
      <Link to="/newproduct">
        <input type="submit" value="Novo produto" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div id={styles.select}>
        <Select categories={options}/>
        </div>
        <h4>Estatus de pagamento</h4>
        <select id={styles.select_status}>
          <option>Selecionar status</option>
          <option>Aguardando</option>
          <option>Pago</option>
        </select>
        <input type="submit" value="Cancelar" onClick={handleCancel} />
        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
};

export default NewRequest;
