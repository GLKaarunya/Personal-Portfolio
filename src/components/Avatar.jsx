import avatar from "../assets/avatar.jpeg";

function Avatar() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[320px] h-[320px] rounded-full overflow-hidden border-2 border-zinc-700 shadow-2xl hover:scale-105 hover:border-green-400 transition duration-300">
        <img src={avatar} alt="GL Kaarunya" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Avatar;