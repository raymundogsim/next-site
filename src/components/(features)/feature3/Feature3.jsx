import Image from "next/image"
import styles from "@/components/(features)/feature.module.css"

const Feature3 = () => {
    return (
      <div className={styles.container}>
      <div>
        <div className={styles.content_a}> 
          <div className={styles.description}>
            <h2>MariText</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
  