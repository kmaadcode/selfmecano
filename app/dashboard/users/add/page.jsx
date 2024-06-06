'use client'
import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder='username' name='username' required />
        <input type="email" placeholder='email' name='email' required />
        <input type="password" placeholder='password' name='password' required />
        {/* <input type="phone" placeholder='phone' name='phone' />  */}
        <div className={styles.adress}>
          <label className={styles.label}>Adresse</label>
          <div className={styles.adressItems}>
            <div className={styles.adressItem}>
              <label className={styles.label1}>n°</label>
              <input type="text" name="streetNber" placeholder="2 bis"/>
              <label className={styles.label1}>Nom de rue</label>
              <input type="text" name="streetName" placeholder="Ave Beauséjour" />
            </div>
            <div className={styles.adressItem}>
              <label className={styles.label1}>Code Postal</label>
              <input type="number" name="zipcode" placeholder="94370"/>         
              <label className={styles.label1}>Ville</label>
              <input type="text" name="city" placeholder="Sucy-en-Brie" />
              </div>
          </div>
        <select defaultValue={'DEFAULT'} name="isAdmin" id="isAdmin">
        <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>          
        </select>
        <select defaultValue={'DEFAULT'} name="isActive" id="isActive">
        <option value={true}> 
            Is Active?</option>
           <option value={true}>Yes</option>
          <option value={false}>No</option>          
        </select> 
        </div>        
        <button type="submit">Submit</button>        
      </form>
    </div>
  )
}

export default AddUserPage;