import Image from "next/image";
import styles from "@/components/(features)/feature.module.css"

const Overview = () => {
    return (
    <div className={styles.container}>
    <div className={styles.title}>
      <h1>
        Creating value to your business to help you on your way to success
      </h1>
    </div>
        <div className={styles.content_b}>
          <div className={styles.content_img}>
          <br></br>
            <Image src="/hero.png" alt="" width={400} height={400} />
          </div>
          <div className={styles.description}>
            <h3>
            Lorem Ipsum
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Overview
  