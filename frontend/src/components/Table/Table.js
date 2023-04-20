import styles from "./Table.module.css";
import { Link } from "react-router-dom";
import { ApiDestroy } from "../../services/ApiAlert";

const Table = ({ requests }) => {
  return (
    <div id={styles.request_list}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Acão</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {requests.map((request) => (
            <tr value={request.id} key={request.id}>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>{request.title}</td>
              <td>{request.description}</td>
              <td>{request.value}</td>
              <td>
                <Link to="/newproduct">
                  <button>Editar</button>
                </Link>
                <Link>
                  <button id={styles.btn_dager} onClick={ApiDestroy}>
                    Excluir
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
