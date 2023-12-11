import About from "./About";
import Projects from "./Projects";
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
            <div id="portfolio" className="pt-16">
                <Projects/>
            </div>
            <div id="contact" className=" bg-yellow-800 text-[50px]">
                Contact
            </div>
        </div>
    );
};

export default Home;