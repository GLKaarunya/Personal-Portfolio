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
        <section id="skills" className="bg-black py-20 lg:py-32 px-4 md:px-8 lg:px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-6 md:p-10 lg:p-16">

                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                    Skills
                </h2>

                <p className="text-zinc-400 text-center text-base md:text-lg mb-10 lg:mb-16">
                    Technologies and tools I use to build projects and solve problems.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">

                    {skills.map((skill) => (

                        <div
                            key={skill.name}
                            className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 md:p-8 lg:p-10 text-center text-white hover:border-green-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20 transition duration-300 cursor-pointer"
                        >

                            <div className={`text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-5 lg:mb-6 flex justify-center ${skill.color}`}>
                                {skill.icon}
                            </div>

                            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
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