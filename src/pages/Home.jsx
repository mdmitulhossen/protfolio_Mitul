import About from "./About";
import Resume from "./Resume";

const Home = () => {

    window.scroll({
        behavior: 'smooth'
      });

    return (
        <div className="w-full shadow-2xl lg:h-[75%] h-full bg-[#222222] rounded-r-md lg:overflow-y-auto">
            <div id="about" className="">
                <About/>
            </div>
            <div id="resume" className="">
                <Resume/>
            </div>
            <div id="portfolio" className=" bg-yellow-400 text-[50px]">
                Portfolio
            </div>
            <div id="contact" className=" bg-yellow-800 text-[50px]">
                Contact
            </div>
        </div>
    );
};

export default Home;