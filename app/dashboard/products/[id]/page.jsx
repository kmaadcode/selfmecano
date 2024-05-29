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

const SingleProductPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill />
          </div>
          Amortisseurs
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <label>Titre</label>
            <input type="text" name="username" placeholder="Amortisseur"/>
            <label>Référence</label>
            <input type="text" name="Ref" placeholder="Référence"/>
            <label>Description</label>
            <input type="text" name="desc" />
            <label>Prix</label>
            <input type="number" name="price" placeholder="150.00 €" />
            <label>Date Commande</label>
            <input type="date" name="date" placeholder="29.05.2024"/>
            <label>Stock</label>
            <input type="number" name="stock" placeholder="82"/>
            <label>Status</label>
            <input type="text" name="status" placeholder="En attente"/>
            <label>Catégories</label>
            <select name="cat" id="cat">
              <option value="none"></option>
              <option value="piecesMoteur">Pièces Moteur</option>
              <option value="directionSuspensionTrain">Direction / Suspension / Train</option>
              <option value="freinage">Freinage</option>            
              <option value="essuieGlacePieces">Essuie-glaces et Pièces</option>
              <option value="entretienNettoyage">Entretien et Nettoyage</option>
              <option value="embrayageBoitedeVitessee">Embrayage et Boîte de vitesse</option>
            </select>
            <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
            
            <button>Update</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SingleProductPage;
