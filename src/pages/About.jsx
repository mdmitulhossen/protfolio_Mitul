import Title from "../components/Header/Title";


const About = () => {
    return (
        <div>
            <div className="px-7 py-5">
                <Title title='About Me'/>
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
                <Title title='My Services'/>
            </div>
            {/* divider */}
            <div className="border-[0.5px] border-[#fff]/10"></div>
            </div>
        </div>
    );
};

export default About;