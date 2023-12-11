
import project1 from '../../assets/project2.webp';
const ProjectCard = () => {
    return (
        <div className="w-full h-[300px]  group overflow-hidden border">
            <div className='w-full h-[80%] overflow-hidden relative'>
                <img src={project1} className=' h-full w-full object-fill group-hover:scale-110 duration-300' alt="" />
                <div className='absolute group-hover:inset-0 bg-black/10 transition-all duration-300'>
                    <div className='absolute left-[-999px] transition-all duration-200 bottom-0 group-hover:left-1/2 transform -translate-x-1/2 flex gap-3 w-full'>
                        <button className='text-white flex justify-center items-center gap-4 border px-2 py-1 text-xs rounded-md hover:text-[#F6B846] hover:border-[#F6B846] duration-200 font-bold flex-1' >
                            Live Link
                        </button>
                        <button className='text-white flex justify-center items-center gap-4 border px-2 py-1 text-xs rounded-md hover:text-[#F6B846] hover:border-[#F6B846] duration-200 font-bold flex-1' >
                            Github Link
                        </button>
                    </div>
                </div>
            </div>
            <p className='text-white text-lg font-bold text-center mt-3'>
                Soulmate_connect
            </p>
        </div>
    );
};

export default ProjectCard;