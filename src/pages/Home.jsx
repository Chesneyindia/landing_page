

import "./HeroSection.css"; 
import videoBg from "../assets/video.mp4"
import branded from "../assets/logo2.png"
import overlayVideo from "../assets/animee.mp4"

const brands = [
  branded,
  branded,  branded,
  branded,
  branded,
  branded,
  branded,
  branded,
  branded,
];

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="hero">
       
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="hero-overlay">
          
          <h1>CHESNEY INDIA</h1>
          <p>Standee LED and Advertisements</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">GET IN TOUCH ↗</a>
            <a href="#next" className="btn scroll">SCROLL DOWN ↴</a>
          </div>
        </div>
      </section> */}

<section className="hero">
  {/* Background Video */}
  <video autoPlay loop muted playsInline className="hero-video">
    <source src={videoBg} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Video */}
  <video autoPlay loop muted playsInline className="hero-overlay-video">
    <source src={overlayVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Content */}
  <div className="hero-overlay">
    <h1>CHESNEY INDIA</h1>
    <p>Standee LED and Advertisements</p>
    <div className="hero-buttons">
      <a href="#contact" className="btn">GET IN TOUCH ↗</a>
      <a href="#next" className="btn scroll">SCROLL DOWN ↴</a>
    </div>
  </div>
</section>



      {/* Brands Section */}
      <section className="brands-container">
        <h2 className="brands-title">CONNECTING BRANDS TO FANS</h2>
        <div className="brands-marquee">
          <div className="brands-track">
            {brands.concat(brands).map((brand, index) => (
              <img key={index} src={brand} alt="Brand Logo" className="brand-logo" />
            ))}
          </div>
        </div>
      </section>


         {/* test and video */}
      <div className="container">
      <div className="grid-container">
        {/* WE CREATE Row */}
        <div className="text-cell">
          <h2>WE</h2>
        </div>
        <div className="text-cell">
          <h2>CREATE</h2>
        </div>
        <div className="video-cell">
          <video autoPlay muted loop playsInline>
          <source src={videoBg} type="video/mp4" />
          </video>
        </div>

        {/* AND CAPTURE Row */}
        <div className="video-cell">
          <video autoPlay muted loop playsInline>
          <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        <div className="text-cell">
          <h2>AND</h2>
        </div>
        <div className="text-cell">
          <h2>CAPTURE</h2>
        </div>

        {/* MOMENTS THAT INSPIRE Row */}
        <div className="text-cell">
          <h2>MOMENTS</h2>
        </div>
        <div className="video-cell">
          <video autoPlay muted loop playsInline>
          <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        <div className="text-cell">
          <h2 className="serif">INSPIRE</h2>
        </div>
      </div>
    </div>


      {/*carousel images and video code start here*/ }
            
      


            
       
    </>
  );
};

export default HeroSection;
