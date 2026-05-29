import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
    return (
        <section id="contact" className="bg-black py-32 px-24">

            <div className="max-w-7xl mx-auto bg-zinc-900 border border-zinc-700 rounded-3xl p-16 text-center">

                <h2 className="text-5xl font-bold text-white mb-4">
                    Let's Connect
                </h2>

                <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
                    Whether it's a project, internship opportunity, open-source collaboration,
                    or simply a conversation about technology, feel free to reach out.
                </p>

                <div className="flex justify-center gap-8 flex-wrap">

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=lakshmikaarunyagattamneni@gmail.com"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-8 py-6 flex items-center gap-4 text-white hover:border-red-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
                    >
                        <SiGmail className="text-2xl text-[#EA4335]" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/lakshmi-kaarunya-gattamneni-8800a8218/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-8 py-6 flex items-center gap-4 text-white hover:border-blue-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
                    >
                        <FaLinkedin className="text-2xl text-[#0A66C2]" />
                    </a>

                    <a
                        href="https://github.com/GLKaarunya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-8 py-6 flex items-center gap-4 text-white hover:border-purple-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
                    >
                        <FaGithub className="text-2xl text-[#F0F6FC]" />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="bg-zinc-800 border border-zinc-700 rounded-2xl px-8 py-6 flex items-center gap-4 text-white hover:border-amber-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/20 transition duration-300"
                    >
                        <FaFileAlt className="text-2xl text-amber-400" />
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Contact;