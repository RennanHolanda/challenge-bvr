import styles from "./NewProduct.module.css";
import Form from "../components/project/Form";

const NewProduct = () => {
  async function createProduct(product) {
    await fetch("http://localhost:5000/add_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id={styles.register}>
      <h2>Novo produto</h2>
      <Form handleSubmit={createProduct} btnText="Salvar" />
    </div>
  );
};

export default NewProduct;
