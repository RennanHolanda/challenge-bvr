import styles from "./Select.module.css";

const Select = ({ categories }) => {
  return (
    <div id={styles.area}>
      <select id={styles.select_product}>
        <option>Selecione seu produto</option>
        {categories.map((categorie) => (
          <option value={categorie.id} key={categorie.id}>
            {categorie.title}
          </option>
        ))}
      </select>
      <button type="submit">Adicionar</button>
    </div>
  );
};

export default Select;
