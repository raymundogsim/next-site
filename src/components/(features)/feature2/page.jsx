import Image from 'next/image'
import styles from '../globals.css'

const Feature2 = () => {
  return (
    <div className={styles.container}>
        <Image src="/hero.png" alt="" width={500} height={500} />
    </div>
  )
}

export default Feature2
