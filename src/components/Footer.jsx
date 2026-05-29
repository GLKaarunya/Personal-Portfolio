import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        <footer className="bg-black py-12">

            <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8">

                <h3 className="text-center text-white text-2xl font-bold mb-3">
                    GL Kaarunya
                </h3>

                <p className="text-center text-zinc-400 mb-6">
                    Built with React, Vite & Tailwind CSS
                </p>

                <div className="flex justify-center gap-6 mb-6">

                    <a href="https://github.com/GLKaarunya" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-white hover:text-purple-400 transition" />
                    </a>

                    <a href="https://www.linkedin.com/in/lakshmi-kaarunya-gattamneni-8800a8218/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-[#0A66C2] hover:scale-110 transition" />
                    </a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lakshmikaarunyagattamneni@gmail.com">
                        <SiGmail className="text-2xl text-[#EA4335] hover:scale-110 transition" />
                    </a>

                </div>

                <p className="text-center text-zinc-500 text-sm">
                    © {new Date().getFullYear()} GL Kaarunya. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;