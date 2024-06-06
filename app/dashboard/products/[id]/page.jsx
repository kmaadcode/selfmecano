import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image";

const categories = [

  { key: "piecesMoteur", label: "Pièces Moteur" },
  { key: "filtreHuile", label: "Filtres et Huile" },
  { key: "directionSuspensionTrain", label: "Direction / Suspension / Train" },
  { key: "freinage", label: "Freinage" },
  { key: "essuieGlacePieces", label: "Essuie-glaces et Pièces" },
  { key: "entretienNettoyage", label: "Entretien et Nettoyage" },
  { key: "embrayageBoitedeVitessee", label: "Embrayage et Boîte de vitesse" },
  { key: "entretienNettoyage", label: "Filtres" },
];

const SingleProductPage = async ({params}) => {

  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill />
          </div>
          {product.title}
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <label>Titre</label>
            <input type="text" name="title" placeholder={product.title}/>
            <label>Marque</label>
            <input type="text" name="brand" placeholder={product.brand}/>
            <label>Référence</label>
            <input type="text" name="ref" placeholder={product.ref}/>
            <label>Prix</label>
            <input type="number" name="price" placeholder={product.price} />
            <label>Date Commande</label>
            <input type="date" name="createdAt" placeholder={product.createdAt}/>
            <label>Date Livraison</label>
            <input type="date" name="delivereddAt" placeholder={product.deliveredAt}/>
            <label>Stock</label>
            <input type="number" name="stock" placeholder={product.stock}/>
            <label>Status</label>
            <select defaultValue={'DEFAULT'} name="isValided" id="isValided">
              <option value="DEFAULT" disabled> Choose a status...</option> 
              <option value="valide">Validé</option> 
              <option value="enAttente">En Attente</option> 
              <option value="annule">Annulé</option>
            </select>
            {/* <select name="cat" id="cat">
            <label>Catégories</label>
              <option value="none"></option>
              <option value="piecesMoteur">Pièces Moteur</option>
              <option value="directionSuspensionTrain">Direction / Suspension / Train</option>
              <option value="freinage">Freinage</option>            
              <option value="essuieGlacePieces">Essuie-glaces et Pièces</option>
              <option value="entretienNettoyage">Entretien et Nettoyage</option>
              <option value="embrayageBoitedeVitessee">Embrayage et Boîte de vitesse</option>
            </select> */}
            <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
            
            <button>Update</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SingleProductPage;
