import Image from "next/image"
import styles from "@/components/(features)/feature.module.css"

const Feature1 = () => {
    return (
      <div className={styles.container}>
      <div>
        <div className={styles.content}> 
          <div className={styles.content_img}>
            <Image src="/phone_flash.svg" alt="" width={400} height={500} />
          </div>
          <div className={styles.content_bg}>
            <Image src="/splash.svg" alt="" width={1300} height={550} />
          </div>
          <div className={styles.description}>
            <h2>MariText</h2>
            <p>Messaging Service App for Business</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Feature1
  