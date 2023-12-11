import Title from "../components/Header/Title";
import ProjectCard from "../components/card/ProjectCard";


const Projects = () => {
    return (
        <div>
            <div className="px-7 py-5">
                <Title title='Projects' />
            </div>
             {/* divider */}
             <div className="border-[0.5px] border-[#fff]/10"></div>

             <div className="grid grid-cols-2">
                <ProjectCard/>
             </div>
        </div>
    );
};

export default Projects;