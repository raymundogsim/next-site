import Image from "next/image"
import styles from "@/components/(features)/feature.module.css"

const Feature4 = () => {
  return (
    <div className={styles.container}>
    <div>
      <div className={styles.content_b}> 
        <div className={styles.content_img}>
          <Image src="/phone_flash.svg" alt="" width={400} height={500} />
        </div>
        <div className={styles.description}>
          <h1>4. Integration with our Face Recognition App</h1>
          <p>Combine the power of The Maritext with advanced face recognition technology for seamless user verification. This integration adds an extra layer of security to your authentication process, making it ideal for office or school identity verification. Utilize SMS confirmations to keep superiors or parents informed.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature4
