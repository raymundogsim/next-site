import Image from "next/image";
import styles from '../feature.module.css';

const Overview = () => {
    return (
    <div className={styles.container}>
    <div className={styles.title}>
      <h1>
      The Maritext: Web Integrated Messaging Service for Business
      </h1>
    </div>
        <div className={styles.content_b}>
          <div className={styles.content_img}>
          <br></br>
            <Image src="/hero.png" alt="" width={460} height={460} />
          </div>
          <div className={styles.description}>
            <p>The Maritext is a cutting-edge web application designed to revolutionize the way businesses communicate. This robust messaging service offers a comprehensive suite of features that streamline communication, enhance security, and ensure that important messages reach their intended audience promptly and effectively. With The Maritext, businesses can leverage powerful tools such as SMS Brigade for bulk messaging, which allows for efficient dissemination of advertisements, announcements, memos, and updates to large groups. Additionally, the OTP for secure login feature provides an extra layer of protection for user accounts, significantly reducing the risk of unauthorized access and enhancing overall platform security. Emergency message notifications ensure that critical alerts are delivered directly to users' home or lock screens, guaranteeing timely receipt of urgent information. Furthermore, integration with face recognition apps allows for seamless user verification and adds another layer of security to authentication processes. The Maritext is the ultimate solution for modern business communication needs, combining efficiency, reliability, and security.</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Overview
  