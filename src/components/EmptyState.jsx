import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EmptyState = ({ message, address, label }) => {
    return (
        <div className="min-h-[100vh-150px] gap-5 flex flex-col justify-center items-center pb-16">
            <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
            <Link to={address}>
                <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{label}</button>
            </Link>

        </div>
    );
};

export default EmptyState;