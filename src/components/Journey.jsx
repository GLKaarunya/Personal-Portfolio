function Journey() {

    const timeline = [
        {
            year: "2024",
            title: "Joined LNMIIT Jaipur",
            description: "Started my journey as an Electronics and Communication Engineering student."
        },
        {
            year: "2025",
            title: "Started Web Development",
            description: "Began learning modern web technologies including HTML, CSS, JavaScript, React and Tailwind CSS."
        },
        {
            year: "2025",
            title: "Started Open Source Journey",
            description: "Exploring Git, GitHub and collaborative software development through open source."
        },
        {
            year: "2025",
            title: "Built Personal Portfolio",
            description: "Designed and developed my personal portfolio website using React, Vite and Tailwind CSS."
        },
        {
            year: "Future",
            title: "Growth & Opportunities",
            description: "Focused on internships, open source contributions, competitive programming and continuous learning."
        }
    ];

    return (
        <section id="journey" className="bg-black py-32 px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-16">

                <h2 className="text-5xl font-bold text-white text-center mb-4">
                    Journey
                </h2>

                <p className="text-zinc-400 text-center text-lg mb-20">
                    My academic and technical journey so far.
                </p>

                <div className="relative">

                    <div className="absolute left-[11px] top-0 w-[2px] h-full bg-zinc-700"></div>

                    <div className="space-y-16">

                        {timeline.map((item) => (

                            <div key={item.title} className="relative flex gap-8">

                                <div className="w-6 h-6 rounded-full bg-orange-400 border-4 border-zinc-900 z-10"></div>

                                <div>

                                    <p className="text-orange-400 font-bold text-lg">
                                        {item.year}
                                    </p>

                                    <h3 className="text-white text-2xl font-semibold mt-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-zinc-400 mt-3 leading-relaxed max-w-3xl">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Journey;