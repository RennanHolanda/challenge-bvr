import styles from "./Form.module.css";

import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function Form({ handleSubmit, btnText, projectData }) {
  const [product, setProduct] = useState(projectData || {});

  const submit = (e) => {
    e.preventDefault();

    handleSubmit(product);
  };

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} id={styles.form_product}>
      <Input
        type="text"
        text="Nome do produto"
        name="title"
        placeholder="ex: Iphone x"
        handleOnChange={handleChange}
        value={product.title ? product.title : ""}
      />
      <Input
        type="text"
        text="Valor"
        name="value"
        placeholder="R$ 0.00"
        handleOnChange={handleChange}
        value={product.value ? product.value : ""}
      />
      <h4>Descrição</h4>
      <Input
        type="text"
        text="Descrição"
        name="description"
        handleOnChange={handleChange}
        value={product.description ? product.description : ""}
      />
      <div id={styles.area_btn}>
        <SubmitButton type={submit} text={btnText} />
        <SubmitButton text="Cancelar" />
      </div>
    </form>
  );
}

export default Form;
