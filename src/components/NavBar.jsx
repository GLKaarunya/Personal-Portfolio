import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiDocumentText, HiMenu, HiX } from "react-icons/hi";

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="sticky top-0 z-50 bg-black text-white">

            <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">

                <a
                    href="#home"
                    className="text-2xl md:text-4xl font-bold hover:text-green-400 transition"
                >
                    GLK.
                </a>

                <div className="hidden lg:flex gap-12 text-zinc-300 font-semibold text-xl">

                    <a href="#skills" className="hover:text-cyan-400 transition">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-pink-400 transition">
                        Projects
                    </a>

                    <a href="#achievements" className="hover:text-orange-400 transition">
                        Achievements
                    </a>

                    <a href="#journey" className="hover:text-purple-400 transition">
                        Journey
                    </a>

                    <a href="#contact" className="hover:text-red-400 transition">
                        Contact
                    </a>

                </div>

                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-white"
                    >
                        {menuOpen ? <HiX size={36} /> : <HiMenu size={36} />}
                    </button>

                    <div className="hidden lg:flex gap-4">

                        <a
                            href="https://www.linkedin.com/in/lakshmi-kaarunya-gattamneni-8800a8218/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition"
                        >
                            <FaLinkedinIn size={28} />
                        </a>

                        <a
                            href="https://github.com/GLKaarunya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center hover:border-purple-400 hover:text-purple-400 transition"
                        >
                            <FaGithub size={28} />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition"
                        >
                            <HiDocumentText size={28} />
                        </a>

                    </div>

                </div>

            </div>

            {menuOpen && (

                <div className="lg:hidden bg-zinc-900 border-t border-zinc-800">

                    <div className="flex flex-col items-center py-6">

                        <a
                            href="#skills"
                            onClick={() => setMenuOpen(false)}
                            className="py-4 text-2xl font-bold text-zinc-200 hover:text-cyan-400 transition"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setMenuOpen(false)}
                            className="py-4 text-2xl font-bold text-zinc-200 hover:text-pink-400 transition"
                        >
                            Projects
                        </a>

                        <a
                            href="#achievements"
                            onClick={() => setMenuOpen(false)}
                            className="py-4 text-2xl font-bold text-zinc-200 hover:text-orange-400 transition"
                        >
                            Achievements
                        </a>

                        <a
                            href="#journey"
                            onClick={() => setMenuOpen(false)}
                            className="py-4 text-2xl font-bold text-zinc-200 hover:text-purple-400 transition"
                        >
                            Journey
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="py-4 text-2xl font-bold text-zinc-200 hover:text-red-400 transition"
                        >
                            Contact
                        </a>

                        <div className="w-3/4 border-t border-zinc-700 my-6"></div>

                        <div className="flex gap-8 pb-4">

                            <a
                                href="https://www.linkedin.com/in/lakshmi-kaarunya-gattamneni-8800a8218/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400"
                            >
                                <FaLinkedinIn size={30} />
                            </a>

                            <a
                                href="https://github.com/GLKaarunya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-400"
                            >
                                <FaGithub size={30} />
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400"
                            >
                                <HiDocumentText size={30} />
                            </a>

                        </div>

                    </div>

                </div>

            )}

        </nav>

    );
}

export default NavBar;