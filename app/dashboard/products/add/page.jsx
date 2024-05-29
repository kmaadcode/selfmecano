import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='title' name='title' required />
        <select name="cat" id="cat">
          <option value="general">Les plus populaires</option>
          <option value="kit embrayage">Kit d'embrayage</option>
          <option value="disque de frein">Disques de Frein</option>
          <option value="amortisseur avant">Amortisseur avant</option>
        </select>
        <input type="number" placeholder='Ref' name='reference' />
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='Stock' name='stock' />
        <input type="date" placeholder='color' name='date' />
        <textarea name="desc" id="desc" rows="16" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}

export default AddProductPage;