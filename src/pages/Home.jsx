import React from 'react';
import Nav from '../components/Nav';
import BG from '../assets/BG.jpg';

function Home() {
    const handleSignIn = () => {
        // Handle sign-in logic here
    };

    return (
        <div className="home">
            <div className="home-wrapper">
                <Nav />
                <div className="image-container">
                    <img style={{ height: "80vh", width: "100%" }} src={BG} alt="" />

                </div>
            </div>
        </div>
    );
}

export default Home;
