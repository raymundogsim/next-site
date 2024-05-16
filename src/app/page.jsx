import Image from "next/image";
import styles from './globals.css';

const Home = () => {

  return (
    <div className="container">
      <div className="content"> 
        <div className="content-img">
          <Image src="/phone_flash.svg" alt="" width={420} height={420} />
          <Image src="/splash.svg" alt="" width={500} height={500} />
        </div>
          <div className="content-bg">
          </div>
        <div className="description">
            <h1>MariText</h1>
            <p>Messaging Service App for Business</p>
        </div>
      </div>
    </div>
  )
}

export default Home
