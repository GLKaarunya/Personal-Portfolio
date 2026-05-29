import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";


function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-black text-white">

      <a href="#home" className="text-4xl font-bold cursor-pointer hover:border-green-400 hover:text-green-400 transition">
        GLK.
    </a>

      <div className="flex gap-12 text-zinc-300 font-semibold text-xl">

        <a href="#skills" className="hover:border-cyan-400 hover:text-cyan-400 transition">Skills</a>
        <a href="#projects" className="hover:border-pink-400 hover:text-pink-400 transition">Projects</a>
        <a href="#experience" className="hover:border-purple-400 hover:text-purple-400 transition">Experience</a>
        <a href="#achievements" className="hover:border-orange-400 hover:text-orange-400 transition">Achievements</a>
        <a href="#contact" className="hover:border-red-400 hover:text-red-400 transition">Contact</a>

      </div>

      <div className="flex gap-4">

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
          href=""
          target="_blank"
          className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center hover:border-orange-400 hover:text-orange-400 transition"
        >
          <HiDocumentText size={28} />
        </a>

      </div>

    </nav>
  );
}

export default NavBar;