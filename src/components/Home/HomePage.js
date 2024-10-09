import React from 'react';
import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
      <div className="homepage-container">
        <video autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4" />
        </video>
        <div className="homepage-content">
            <div className='title'>There's a better way to ask</div>
            <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias dignissimos expedita? Beatae architecto debitis optio dolores cupiditate, doloremque ullam? Perspiciatis neque reiciendis quos velit temporibus deleniti harum cum. Illo.</div>
            <div className='button homepage-button'>
                <button className='button'>Get started. It's free</button>
            </div>
        </div>
      </div>

    );
};

export default HomePage;