import styles from '@/components/(features)/feature.module.css'
import Feature1 from '@/components/(features)/feature1/Feature1'
import Overview from "@/components/(features)/overview/Overview"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Overview />
      <Feature1 />
    </div>
  )
}

export default AboutPage
