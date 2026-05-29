import { SiCplusplus } from "react-icons/si";
import { FaPython, FaReact, FaGitAlt, FaGithub, FaLinux, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {

    const skills = [
        { 
            name: "C++", 
            icon: <SiCplusplus />, 
            color: "text-[#00599C]" 
        },
        {
            name: "Python", 
            icon: <FaPython />, 
            color: "text-[#3776AB]" 
        },
        { 
            name: "JavaScript", 
            icon: <IoLogoJavascript />, 
            color: "text-[#F7DF1E]" 
        },
        { 
            name: "React", 
            icon: <FaReact />, 
            color: "text-[#61DAFB]" 
        },
        {
            name: "Tailwind CSS", 
            icon: <RiTailwindCssFill />, 
            color: "text-[#06B6D4]" 
        },
        { 
            name: "Git", 
            icon: <FaGitAlt />, 
            color: "text-[#F05032]" 
        },
        {
            name: "GitHub", 
            icon: <FaGithub />, 
            color: "text-[#F0F6FC]" 
        },
        {
            name: "Linux", 
            icon: <FaLinux />, 
            color: "text-[#FCC624]" 
        },
        {
            name: "HTML", 
            icon: <FaHtml5 />, 
            color: "text-[#E34F26]" 
        },
        {
            name: "CSS", 
            icon: <FaCss3Alt />, 
            color: "text-[#1572B6]" 
        }
    ];

    return (
        <section id="skills" className="bg-black py-32 px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-16">

                <h2 className="text-5xl font-bold text-white text-center mb-4">
                    Skills
                </h2>

                <p className="text-zinc-400 text-center text-lg mb-16">
                    Technologies and tools I use to build projects and solve problems.
                </p>

                <div className="grid grid-cols-5 gap-8">

                    {skills.map((skill) => (

                        <div
                            key={skill.name}
                            className="bg-zinc-800 border border-zinc-700 rounded-2xl p-10 text-center text-white hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 cursor-pointer"
                        >

                            <div className={`text-6xl mb-6 flex justify-center ${skill.color}`}>
                                {skill.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {skill.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;