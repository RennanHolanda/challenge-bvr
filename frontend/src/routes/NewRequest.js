import styles from "./NewRequest.module.css";
import { Link } from "react-router-dom";

const NewRequest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id={styles.register}>
      <h2>Novo pedido</h2>
      <Link to="/newrequest">
        <input type="submit" value="Novo pedido" />
      </Link>
      <form onSubmit={handleSubmit}>
        <select id="product">
          <option></option>
          <option>Iphone 11</option>
        </select>
        <input type="submit" value="Adicionar" />
        <select id="product">
          <option></option>
          <option value="v">Aguardando</option>
          <option value="volvo">Pago</option>
        </select>
        <input type="submit" value="Cancelar" />
        <input type="submit" value="Salvar" />
      </form>
    </div>
  );
};

export default NewRequest;
