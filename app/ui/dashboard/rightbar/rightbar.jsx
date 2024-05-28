import Image from "next/image";
import styles from './rightbar.module.css';
import { MdNotifications, MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.text}>
          <span className={styles.notifications}>
          🔥 Disponible maintenant
          </span>
          <h3 className={styles.title}>Comment utiliser la nouvelle version du tableau de bord d'administration ?</h3>
          <span className={styles.subtitle}>Facile à prendre en main</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, veniam odit. Amet ipsam perspiciatis.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Regarder
          </button>
        </div>
      </div>
      <div className={styles.item}>        
        <div className={styles.text}>
          <span className={styles.notifications}>
          🔥 Disponible maintenant
          </span>
          <h3 className={styles.title}>Comment utiliser la nouvelle version du tableau de bord d'administration ?</h3>
          <span className={styles.subtitle}>Facile à prendre en main</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, veniam odit. Amet ipsam perspiciatis.</p>
          <button className={styles.button}>
            <MdReadMore />
            Plus d'info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar;