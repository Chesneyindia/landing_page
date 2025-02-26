import React, { useState, useEffect,useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import "./HeroSection.css";
import videoBg from "../assets/video.mp4";
import branded from "../assets/logo2.png";
import logo from "../assets/logo.mp4";
import testvide from "../assets/testvideo.mp4";
// import overlayVideo from "../assets/logoanimation24.glb";




const brands = [
  branded, branded, branded,
  branded, branded, branded,
  branded, branded, branded
];


const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const products = [
    {
      id: 1,
      title: "Product One",
      description: "High-quality product designed for optimal performance",
      image: "https://media.istockphoto.com/id/1326115839/vector/roll-up-advertising-banner-design-stand-for-presentations-conferences-seminars-exhibitions.jpg?s=612x612&w=0&k=20&c=0F2o6SbZ9smQg80noQSXdP1_zYO4QlWHe-FoFybEukg=",
      price: "$299"
    },
    {
      id: 2,
      title: "Product two",
      description: "High-quality product designed for optimal performance",
      image: "https://media.istockphoto.com/id/1326115839/vector/roll-up-advertising-banner-design-stand-for-presentations-conferences-seminars-exhibitions.jpg?s=612x612&w=0&k=20&c=0F2o6SbZ9smQg80noQSXdP1_zYO4QlWHe-FoFybEukg=",
      price: "$299"
    },
    {
      id: 3,
      title: "Product three",
      description: "High-quality product designed for optimal performance",
      image: "https://media.istockphoto.com/id/1326115839/vector/roll-up-advertising-banner-design-stand-for-presentations-conferences-seminars-exhibitions.jpg?s=612x612&w=0&k=20&c=0F2o6SbZ9smQg80noQSXdP1_zYO4QlWHe-FoFybEukg=",
      price: "$299"
    },
    {
      id: 4,
      title: "Product four",
      description: "High-quality product designed for optimal performance",
      image: "https://media.istockphoto.com/id/1326115839/vector/roll-up-advertising-banner-design-stand-for-presentations-conferences-seminars-exhibitions.jpg?s=612x612&w=0&k=20&c=0F2o6SbZ9smQg80noQSXdP1_zYO4QlWHe-FoFybEukg=",
      price: "$299"
    },
    {
      id: 5,
      title: "Product five",
      description: "High-quality product designed for optimal performance",
      image: "https://media.istockphoto.com/id/1326115839/vector/roll-up-advertising-banner-design-stand-for-presentations-conferences-seminars-exhibitions.jpg?s=612x612&w=0&k=20&c=0F2o6SbZ9smQg80noQSXdP1_zYO4QlWHe-FoFybEukg=",
      price: "$299"
    },
    {
      id: 6,
      title: "Product six",
      description: "High-quality product designed for optimal performance",
      image: "https://media.istockphoto.com/id/1326115839/vector/roll-up-advertising-banner-design-stand-for-presentations-conferences-seminars-exhibitions.jpg?s=612x612&w=0&k=20&c=0F2o6SbZ9smQg80noQSXdP1_zYO4QlWHe-FoFybEukg=",
      price: "$299"
    },

    // ... other products remain the same
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  }, [products.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    let intervalId;
    
    if (isPlaying && !isHovered) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, isHovered, nextSlide]);

  const getSlideStyles = (index) => {
    const positions = products.map((_, i) => {
      const distance = (i - currentIndex + products.length) % products.length;
      const adjustedDistance = distance > 2 ? distance - products.length : distance;
      
      let scale = 1;
      let zIndex = 1;
      let opacity = 1;
      let translateX = '0%';

      if (adjustedDistance === 0) {
        scale = 1;
        zIndex = 5;
        opacity = 1;
        translateX = '0%';
      } else if (Math.abs(adjustedDistance) === 1) {
        scale = 0.8;
        zIndex = 3;
        opacity = 0.8;
        translateX = adjustedDistance < 0 ? '-110%' : '110%';
      } else if (Math.abs(adjustedDistance) === 2) {
        scale = 0.6;
        zIndex = 1;
        opacity = 0.6;
        translateX = adjustedDistance < 0 ? '-200%' : '200%';
      } else {
        scale = 0;
        zIndex = 0;
        opacity = 0;
        translateX = adjustedDistance < 0 ? '-250%' : '250%';
      }

      return {
        transform: `translateX(${translateX}) scale(${scale})`,
        zIndex,
        opacity
      };
    });

    return positions[index];
  };

  return (
    <div className="carousel-container">
       <h2 className="product-headline">CONNECTING BRANDS TO FANS</h2>
      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={prevSlide}
          className="nav-button nav-button-left"
        >
          <ChevronLeft />
        </button>
        
        <button 
          onClick={nextSlide}
          className="nav-button nav-button-right"
        >
          <ChevronRight />
        </button>

        {/* Play/Pause Button */}
      

        <div className="carousel-items">
         {products.map((product, index) => (
            <div
              key={product.id}
              className="carousel-item"
              style={{
                ...getSlideStyles(index),
                transform: `translate(-50%, -50%) ${getSlideStyles(index).transform}`
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="product-card">
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <div className="image-overlay" />
                  <div className="price-tag">
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dot-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Whatwedo = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="background-video">
      <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>
          CREATE STORIES.<br />
          CAPTURE MEMORIES.<br />
          OPTIMISE STRATEGIES.
        </h1>
        <button className="hero-button">WHAT WE DO ↗</button>
      </div>
    </div>
  );
}; 
const Aboutus = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="background-video">
      <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>
        READY TO MAKE IT<br />
        HAPPEN?<br />
          
        </h1>
        <button className="hero-button">Contact Us ↗</button>
      </div>
    </div>
  );
}; 


const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <video autoPlay loop muted playsInline className="hero-overlay-video">
          <source src={overlayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

     
        <div className="hero-overlay">
          <h1>CHESNEY INDIA</h1>
          <p>Standee LED and Advertisements</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">BOOK A DEMO ↗</a>
            <a href="#next" className="btn scroll">SCROLL DOWN ↴</a>
          </div>
        </div>
      </section>

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

      <div className="container">
        <div className="grid-container">
          <div className="text-cell"><h2>WE</h2></div>
          <div className="text-cell"><h2 className="serif">CREATE</h2></div>
          <div className="video-cell"><video autoPlay muted loop playsInline><source src={testvide} type="video/mp4" /></video></div>
          <div className="video-cell"><video autoPlay muted loop playsInline><source src={testvide} type="video/mp4" /></video></div>
          <div className="text-cell"><h2>SMART</h2></div>
          <div className="text-cell"><h2>AND</h2></div>
          <div className="text-cell"><h2>DYNAMIC</h2></div>
          <div className="video-cell"><video autoPlay muted loop playsInline><source src={testvide} type="video/mp4" /></video></div>
          <div className="text-cell"><h2 className="serif">DISPLAYS</h2></div>
 
        </div>
      </div>

      <ProductCarousel />
      <Whatwedo/>
      <Aboutus/>
    </>
  );
}; 

export default HeroSection;
