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
            <th>Data do pedido</th>
            <th>Quantidade</th>
            <th>Status</th>
            <th>Valor Total</th>
            <th>Id do produto</th>
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
              <td>{request.purchase_date}</td>
              <td>{request.amont}</td>
              <td>{request.status}</td>
              <td>{request.total_value}</td>
              <td>{request.product_id}</td>
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
