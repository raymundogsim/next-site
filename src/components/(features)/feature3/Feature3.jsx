import Image from "next/image"
import styles from "@/components/(features)/feature.module.css"

const Feature3 = () => {
    return (
      <div className={styles.container}>
      <div>
        <div className={styles.content_a}> 
          <div className={styles.description}>
            <h1>3. Emergency Notifications</h1>
            <p>Stay prepared for any situation with our emergency message notification feature. Important alerts are delivered directly to users' home or lock screens, ensuring that critical information is received immediately. Trust The Maritext to keep your team informed and safe during emergencies.</p>
          </div>
          <div className={styles.content_img}>
            <Image src="/phone_flash.svg" alt="" width={400} height={500} />
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Feature3
  