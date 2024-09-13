import React from "react";
import './Home.css';

const Home: React.FC = () => {
  return(
    <div className='homepage'>
      <div className="homepage_picture">
        <img 
        src="https://images.squarespace-cdn.com/content/v1/661043c4a62d407aa7d2daf8/1723469800596-ILMAKRVVVYIV16Z5F1BK/unsplash-image-N_Y88TWmGwA.jpg?format=1500w"
        alt="food"
        />
      </div>
      <div className="homepage_text">
        <h1>App Launching Soon!</h1>
        <h4> The new way to secure a reservation at sought after venues. </h4>
        <ul>
          <li>Find the venue you’d like to dine.</li>
          <li>Place a bid up to the amount you are planning on spending for the dinner.</li>
          <li>Win the auction.</li>
        </ul>

        <p> Now go enjoy your dining experience - the total amount you won the auction for is applied to your bill as a minimum spend. Simple as that! </p> 

        <h2> Bid. Win. Dine. </h2>
      </div>
    </div>
  );
}

export default Home;