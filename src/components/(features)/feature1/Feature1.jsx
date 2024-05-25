import Image from "next/image"
import styles from "@/components/(features)/feature.module.css"

const Feature1 = () => {
    return (
      <div className={styles.container}>
      <div>
        <div className={styles.content_a}> 
          <div className={styles.description}>
            <h1>1. Bulk SMS Messaging</h1>
            <p>Empower your marketing and communication strategies with our SMS Brigade feature. Whether you're sending advertisements, announcements, memos, or updates, The Maritext enables you to reach large audiences efficiently. Amplify your reach and engage your audience with powerful, targeted messaging. </p>
          </div>
          <div className={styles.content_img}>
            <Image src="/phone_flash.svg" alt="" width={480} height={600} />
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Feature1
  