
import Links from './links/Links';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
        <Image src="/icon.png" alt="" width={20} height={20}/>
        <Image src="/maritext.svg" alt="" width={84} height={20}/>
        </div>
          <div>
            <Links />
          </div>
      </div>
    )
  }
  
export default Navbar
