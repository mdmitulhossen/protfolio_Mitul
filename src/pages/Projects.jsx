import Title from "../components/Header/Title";
import ProjectCard from "../components/card/ProjectCard";
import project1 from '../assets/project2.webp';
import { useState } from "react";

const ProjectsData = [
    {
        id: 1,
        title: 'Soulmate_connect',
        description: 'Online Matrimony Website',
        img: project1,
        liveLink: 'https://soulmate-connect.web.app/',
        githubLink: '',
        tag: 'MERN'
    },
    {
        id: 2,
        title: 'Soulmate_connect',
        description: 'Online Matrimony Website',
        img: project1,
        liveLink: 'https://soulmate-connect.web.app/',
        githubLink: '',
        tag: 'REACT'
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
        <div>
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

             <div className="grid grid-cols-2 gap-4 px-7 py-3">
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