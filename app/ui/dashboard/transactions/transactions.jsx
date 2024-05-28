  import Image from "next/image";
  import styles from './transactions.module.css';

  const Transactions = () => {
    return (
      <div clsName={styles.container}>
        <h2 className={styles.title}>LATEST Transactions</h2>      
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nom</td>
            <td>Statut</td>
            <td>Date</td>
            <td>Créneau</td>
            <td>Montant</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>                           
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
              En attente
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
              Terminé
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
              Annulé
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
              Terminé
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
              En attente
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
              Annulé
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image 
                  src="/noavatar.png" 
                  alt="" width={40} 
                  height={40} 
                  className={styles.userImage}
                />
                Mario Bros
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
              En attente
              </span>
            </td>
            <td className={styles.userImage}>14.02</td>
            <td>14h00-15h00</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions; 