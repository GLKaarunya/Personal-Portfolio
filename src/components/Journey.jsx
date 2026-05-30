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

        <section id="journey" className="bg-black py-20 lg:py-32 px-4 md:px-8 lg:px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-6 md:p-10 lg:p-16">

                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                    Journey
                </h2>

                <p className="text-zinc-400 text-center text-base md:text-lg mb-12 lg:mb-20">
                    My academic and technical journey so far.
                </p>

                <div className="relative">

                    <div className="absolute left-[9px] md:left-[11px] top-0 w-[2px] h-full bg-zinc-700"></div>

                    <div className="space-y-10 md:space-y-16">

                        {timeline.map((item) => (

                            <div key={item.title} className="relative flex gap-4 md:gap-8">

                                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-400 border-4 border-zinc-900 z-10 shrink-0"></div>

                                <div>

                                    <p className="text-orange-400 font-bold text-base md:text-lg">
                                        {item.year}
                                    </p>

                                    <h3 className="text-white text-xl md:text-2xl font-semibold mt-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm md:text-base mt-3 leading-relaxed max-w-3xl">
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