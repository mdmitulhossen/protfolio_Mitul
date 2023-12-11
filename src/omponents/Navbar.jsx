import { TiDocumentText } from "react-icons/ti";
import { IoIosMan } from "react-icons/io";
import { IoIosCodeWorking } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {


    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        const aboutNav = document.getElementById('aboutNav');
        const resumeNav = document.getElementById('resumeNav');
        const protfolioNav = document.getElementById('protfolioNav');
        const contactNav = document.getElementById('contactNav');

        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
        if(id === 'about'){
            // window.location.hash = '#about'
            
            aboutNav.classList.add('text-[#F6B846]')
            aboutNav.classList.remove('text-white')
            resumeNav.classList.remove('text-[#F6B846]')
            resumeNav.classList.add('text-white')
            protfolioNav.classList.remove('text-[#F6B846]')
            protfolioNav.classList.add('text-white')
            contactNav.classList.remove('text-[#F6B846]')
            contactNav.classList.add('text-white')
        }
        else if(id === 'resume'){
            // window.location.hash = '#resume'
            resumeNav.classList.add('text-[#F6B846]')
            resumeNav.classList.remove('text-white')
            aboutNav.classList.remove('text-[#F6B846]')
            aboutNav.classList.add('text-white')
            protfolioNav.classList.remove('text-[#F6B846]')
            protfolioNav.classList.add('text-white')
            contactNav.classList.remove('text-[#F6B846]')
            contactNav.classList.add('text-white')
        }
        else if(id === 'portfolio'){
            // window.location.hash = '#portfolio'
            protfolioNav.classList.add('text-[#F6B846]')
            protfolioNav.classList.remove('text-white')
            aboutNav.classList.remove('text-[#F6B846]')
            aboutNav.classList.add('text-white')
            resumeNav.classList.remove('text-[#F6B846]')
            resumeNav.classList.add('text-white')
            contactNav.classList.remove('text-[#F6B846]')
            contactNav.classList.add('text-white')

        }
        else if(id === 'contact'){
            // window.location.hash = '#contact'
            contactNav.classList.add('text-[#F6B846]')
            contactNav.classList.remove('text-white')
            aboutNav.classList.remove('text-[#F6B846]')
            aboutNav.classList.add('text-white')
            resumeNav.classList.remove('text-[#F6B846]')
            resumeNav.classList.add('text-white')
            protfolioNav.classList.remove('text-[#F6B846]')
            protfolioNav.classList.add('text-white')

        }

      };

    return (
        <div className="bg-[#222222] shadow-2xl  w-full rounded-lg">
         
            <a id='aboutNav' onClick={()=>handleClickScroll('about')} className="text-[#F6B846]">
                <div className="p-2  flex flex-col justify-center items-center cursor-pointer border-b border-b-[#fff]/25">
                    <p className=""><IoIosMan  size={35} /></p>
                    <p className="font-semibold  mt-1">ABOUT</p>
                </div>
            </a>
            <a id='resumeNav' onClick={()=>handleClickScroll('resume')} className="text-white">
                <div className="p-2  flex flex-col justify-center items-center cursor-pointer border-b border-b-[#fff]/25">
                    <p className=""><TiDocumentText  size={35} /></p>
                    <p className="font-semibold  mt-1">RESUME</p>
                </div>
            </a>
            <a id='protfolioNav' className="text-white" onClick={()=>handleClickScroll('portfolio')}>
                <div className="p-2 flex flex-col justify-center items-center cursor-pointer border-b border-b-[#fff]/25">
                    <p className=""><IoIosCodeWorking  size={35} /></p>
                    <p className="font-semibold  mt-1">PORTFOLIO</p>
                </div>
            </a>
            <a id='contactNav' className="text-white" onClick={()=>handleClickScroll('contact')}>
                <div className="p-2  flex flex-col justify-center items-center cursor-pointer">
                    <p className=""><FaTelegramPlane  size={35} /></p>
                    <p className="font-semibold  mt-1">CONTACT</p>
                </div>
            </a>

        </div>
    );
};

export default Navbar;