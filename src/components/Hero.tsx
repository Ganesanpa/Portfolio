

import Link from "next/link";

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      
   
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
  Hello, I&apos;m <span className="text-blue-600">Ganesan</span>
</h1>
<h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
  Full Stack Developer crafting clean, scalable web apps
</h2>


     
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <a
            href="/Ganesan.P_CV.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Resume
          </a>
          
        </div>
      </div>


      <div className="md:w-1/2 flex justify-center">
        <img
          src="/me.jpg"
          alt="Ganesan Profile" 
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-600 shadow-xl"
        />
      </div>
    </section>
  );
}
