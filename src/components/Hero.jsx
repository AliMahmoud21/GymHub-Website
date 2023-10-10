import Header from './Header';
import heart from '../assets/heart.png';
import heroImage from '../assets/hero_image.png';
import heroImageBack from '../assets/hero_image_back.png';
import calories from '../assets/calories.png';

const Hero = () => {
  return (
    <main className='hero'>
      <div className="left-hero">
        <Header />

        {/* The best ad component with animation */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

      {/* Hero Heading */}
      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>

        <div className='description'>
          <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
      </div>

      {/* Figures stats */}
      <div className="figures">
        <div>
          <span>+140</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>+978</span>
          <span>Members Joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>Fitness Program</span>
        </div>
      </div>

      {/* Hero Buttons */}
      <div className="hero-btns">
        <button className='btn filled'>Get Started</button>
        <button className='btn transparent'>Learn More</button>
      </div>
      </div>


      <div className="right-hero">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="Heart image" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </div>

        {/* Hero Images */}

        <img src={heroImage} className='hero-image' alt="Hero Image" />
        <img src={heroImageBack} className='hero-image-back' alt="Hero Image Back" />

        {/* Calories Component */}
        <div className="calories">
          <img src={calories} alt="Calories Image" />
          <div className="info">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero