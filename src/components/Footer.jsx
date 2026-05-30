import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (

        <footer className="bg-black py-8 md:py-12">

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-24 border-t border-zinc-800 pt-8">

                <h3 className="text-center text-white text-xl md:text-2xl font-bold mb-3">
                    GL Kaarunya
                </h3>

                <p className="text-center text-zinc-400 text-sm md:text-base mb-6">
                    Built with React, Vite & Tailwind CSS
                </p>

                <div className="flex justify-center gap-6 md:gap-8 mb-6">

                    <a
                        href="https://github.com/GLKaarunya"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl md:text-3xl text-white hover:text-purple-400 hover:scale-110 transition duration-300" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lakshmi-kaarunya-gattamneni-8800a8218/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-2xl md:text-3xl text-[#0A66C2] hover:scale-110 transition duration-300" />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=lakshmikaarunyagattamneni@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGmail className="text-2xl md:text-3xl text-[#EA4335] hover:scale-110 transition duration-300" />
                    </a>

                </div>

                <p className="text-center text-zinc-500 text-xs md:text-sm">
                    © {new Date().getFullYear()} GL Kaarunya. All Rights Reserved.
                </p>

            </div>

        </footer>

    );
}

export default Footer;