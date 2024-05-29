import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill />
          </div>
          Mario Bros
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <label>Nom utilisateur</label>
            <input type="text" name="username" placeholder="Mario Bros"/>
            <label>Email</label>
            <input type="email" name="email" placeholder="Mario Bros"/>
            <label>Mot de passe</label>
            <input type="password" name="password" />
            <label>Téléphone</label>
            <input type="text" name="phone" placeholder="(+33) 0754126378" />
            <label className={styles.label}>Adresse</label>
            <label>n°</label>
            <input type="number" name="number" placeholder="2"/>
            <label>Nom de rue</label>
            <input type="text" name="streetname" placeholder="Ave Beauséjour"/>
            <label>Code Postal</label>
            <input type="number" name="zipCode" placeholder="94370"/>         
            <label>Ville</label>
            <input type="text" name="city" placeholder="Sucy-en-Brie" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true}>Yes</option>
              <option value={false}>No</option>            
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true}>Yes</option>
              <option value={false}>No</option>            
            </select>
            <button>Update</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SingleUserPage;
