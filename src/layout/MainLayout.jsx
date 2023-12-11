import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="grid grid-cols-12   mx-auto max-w-[1400px] w-full h-full xl:px-10 px-4">
                <div className="col-span-1 w-full flex items-center">
                    <Navbar />
                </div>
                <div className=" col-span-5 flex items-center">
                    <ProfileCard/>
                </div>
                <div className=" col-span-6 flex items-center">
                    <Home/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;