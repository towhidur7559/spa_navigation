import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Blogs from "../pages/Blogs";
// import Bookmarks from "../pages/Bookmarks";
// import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div>
            <div className="h-20">
                <Navbar></Navbar>
            </div>
            {/* <Home></Home>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>             */}
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;