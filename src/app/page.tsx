"use client";
import Navbar from '@/components/NavBar'
import {projects} from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from "@/components/Skills"
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ScrollAnimation from '@/components/ScrollAnimation'
import CertificationsPage from './certifications/page'
import BlogSection from "@/components/BlogSection";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-20 py-20">
        <Navbar />
        <ScrollAnimation>
             <Hero />
        </ScrollAnimation>
<ScrollAnimation>
             <About/>
      </ScrollAnimation>
        <ScrollAnimation>        
             <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Projects project={project} />
          </Link>
        ))}
      </div>
    </div>
       </ScrollAnimation>      
      <ScrollAnimation>
            <Skills />
       </ScrollAnimation>
       <ScrollAnimation>
       <section className="py-2 px-6" id="blog">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
<BlogSection />
    </section>
</ScrollAnimation>         
   <ScrollAnimation>
         <CertificationsPage/>
    </ScrollAnimation>   
     <ScrollAnimation>
            <Contact />
      </ScrollAnimation>
      <ScrollAnimation>
        <Footer />
        </ScrollAnimation>      
      </main>
    </>
  )
}
