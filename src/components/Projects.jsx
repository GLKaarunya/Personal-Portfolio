function Projects() {

    const projects = [
        {
            title: "Project Coming Soon",
            description: "Currently working on exciting projects. Stay tuned for updates."
        },
        {
            title: "Project Coming Soon",
            description: "Currently working on exciting projects. Stay tuned for updates."
        },
        {
            title: "Project Coming Soon",
            description: "Currently working on exciting projects. Stay tuned for updates."
        }
    ];

    return (

        <section id="projects" className="bg-black py-20 lg:py-32 px-4 md:px-8 lg:px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-6 md:p-10 lg:p-16">

                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                    Projects
                </h2>

                <p className="text-zinc-400 text-center text-base md:text-lg mb-10 lg:mb-16">
                    A collection of projects showcasing my learning journey and technical skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden hover:border-pink-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-500/20 transition duration-300"
                        >

                            <div className="h-40 md:h-48 bg-zinc-700 flex items-center justify-center">

                                <span className="text-6xl">
                                    🚀
                                </span>

                            </div>

                            <div className="p-5 md:p-6">

                                <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 mb-6 text-sm md:text-base">
                                    {project.description}
                                </p>

                                <div className="flex gap-3">

                                    <button className="px-4 py-2 bg-zinc-700 text-zinc-400 rounded-lg cursor-not-allowed">
                                        GitHub
                                    </button>

                                    <button className="px-4 py-2 bg-zinc-700 text-zinc-400 rounded-lg cursor-not-allowed">
                                        Demo
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Projects;