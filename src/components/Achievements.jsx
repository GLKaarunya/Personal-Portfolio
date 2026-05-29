function Achievements() {

    const achievements = [
        {
            icon: "♟️",
            title: "Chess",
            description: "Passionate chess player interested in strategy, analysis, and continuous improvement."
        },
        {
            icon: "💻",
            title: "Open Source",
            description: "Beginning my journey into open source development and collaborative software projects."
        },
        {
            icon: "📜",
            title: "Certifications",
            description: "Continuously building technical expertise through courses, certifications, and hands-on learning."
        },
        { 
            icon: "⚡",
            title: "Competitive Programming",
            description: "Building problem-solving skills through regular participation in coding contests and pursuing a 1000+ Codeforces rating milestone."
        }
    ];

    return (
        <section id="achievements" className="bg-black py-32 px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-16">

                <h2 className="text-5xl font-bold text-white text-center mb-4">
                    Achievements
                </h2>

                <p className="text-zinc-400 text-center text-lg mb-16">
                    Milestones, accomplishments, and goals that define my journey.
                </p>

                <div className="grid grid-cols-2 gap-8">

                    {achievements.map((achievement) => (

                        <div
                            key={achievement.title}
                            className="bg-zinc-800 border border-zinc-700 rounded-2xl p-10 hover:border-purple-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 cursor-pointer"
                        >

                            <div className="text-6xl mb-6">
                                {achievement.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-4">
                                {achievement.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">
                                {achievement.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Achievements;