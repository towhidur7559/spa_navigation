import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-150px)]">
            <HashLoader size={100} color="#F92FD3"></HashLoader>
        </div>
    );
};

export default Loader;