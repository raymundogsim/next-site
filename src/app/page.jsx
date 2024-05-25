import Image from "next/image";
import styles from './globals.css';

const Home = () => {

  return (
    <div className="container">
      <div className="content"> 
        <div className="content-img">
          <Image src="/phone_flash.svg" alt="" width={480} height={600} />
        </div>
        <div className="content-bg">
          <Image src="/splash.svg" alt="" width={1300} height={550} />
        </div>
        <div className="description">
          <h1>The MariText</h1>
        <p>Messaging Service App for Business</p>
        <button className="first_button" >Install it today for free!</button>
        </div>
      </div>
    </div>
  )
}

export default Home
