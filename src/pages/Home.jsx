import Nav from '../components/Nav';
import BG from '../assets/BG.jpg';

function Home() {

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
