// components/About.tsx

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="shrink-0">
          <Image
            src="/me.jpg"
            alt="Ganesan P"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-sm"
            priority
          />
        </div>

        <div className="text-lg text-center md:text-left dark:text-gray-300">
          <p className="mb-4">
            Hey there! I&apos;m <span className="font-semibold">Ganesan P</span>, a curious and motivated web developer based in Tamil Nadu, India. I love building intuitive and accessible web applications, and I thrive in environments that encourage creativity, innovation, and collaboration.
          </p>
          <p className="mb-4">
            I&apos;m currently pursuing a Bachelor&apos;s degree in Computer Science and Engineering. Over the years, I&apos;ve built a strong foundation in languages like <strong>Python</strong>, <strong>Java</strong>, and <strong>JavaScript</strong>, and have hands-on experience with tools and frameworks like <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Flask</strong>, and <strong>Flutter</strong>.
          </p>
          <p className="mb-4">
            My portfolio includes everything from cryptography-based CTF challenges to sustainable tech like <strong>GreenWay Navigator</strong>—an AI-powered tool promoting eco-friendly travel. I&apos;m particularly passionate about solving real-world problems through thoughtful design and clean code.
          </p>
          <p>
            Beyond development, I enjoy taking online courses, gardening, and exploring new technologies. I’m always looking to grow, contribute to open source, and build meaningful digital experiences that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
