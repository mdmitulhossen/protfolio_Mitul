import { FaCheck, FaCode, FaGraduationCap } from "react-icons/fa";
import Title from "../components/Header/Title";
import CirclePrograss from "../components/progress/CirclePrograss";
import { MdOutlineMenuBook } from "react-icons/md";

const Resume = () => {
    return (
        <div>
            <div className="px-7 py-5">
                <Title title='Resume' />
            </div>
            {/* divider */}
            <div className="border-[0.5px] border-[#fff]/10"></div>
            {/* education */}
            <div className="px-7 py-5">
                <div className="flex gap-3 items-center py-3">
                    <div className="w-[50px] h-[50px] border-2 rounded-full border-[#F6B846] text-[#F6B846] flex justify-center items-center">
                        <FaGraduationCap size={35} />

                    </div>
                    <p className="text-white font-bold text-2xl">Education</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* DU */}
                    <div className="text-[#949B9B] pt-6 mt-3 border-t border-r border-[#fff]/20">
                        <p className="px-1 inline-block border border-[#F6B846] text-[#F6B846] text-xs">2020 - Present</p>
                        <p className="text-white font-bold mt-2 text-lg">univercity Of Dhaka</p>
                        <p className="mb-3">Bangladesh</p>
                        <p>Univercity of Dhaka(DU) is a public univercity of Bangladesh.Department of Computer science and Engineering in Technology Unit of DU</p>
                    </div>
                    {/* PH */}
                    <div className="text-[#949B9B] pt-6 mt-3 border-t  border-[#fff]/20">
                        <p className="px-1 inline-block border border-[#949B9B] text-[#949B9B] text-xs">June-2023 - Dec-2023</p>
                        <p className="text-white font-bold mt-2 text-lg">Web Development Course</p>
                        <p className="mb-3">Programming Hero, Bangladesh</p>
                        <p>Course Work - HTML5, CSS3, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose, TailwindCSS, Bootstrap, MUI</p>
                    </div>
                </div>
            </div>


            {/* Skills */}
            <div className="pt-5">
                <div className="px-7 py-5">
                    <Title title='Skills' />
                </div>
                {/* divider */}
                <div className="border-[0.5px] border-[#fff]/10"></div>

                <div className="px-7 py-5 grid grid-cols-2 gap-3">
                    <div className="">
                        <div className="flex gap-3 items-center pt-3">
                            <div className="w-[40px] h-[40px] border-2 rounded-full border-[#F6B846] text-[#F6B846] flex justify-center items-center">
                                <FaCode size={25} />

                            </div>
                            <p className="text-white font-bold text-xl">CODING</p>
                        </div>
                        {/* divider html css react*/}
                        <div className="mt-5 flex gap-2 justify-around items-center border-t border-r border-[#fff]/20 pt-5">
                            <div className="w-[80px] h-[80px]">
                                <CirclePrograss value={90} name='HTML5/CSS3'/>
                            </div>
                            <div className="w-[80px] h-[80px]">
                                <CirclePrograss value={80} name='ReactJS'/>
                            </div>
                        </div>
                        {/* node express mongodb */}
                        <div className="mt-5 flex gap-2 justify-around items-center border-r border-[#fff]/20 pt-12">
                            <div className="w-[80px] h-[80px]">
                                <CirclePrograss value={70} name='ExpressJS'/>
                            </div>
                            <div className="w-[80px] h-[80px]">
                                <CirclePrograss value={60} name='MongoDB'/>
                            </div>
                        </div>


                    </div>
                    {/* Item 2 */}
                    <div className="">
                        <div className="flex gap-3 items-center pt-3">
                            <div className="w-[40px] h-[40px] border-2 rounded-full border-[#F6B846] text-[#F6B846] flex justify-center items-center">
                                <MdOutlineMenuBook  size={25} />

                            </div>
                            <p className="text-white font-bold text-xl">KNOWLEDGE</p>
                        </div>

                        <div className="mt-5  border-t border-[#fff]/20 pt-5 space-y-3">
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             TailwindCSS,BootStrap,MUI
                           </p>
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             Git,Github,NPM,VS Code
                           </p>
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             Firebase,Stripe,Netlify,Vercel
                           </p>
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             Mongoose,JWT
                           </p>
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             Ant Design, AOS, Framer Motion
                           </p>
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             Tanstack Query, Tanstack Table
                           </p>
                           <p className="text-white flex items-center gap-2">
                             <FaCheck color='#F6B846' size={18}/>
                             Responsive and mobile-ready
                           </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;