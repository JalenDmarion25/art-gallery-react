import React from 'react'
import {Link} from 'react-router-dom';
import Footer from '../components/footer'
import HeroImg from '../assets/desktop/image-hero.jpg'
import GridImgOneXL from '../assets/desktop/image-grid-1@2x.jpg'
import GridImgTwoXL from '../assets/desktop/image-grid-2@2x.jpg'
import GridImgThreeXL from '../assets/desktop/image-grid-3@2x.jpg'
import TabletGridImgOneXL from '../assets/tablet/image-grid-1@2x.jpg'
import TabletGridImgTwoXL from '../assets/tablet/image-grid-2@2x.jpg'
import TabletGridImgThreeXL from '../assets/tablet/image-grid-3@2x.jpg'
import MobileHeroImg from '../assets/mobile/image-hero@2x.jpg'
import MobileGridImgOneXL from '../assets/mobile/image-grid-1@2x.jpg'
import MobileGridImgTwoXL from '../assets/mobile/image-grid-2@2x.jpg'
import MobileGridImgThreeXL from '../assets/mobile/image-grid-3@2x.jpg'





const Home = () => {
  return (
    <main>
      <section className="main-container">
        <div className="background">
          <div className="black-backdrop"></div>
          <div className="image-backdrop">
            <img src={HeroImg} className="img-hero" />
          </div>
          <div className="mobile-image-backdrop">
            <img src={MobileHeroImg} className="mobile-img-hero" />
          </div>
        </div>
        <h1 className="desk-header">
          Modern <br /> Art Gallery
        </h1>

        <div className="tablet-main-info">
          <h1>
            Modern <br /> Art Gallery
          </h1>
          <p className="para-body">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>

          <Link to="/Location">
            <button className="location-btn">
              Our Location
              <div className="arrow-btn">
                <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
                </svg>
              </div>
            </button>
          </Link>
        </div>

        <div className="main-info">
          <p className="para-body">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>

          <Link to="/Location">
            <button className="location-btn">
              Our Location
              <div className="arrow-btn">
                <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </section>
      <section className="main-gallery">
        <div className="mobile-gallery">
          <img src={MobileGridImgOneXL} />

        <div>
          <h2>Your Day <br /> at the Gallery</h2>
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
          <img src={MobileGridImgTwoXL} />
          <img src={MobileGridImgThreeXL} />
          <div className="mobile-info-cont">
          <h2>COME & BE INSPIRED</h2>

          <p>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
          </div>

        </div>
        <div className="gallery-one">
          <div className="one-text">
            <h2>
              Your Day At <br /> The Gallery
            </h2>
            <p>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>

          <img src={GridImgOneXL} className="grid-one-img" />
          <img src={TabletGridImgOneXL} className="tablet-grid-one-img" />
        </div>

        <div className="gallery-two">
          <img src={GridImgTwoXL} className="grid-two-img" />
          <img src={TabletGridImgTwoXL} className="tablet-grid-two-img" />

          <div className="two-info">
            <img src={GridImgThreeXL} className="grid-three-img" />
            <img src={TabletGridImgThreeXL} className="tablet-grid-three-img" />

            <div className="two-text">
              <h2>
                Come & Be <br /> Inspired
              </h2>

              <p>
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home