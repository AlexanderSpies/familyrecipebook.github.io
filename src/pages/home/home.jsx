import React from 'react';
import '../../css/index.css';
import triangleBackground from '../../imgs/triangleBackground.png';
import pasta from '../../imgs/pasta.png';
import oldFashioned from '../../imgs/oldFashioned.png';




const Home = () => {
  return (
    <div className="home-container">
      <section className='Recipes'>
        <a href='/recipes' className="contentContainer">
          <div className='sectionHeading'>
            <h1>Unleash the Flavours of Homely Recipes</h1>
            <p className='Info'>Introducing vintage, heart-touching kitchen specials that have been passed down for generations.</p>
          </div>
          <div className='photoContainer'>
            <img className='PastaPic' src={pasta} alt='Pasta in front of dish' />
          </div>
        </a>
      </section>
      <section className="Drinks">
        <div className='sectionHeading'>
          <a href='/drinks' className="contentContainer">
            <img className='liquorPic' src={oldFashioned} alt='Old Fashioned drink' />
            <div className="textContainer">
              <h1>For Drink Connoisseurs and Amateurs Alike!</h1>
              <p className='Info'>Savor intoxicating beverages, from local gems to international favorites that’ll tingle your taste buds.</p>
            </div>
          </a>
        </div>
      </section>
      <div className="triangleContainer">
        <img className='triangle' src={triangleBackground} alt="" aria-hidden="true" />
        <div className="overlay">
          <h2>DECADES OF DELICIOUSNESS</h2>
        </div>
      </div>
      <h2 className='uploadInfo'>You're welcome to share your cherished family recipes here. Our digital repository promises your traditional meals will always be passed on.</h2>
      <a className='uploadInfo' href='/upload'> Upload Here</a>
    </div>
  );
}

export default Home;
