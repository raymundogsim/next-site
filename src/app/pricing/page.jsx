import styles from './pricing.module.css'


const PricingPage = () => {
    return (
      <div className="">
      <div className={styles.title}>
        <h2>
        Available Plans:
        </h2>
      </div>
      <div className={styles.price_container} > 
        <button className={styles.price_button}>
          <h1>$5.00</h1>
          <br></br>
          <p>1 month validity</p>
          <p>No Customization</p>
          <p>No Dashboard</p>
        </button>
        <button className={styles.price_button} >
        <h1>$85.00</h1>
          <br></br>
          <p>1 month validity</p>
          <p>App Customization</p>
          <p>Personal Dashboard</p>
        </button>
      </div>
    </div>
    )
  }
  
  export default PricingPage
  