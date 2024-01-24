import {Link} from 'react-router-dom';
import Footer from '../components/footer'
import '../Styles/Location.css'
import MapImage from '../assets/desktop/image-map@2x.png'
import TabletMapImage from '../assets/tablet/image-map@2x.png'
import MobileMapImage from '../assets/mobile/image-map@2x.png'




const Location = () => {
  return (
    <main className="art-container">
      <section className="art-location">
        <Link to="/">
          <button className="home-btn">
            Back to Home
            <div className="arrow-btn">
              <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
              </svg>
            </div>
          </button>
        </Link>

        <img src={MapImage} className='desk-img'/>
        <img src={TabletMapImage} className='tablet-img'/>
        <img src={MobileMapImage} className='mobile-img'/>
      </section>
      <section className="art-info">
        <h2>
          Our <br /> Location
        </h2>

        <div>
          <h4>99 King Street</h4>

          <span>
            Newport <br /> RI 02840 <br /> United States of America
          </span>

          <p>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default Location