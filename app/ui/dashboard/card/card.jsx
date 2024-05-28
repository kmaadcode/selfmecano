import { MdSupervisedUserCircle } from "react-icons/md";
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Client Total</span>
        <span className={styles.number}>10.73</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> plus que prévus
        </span>
      </div>
    </div>
  )
}

export default Card;