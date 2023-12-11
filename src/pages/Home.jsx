import About from "./About";

const Home = () => {

    window.scroll({
        behavior: 'smooth'
      });

    return (
        <div className="w-full shadow-2xl h-[75%] bg-[#222222] rounded-r-md overflow-y-auto">
            <div id="about" className="h-full">
                <About/>
            </div>
            <div id="resume" className="h-full bg-yellow-600 text-[50px]">
                Resume
            </div>
            <div id="portfolio" className="h-full bg-yellow-400 text-[50px]">
                Portfolio
            </div>
            <div id="contact" className="h-full bg-yellow-800 text-[50px]">
                Contact
            </div>
        </div>
    );
};

export default Home;