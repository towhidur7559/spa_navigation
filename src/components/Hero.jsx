import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-content text-center text-neutral-content -mt-20">
            <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold"><span className="">Hey,{' '}</span><span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">SpaNavigation</span> </h1>
                <p className="mb-5">SPA (Single Page Application) navigation refers to the method of navigating within a single-page application.</p>
                <div className="flex gap-2 justify-center">
                    <Link to='/blogs'>
                        <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read Blogs</button>
                    </Link>
                    <Link to='/bookmarks'>
                        <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Bookmarks</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;