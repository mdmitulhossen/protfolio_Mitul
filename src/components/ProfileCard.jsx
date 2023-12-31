import { TypeAnimation } from 'react-type-animation';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import profileImage from '../assets/profile.png'

import resume from '../../resume_Md_Mitul_Hossain.pdf'
const ProfileCard = () => {

    const handleContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
    }
    return (
        <div className="w-full shadow-2xl lg:h-[75%] h-full bg-[#222222] rounded-md overflow-hidden relative ">
            <div className="img-container"></div>
            {/* body */}
            <div className="absolute h-3/5 bg-[#222222] bottom-0 w-full rounded-t-[27%] flex flex-col justify-center items-center">
                <div className='pt-[120px]'>
                    <p className='xl:text-4xl lg:text-2xl text-4xl font-bold text-center text-white'>Md Mitul Hossain</p>
                    <p className='text-center mt-2'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Web Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Front-end Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'ReactJS Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '18px', display: 'inline-block', color: '#F6B846' }}
                            repeat={Infinity}
                        />
                    </p>
                    {/* socialicon */}
                    <div className='flex gap-3 justify-center pt-3'>
                        <a href=""> <CiLinkedin size={30} color='#fff' />  </a>
                        <a href=""><FaGithub size={30} color='#fff' /></a>
                        <a href=""><FaFacebookSquare size={30} color='#fff' /></a>
                    </div>

                    <div className='flex gap-5 pt-6 justify-center'>
                        <a href={resume} download={resume}>
                            <button className='text-white flex justify-center items-center gap-4 border px-4 py-1 rounded-md hover:text-[#F6B846] hover:border-[#F6B846] duration-200' >
                                Download CV <FaCloudDownloadAlt size={20} />
                            </button>
                        </a>

                        <button onClick={handleContact} className='text-white flex justify-center items-center gap-4 border px-4 py-1 rounded-md hover:text-[#F6B846] hover:border-[#F6B846] duration-200' >
                            Contact Me <FaTelegramPlane size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* user pic */}
            <div className="absolute w-[200px] top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 h-[200px] bg-[#F8B947] rounded-full overflow-hidden">
                <img className="w-full h-full rounded-full object-center scale-150" src={profileImage} alt="" />
            </div>
        </div>
    );
};

export default ProfileCard;