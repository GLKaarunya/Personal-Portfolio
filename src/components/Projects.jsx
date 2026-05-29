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

        <section id="projects" className="bg-black py-32 px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-16">

                <h2 className="text-5xl font-bold text-white text-center mb-4">
                    Projects
                </h2>

                <p className="text-zinc-400 text-center text-lg mb-16">
                    A collection of projects showcasing my learning journey and technical skills.
                </p>

                <div className="grid grid-cols-3 gap-8">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="bg-zinc-800 border border-zinc-700 rounded-2xl overflow-hidden hover:border-pink-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
                        >

                            <div className="h-48 bg-zinc-700 flex items-center justify-center">

                                <span className="text-zinc-400 text-lg">
                                    Project Image
                                </span>

                            </div>

                            <div className="p-6">

                                <h3 className="text-white text-2xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 mb-6">
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