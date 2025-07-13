import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-background text-slate-300 font-sans">
      <div className="max-w-4xl text-center">
        <p
          className="text-lg text-emerald-400 mb-2 uppercase tracking-wide"
          data-aos="fade-down"
        >
          Hello, I'm
        </p>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          data-aos="fade-up"
        >
          Sundar Kalidass
        </h1>

        <p
          className="text-sm sm:text-base text-slate-500 mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          HSR Layout, Bengaluru | sundar.ai@outlook.com | +91 9585229909
        </p>

        <p
          className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-slate-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Full Stack AI Developer with a passion for building GenAI-powered apps
          using LLM fine-tuning, RAG pipelines, and scalable cloud
          infrastructure.
        </p>

        <div
          className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a
            href="/projects"
            className="bg-emerald-500 text-black px-6 py-2 rounded hover:bg-emerald-600 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="border border-emerald-500 text-emerald-400 px-6 py-2 rounded hover:bg-emerald-500 hover:text-black transition"
          >
            Contact Me
          </a>
          <a
            href="/Sundar_Kalidass_Resume.pdf"
            download
            className="border border-emerald-500 text-emerald-400 px-6 py-2 rounded hover:bg-emerald-500 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
