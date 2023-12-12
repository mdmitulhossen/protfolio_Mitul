import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className="w-full h-screen  flex justify-center items-center relative">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className="grid grid-cols-12   mx-auto max-w-[1400px] w-full h-full xl:px-10 px-4 gap-16 lg:gap-0 z-30">
                <div className="lg:col-span-1 flex col-span-full w-full  items-center ">
                    <Navbar />
                </div>
                <div className=" lg:col-span-4 col-span-full flex items-center h-[600px] lg:h-full w-full">
                    <ProfileCard/>
                </div>
                <div className=" lg:col-span-7 col-span-full flex items-center pb-8 lg:pb-0  h-full lg:overflow-hidden w-full">
                    <Home/>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;