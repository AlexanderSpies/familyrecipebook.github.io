import React from 'react';
import '../../Css/index.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="info-block">
                <h1 className='sectionHeading'>Kitchen Wisdom</h1>
                <p className='Info'>Embark on a heartwarming journey through generations of cherished recipes, where classic flavors and time-honored culinary traditions come together in perfect harmony. Our carefully curated collection brings a fresh and family-friendly twist to these beloved dishes, ensuring that everyone, from the littlest chef to the seasoned cook, finds joy in every bite.</p>
            </div>
            <div className="info-block">
                <h1 className='sectionHeading'>Shake Up Your Social Life</h1>
                <p className='Info'>Elevate your beverage game with a symphony of innovative cocktails that will awaken your senses and ignite your curiosity. Our drink recipes are more than just liquid refreshment; they are a fusion of unique flavors, tantalizing infusions, and well-guarded mixology secrets that promise to unlock a world of excitement.</p>
            </div>
            <div className="info-block">
                <h1 className='sectionHeading'>Stirring Up the Online Pot</h1>
                <p className='Info'>Share the magic of your favorite recipes with us. Your culinary creations have the power to bring smiles, satisfaction, and togetherness. Let's make our community richer in flavors and experiences. Join in, inspire others, and become a part of our flavorful family. Start sharing your cherished recipe today, and let the joy of cooking connect us all!</p>
            </div>
        </div>
    );
}

export default Home;