import Image from "next/image"
import styles from "@/components/(features)/feature.module.css"

const Feature2 = () => {
  return (
    <div className={styles.container}>
    <div>
      <div className={styles.content_b}> 
        <div className={styles.content_img}>
          <Image src="/phone_flash.svg" alt="" width={480} height={600} />
        </div>
        <div className={styles.description}>
          <h1>2. OTP Authentication for Secure App Login</h1>
          <p>Enhance the security of your business app or platform with our one-time password (OTP) integration. This feature ensures that user accounts are protected through secure login verification, significantly reducing the risk of unauthorized access. With The Maritext, safeguarding your platform and users has never been easier.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature2
