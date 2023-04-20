import styles from "./NewProduct.module.css";
import Form from "../components/project/Form";

// import { useNavigate } from "react-router-dom";


// import { ApiAlert } from "../services/ApiAlert";

const NewProduct = () => {

  // const navigate = useNavigate();

  async function createProduct(product) {
    await fetch("http://localhost:5000/add_product",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // navigate("/")
      })
    .catch(err => console.log(err));
  }
     
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(product);
  // };

 

  // const handleHomePage = (e) => {
  //   e.preventDefault();
  //   return navigate("/");
  // }

  return (
    <div id={styles.register}>
      <h2>Novo produto</h2>
        <Form handleSubmit={createProduct} btnText="Salvar"/>
    </div>
  );
};

export default NewProduct;
