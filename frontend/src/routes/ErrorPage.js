import React from "react";
import styles from "./ErrorPage.module.css";

import Erro from "../../src/img/Erro.png";

const ErrorPage = () => {
  return (
    <div id={styles.error_message}>
      <h2>Pagina não encontrada</h2>
      <img src={Erro} alt="Imagen de erro" />
    </div>
  );
};

export default ErrorPage;
