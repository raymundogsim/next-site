import Image from 'next/image'
import styles from '../globals.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
        <Image src="/hero.png" alt="" width={500} height={500} />
    </div>
  )
}

export default AboutPage
