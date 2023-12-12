import Title from "../components/Header/Title";
import ProjectCard from "../components/card/ProjectCard";
import project1 from '../assets/project2.webp';
import project_surplus from '../assets/project_surplus.png';
import project_soulmate from '../assets/project_soulmate.png';
import project_giga from '../assets/project_gigagadget.png';
import { useState } from "react";

const ProjectsData = [
    {
        id: 1,
        title: 'Soulmate_connect',
        description: 'Online Matrimony Website',
        img: project_soulmate,
        liveLink: 'https://soulmate-connect.web.app/',
        githubLink: 'https://github.com/mdmitulhossen/soulmate-connect-client',
        tag: 'MERN'
    },
    {
        id: 2,
        title: 'Food-Surplus-Saver',
        description: 'Food Sharing and Surplus Reduction Platform',
        img: project_surplus,
        liveLink: 'https://food-surplus-saver.web.app',
        githubLink: 'https://github.com/mdmitulhossen/food-surplus-saver-client',
        tag: 'MERN'
    },
    {
        id: 3,
        title: 'gigagadgets',
        description: 'Technology and electronics product selling',
        img: project_giga,
        liveLink: 'https://gigagadgets-f4dcf.web.app/',
        githubLink: 'https://github.com/mdmitulhossen/giga-gadgets-client',
        tag: 'MERN'
    },
]

const Projects = () => {
    const [projects, setProjects] = useState(ProjectsData)


    const handletab = (e,tagValue) => {
        const targetBtn = e.target
        const btns = document.querySelectorAll('.isActive')
        btns.forEach(btn => {
            btn.classList.remove('tabActive')
        })
        targetBtn.classList.add('tabActive')

        if(tagValue === 'ALL') return setProjects(ProjectsData)
        setProjects(ProjectsData.filter(project => project.tag === tagValue))
    }
    return (
        <div className="">
            <div className="px-7 py-5">
                <Title title='Projects' />
            </div>
             {/* divider */}
             <div className="border-[0.5px] border-[#fff]/10"></div>

             <div className="px-7 py-3 space-x-3">
                <button onClick={(e)=>handletab(e,'ALL')} className="isActive text-xs tabActive font-bold text-[#F6B846] border border-[#F6B846] rounded px-2 py-1 duration-200 hover:bg-[#F6B846] hover:text-white">ALL</button>
                <button onClick={(e)=>handletab(e,'MERN')} className="isActive text-xs font-bold text-[#F6B846] border border-[#F6B846] rounded px-2 py-1 duration-200 hover:bg-[#F6B846] hover:text-white">MERN</button>
                <button onClick={(e)=>handletab(e,'ALL')} className="isActive text-xs font-bold text-[#F6B846] border border-[#F6B846] rounded px-2 py-1 duration-200 hover:bg-[#F6B846] hover:text-white">REACT</button>
                <button onClick={(e)=>handletab(e,'ALL')} className="isActive text-xs font-bold text-[#F6B846] border border-[#F6B846] rounded px-2 py-1 duration-200 hover:bg-[#F6B846] hover:text-white">HTML CSS</button>
             </div>

             <div className="grid md:grid-cols-2 gap-4 px-7 py-3">
                {
                    projects.map(project => (
                        <ProjectCard key={project.id} project={project}/>
                    ))
                }
             </div>
        </div>
    );
};

export default Projects;