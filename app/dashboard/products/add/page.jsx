import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";


const AddProductPage = () => {
  const newLocal = <option value={false}>Statut</option>;
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        {/* <select name="cat" id="cat">
          <option value="general">Les plus populaires</option>
          <option value="kit embrayage">Kit d'embrayage</option>
          <option value="disque de frein">Disques de Frein</option>
          <option value="amortisseur avant">Amortisseur avant</option>
        </select> */}
        <input type="text" placeholder='title' name='title' required />
        <input type="text" placeholder='marque' name='brand' required />
        <input type="text" placeholder='Ref' name='ref' />
        <input type="double" placeholder='Prix' name='price' />
        <input type="number" placeholder='Stock' name='stock' />
        <input type="date" placeholder='Date Cde' name='createdAt' />
        <input type="date" placeholder='Date Livraison' name='deliveredAt' />       
        <select name="isValided" id="isValided">       
          <option value="valide">Validé</option> 
          <option value="enAttente">En attente</option>
          <option value="annule">Annulé</option>
        </select>
        <textarea name="desc" id="desc" rows="16" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage;