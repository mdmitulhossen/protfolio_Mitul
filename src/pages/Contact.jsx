import Title from "../components/Header/Title";
import { FaTelegramPlane } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <div className="px-7 py-5">
                <Title title='Get in Touch' />
            </div>
            {/* divider */}
            <div className="border-[0.5px] border-[#fff]/10"></div>
            {/* map */}
            <div className="px-7 py-5">
                <div className="mapouter">
                    <div className="gmap_canvas"><iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kumarkhali,kushtia,bangladesh&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections NYT</a></div>
                </div>
                {/* address */}
                <div className="grid grid-cols-2 gap-2 pt-8 text-[#949B9B]">
                    <div>
                        <p><span className="text-white">ADDRESS</span> . . . . Kushtia,Khulna</p>
                        <p><span className="text-white">PHONE</span> . . . . +8801757267779</p>
                    </div>
                    <div>
                        <p><span className="text-white">Email</span> . . . . md.mitul.hossen99@gmail.com</p>
                        <p><span className="text-white">WORKABLE</span> . . . . Available</p>
                    </div>
                </div>

            </div>

            {/* contact form */}
            <div>
                <div className="px-7 pt-8 pb-4">
                    <Title title='Get in Touch' />
                </div>
                <div className="border-[0.5px] border-[#fff]/10"></div>
                <form className="py-4 px-7">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <input className="w-full  px-5 py-2 rounded-md border-[#949B9B]/50 focus:outline-[#F6B846] focus:outline-1" type="text" placeholder="Your Name" />
                        </div>
                        <div>
                            <input className="w-full focus:outline-[#F6B846]  px-5  py-2 rounded-md border-[#949B9B]/50 focus:outline-1" type="text" placeholder="Your Email" />
                        </div>
                    </div>
                
                    <div className="pt-5">
                        <textarea className="w-full h-[80px] px-5 py-2 rounded-md border-[#949B9B]/50 focus:outline-[#F6B846] focus:outline-1" type="text" placeholder="Message"></textarea>
                    </div>
                    <div className="pt-5">
                        <button className="w-full py-[2px] h-[30px] rounded-md border-[#949B9B]/50 border-2 border-[#F6B846] hover:bg-[#F6B846] text-[#F6B846] duration-200 hover:text-[#222222] font-bold flex justify-center items-center gap-3">Send Message <FaTelegramPlane color="#fff"/></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;