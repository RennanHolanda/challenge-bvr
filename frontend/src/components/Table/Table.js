import styles from './Table.module.css'
import { Link } from "react-router-dom"

const Table = ({id, title, description, value}) => {
  return (
    <div id={styles.request_list}>
    <table>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{value}</td>
          <td>
            <Link to="/newproduct">
            <button>Editar</button>
            </Link>
            <Link>
            <button id={styles.btn_dager}>Excluir</button>
            </Link>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default Table