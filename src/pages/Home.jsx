import Avatar from "../components/Avatar";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="bg-black min-h-screen">

            <NavBar />

            <div
                id="home"
                className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 min-h-screen gap-12 lg:gap-0"
            >

                <div className="text-white max-w-3xl text-center">

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                        Hello, I'm
                    </h1>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-normal bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                        GL Kaarunya
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 mt-4">
                        ECE Student • Developer • Open Source Enthusiast
                    </p>

                    <p className="text-zinc-400 text-base md:text-lg lg:text-xl mt-8 lg:mt-10 leading-relaxed max-w-2xl mx-auto">
                        I'm an Electronics and Communication Engineering student at LNMIIT Jaipur
                        passionate about software development, open source, and problem solving.
                        I enjoy building real-world projects, exploring new technologies, and
                        continuously improving my skills as an engineer and developer.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-10 lg:mt-12">

                        <a
                            href="#contact"
                            className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition duration-300"
                        >
                            <div className="px-8 py-3 bg-black rounded-full text-white font-medium">
                                Let's Connect
                            </div>
                        </a>

                        <a
                            href="/resume.pdf"
                            className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition duration-300"
                        >
                            <div className="px-8 py-3 bg-black rounded-full text-white font-medium">
                                Download Resume
                            </div>
                        </a>

                    </div>

                </div>

                <Avatar />

            </div>

            <Skills />

            <Projects />

            <Achievements />

            <Journey />

            <Contact />
            
            <Footer />

        </div>
    );
}

export default Home;