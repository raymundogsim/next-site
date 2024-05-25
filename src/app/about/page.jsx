import styles from '@/components/(features)/feature.module.css'
import Feature1 from '@/components/(features)/feature1/Feature1'
import Feature2 from '@/components/(features)/feature2/Feature2'
import Feature3 from '@/components/(features)/feature3/Feature3'
import Feature4 from '@/components/(features)/feature4/Feature4'
import Overview from "@/components/(features)/overview/Overview"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Overview />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <div></div>
    </div>
  )
}

export default AboutPage
