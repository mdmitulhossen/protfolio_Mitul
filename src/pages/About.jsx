import Title from "../components/Header/Title";
import { FaHtml5 } from "react-icons/fa";


const About = () => {
    return (
        <div className="">
            <div className="px-7 py-5">
                <Title title='About Me' />
            </div>
            {/* divider */}
            <div className="border-[0.5px] border-[#fff]/10"></div>
            {/* about */}
            <div className="text-[#949B9B] py-8 px-7 text-lg">
                <p className="font-bold ">Hello! I'm Md Mitul Hossain.</p>
                <p className="text-justify">Dedicated MERN Stack Developer with a keen eye for detail and a passion for creating web applications that seamlessly blend aesthetics with functionality.I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack, leveraging the power of these technologies to build robust, scalable, and responsive web solutions.</p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                    <div>
                        <p><span className="text-white">AGE</span> . . . . 23</p>
                        <p><span className="text-white">WORKABLE</span> . . . . Available</p>
                    </div>
                    <div>
                        <p><span className="text-white">ADDRESS</span> . . . . Kushtia,Khulna</p>
                        <p><span className="text-white">RESIDENCE</span> . . . . Bangladesh</p>
                    </div>
                </div>
            </div>
            {/* My services */}
            <div className="py-5">
                <div className="px-7 py-5">
                    <Title title='My Services' />
                </div>
                {/* divider */}
                <div className="border-[0.5px] border-[#fff]/10"></div>

                {/* services */}
                <div className="px-7 py-5 grid grid-cols-2 gap-2">
                    <div className="text-[#949B9B] border-r border-[#fff]/20">
                        <div className="w-[60px] h-[60px] border-2 rounded-full border-[#F6B846] text-[#F6B846] flex justify-center items-center">
                            <FaHtml5 size={35}/>
                        </div>
                        <p className="text-white font-bold my-2">Front-end</p>
                        <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                    </div>
                    {/* reactJs website */}
                    <div className="text-[#949B9B]  border-[#fff]/20 pl-3">
                        <div className="w-[60px] h-[60px] border-2 rounded-full border-[#F6B846] text-[#F6B846] flex justify-center items-center">
                            <FaHtml5 size={35}/>
                        </div>
                        <p className="text-white font-bold my-2">ReactJs Website</p>
                        <p>Reactjs development services improve business websites.</p>
                    </div>
                    {/* MERN Stack */}
                    <div className="text-[#949B9B]  border-[#fff]/20 pl-3">
                        <div className="w-[60px] h-[60px] border-2 rounded-full border-[#F6B846] text-[#F6B846] flex justify-center items-center">
                            <FaHtml5 size={35}/>
                        </div>
                        <p className="text-white font-bold my-2">MERN Stack</p>
                        <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;