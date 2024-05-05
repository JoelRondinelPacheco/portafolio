import React from "react";

function NavBar() {
  return (
    <section>
      <div className="flex flex-wrap m-4 gap-2">
        <a
        href="mailto:joel.rondinel.pacheco@gmail.com" target="_blank"
          className="text-center py-1 grow text-slate-50 text-normal md:text-xl hover:text-yellow-300 bg-stone-900 border-stone-100 rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
        >
         <h5>   Email</h5>
          
        </a>
        <a
        href="https://drive.google.com/file/d/1ZuRFhoKxLOZFHjAe0SuvtYklzl_jByXc/view?usp=sharing" target="_blank"
          className="text-center py-1 grow text-slate-50 text-normal md:text-xl hover:text-yellow-300 bg-stone-900 border-stone-100 rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
        >
         <h5>   CV</h5>
          
        </a>
      
        <a
        href="https://linkedin.com/in/joelrondinelpacheco" target="_blank"
          className="text-center py-1 grow text-slate-50 text-normal md:text-xl hover:text-yellow-300 bg-stone-900 border-stone-100 rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
        >
         <h5>Linkedin</h5>
          
        </a>
        <a
          href="https://github.com/JoelRondinelPacheco" target="_blank"
          className="text-center py-1 grow text-slate-50 text-normal md:text-xl hover:text-yellow-300 bg-stone-900 border-stone-100 rounded-lg hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
        >
         <h5>GitHub</h5>
          
        </a>
  
      </div>
    </section>
  );
}

export default NavBar;
