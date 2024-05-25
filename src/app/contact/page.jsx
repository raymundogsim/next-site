import Image from "next/image";
import styles from './contact.module.css'

const ContactPage = () => {
    return (
      <div className={styles.contact_container}>
        <div className={styles.contact_form}>
          <br></br>
            <Image src="/hero.png" alt="" width={600} height={600} />
          </div>
        <div className={styles.directory}>
            <Image src="/art.png" alt="" width={600} height={600} />
        </div>
      </div>
    )
  }
  
  export default ContactPage
  