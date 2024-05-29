import Image from "next/image";
import styles from './contact.module.css'

const ContactPage = () => {
    return (
      <div className={styles.contact_container}>
          <div className={styles.contact_form}>
          
            <div className={styles.box1} ></div>
            
          </div>
          <div className={styles.directory}>
          
            <div className={styles.box2} ></div>
            
          </div>
      </div>
    )
  }

  export default ContactPage
  