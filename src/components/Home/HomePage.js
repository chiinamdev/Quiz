import React from 'react';
import videoHomePage from "../../assets/video-homepage.mp4";
import { Button } from '../Button';

const HomePage = (props) => {
    return (
      <div className="homepage-container">
        <video autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4" />
        </video>
        <div className="justify-center relative z-50 w-1/2 pl-7 pt-24 m-20">
          <div className="title">There's a better way to ask</div>
          <div className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            alias dignissimos expedita? Beatae architecto debitis optio dolores
            cupiditate, doloremque ullam? Perspiciatis neque reiciendis quos
            velit temporibus deleniti harum cum. Illo.
          </div>
          <Button to="/login" className="mt-10 mx-auto no-underline">Get started. <span className='lg:inline hidden'>It's free</span></Button>
        </div>
      </div>
    );
};

export default HomePage;