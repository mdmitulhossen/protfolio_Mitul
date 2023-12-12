import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className="w-full h-screen  flex justify-center items-center relative">
                {/* <ul className="circles w-full">
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
            </ul> */}
            <div className="lg:grid grid-cols-12   mx-auto max-w-[1400px] w-full h-full xl:px-10 px-4 gap-16 lg:gap-0 z-30">
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
           
                <div className="absolute bottom-0 left-0 w-full  bg-[#222222] hidden lg:block">
                    <div className="flex justify-center items-center gap-4 text-white py-2">
                        <p>© {new Date().getFullYear()} All Rights Reserved</p>
                        <p>|</p>
                        <p><span className="text-[#F6B846]">Md Mitul Hossain</span></p>
                    </div>
                </div>
            
        </div>
    );
};

export default MainLayout;