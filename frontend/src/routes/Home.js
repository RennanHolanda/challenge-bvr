import styles from "./Home.module.css"
import { useState, useEffect } from "react"

import Api from "../services/Api";

import Table from "../components/Table/Table"

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await Api.get("/products");
      console.log(response.data);
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <div id={styles.home}>
      <h2>Lista de Pedidos</h2>
      {products.map((product) => (
        <Table
        key={product.id}
        title={product.title}
        description={product.description}
        value={product.value} 
        />
      ))}
    </div>
  )
}

export default Home