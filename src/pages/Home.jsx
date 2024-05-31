import Hero from "../components/Hero";
import wave from '../assets/wave.svg';

const Home = () => {
    return (
        <div>
            {/* <h1>Home</h1> */}
            {/* Hero from Daisy UI */}
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-150px)] relative">
                <Hero></Hero>
                <div className="absolute bottom-0 w-full">
                    <img src={wave} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;