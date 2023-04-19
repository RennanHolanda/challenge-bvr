import styles from "./NewProduct.module.css"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const NewProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div id={styles.register}>
        <h2>Novo produto</h2>
        <form onSubmit={handleSubmit}>
            <label> Nome do produto</label>
            <input type="text" placeholder="ex: Iphone x"/>
            <label> Valor</label>
            <input type="text" placeholder="R$ 0.00"/>
            <label>Descrição</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Cancelar" />
            <input type="submit" value="Salvar" />
        </form>
    </div>
  )
}

export default NewProduct