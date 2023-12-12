
import project1 from '../../assets/project2.webp';
const ProjectCard = ({ project }) => {

    return (
        <div className="w-full h-auto  group overflow-hidden shadow-2xl rounded border border-dashed border-[#fff]/20">
            <div className='w-full h-[75%] overflow-hidden relative rounded-t'>
                <img src={project.img} className='h-[290px] w-full object-fill group-hover:scale-110 duration-300 rounded-t' alt="" />
                <div className='absolute group-hover:inset-0 bg-black/10 transition-all duration-300'>
                    <div className='absolute left-[-999px] transition-all duration-200 bottom-0 group-hover:left-1/2 transform -translate-x-1/2 flex gap-3 w-full'>
                        <a target='_blank' rel='noreferrer' className='flex-1' href={project.liveLink}>
                            <button className='text-white w-full flex justify-center items-center gap-4 border px-2 py-1 text-xs rounded-md hover:text-[#F6B846] hover:border-[#F6B846] duration-200 font-bold' >
                                Live Link
                            </button>
                        </a>
                        <a target='_blank' rel='noreferrer'  className='flex-1' href={project.githubLink}>
                            <button className='text-white w-full flex justify-center items-center gap-4 border px-2 py-1 text-xs rounded-md hover:text-[#F6B846] hover:border-[#F6B846] duration-200 font-bold' >
                                Github Link
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-white text-lg font-bold text-center mt-3'>
                {project.title} <br /> <span className='text-[#949B9B] font-normal'>{project.description}</span>
            </p>
        </div>
    );
};

export default ProjectCard;