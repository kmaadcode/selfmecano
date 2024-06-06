import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={user.img || "/noavatar.png"} alt="" fill />
          </div>
          {user.username}
        </div>
        <div className={styles.formContainer}>
          <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user.id} />
            <label>Nom utilisateur</label>
            <input type="text" name="username" placeholder={user.username}/>
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email}/>
            <label>Mot de passe</label>
            <input type="password" name="password" />
            {/* <label>Téléphone</label>
            <input type="text" name="phone" placeholder={user.phone} />*/}
            <label className={styles.label}>Adresse</label> 
            <label>n°</label>
            <input type="number" name="streetNber" placeholder={user.streetNber}/>
            <label>Nom de rue</label>
            <input type="text" name="streetName" placeholder={user.streetName}/>
            <label>Code Postal</label>
            <input type="number" name="zipcode" placeholder={user.zipcode} />         
            <label>Ville</label>
            <input type="text" name="city" placeholder={user.city} />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} selected={user.isAdmin}>Yes</option>
              <option value={false} selected={!user.isAdmin}>No</option>            
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>Yes</option>
              <option value={false} selected={!user.isActive}>No</option>            
            </select>
            <button>Update</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SingleUserPage;
