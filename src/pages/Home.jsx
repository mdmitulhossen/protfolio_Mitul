import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Home = () => {

    window.scroll({
        behavior: 'smooth'
      });

    return (
        <div className="w-full shadow-2xl lg:h-[70%] h-full lg:bg-[#222222] rounded-r-md lg:overflow-y-auto ">
            <div id="about" className="">
                <About/>
            </div>
            <div id="resume" className="">
                <Resume/>
            </div>
            <div id="portfolio" className="mt-16">
                <Projects/>
            </div>
            <div id="contact" className="mt-12">
                <Contact/>
            </div>
        </div>
    );
};

export default Home;