import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "MedLLaMA Chatbot",
      description:
        "A medical domain chatbot fine-tuned using TinyLLaMA and PubMedQA. FastAPI backend with RAG support, React frontend, and MongoDB integration.",
      tech: ["TinyLLaMA", "FastAPI", "MongoDB", "React", "LoRA", "PubMedQA"],
      github: "https://github.com/SundarKalidass/medllama",
    },
    {
      title: "LegalBot – LLM PoC",
      description:
        "An Indian legal assistant using Phi-2 fine-tuned with QLoRA on legal documents. Built with NestJS, React, and MongoDB to answer contextual legal queries.",
      tech: ["Phi-2", "QLoRA", "NestJS", "React", "MongoDB"],
      github: "https://github.com/SundarKalidass/LegalBot-LLM-PoC",
    },
    {
      title: "CloudOps GenAI Assistant (In Progress)",
      description:
        "Currently building a GenAI assistant that explains infrastructure drift, predicts costs (via Infracost), and suggests Terraform remediations using LangChain + OpenAI. Terminal + Web UI in progress.",
      tech: ["Terraform", "LangChain", "OpenAI", "Infracost", "AWS"],
      github: "https://github.com/SundarKalidass/CloudOps-GenAI-Assistant-In-Progress-",
    },
    {
      title: "MetaLLM Pipeline (Experimental)",
      description:
        "Exploring multi-LLM inference and benchmarking using custom evaluation loops with LangChain, Triton, and Hugging Face models.",
      tech: ["LangChain", "Triton", "Hugging Face", "Multi-LLM"],
      github: "https://github.com/SundarKalidass",
    },
  ];

  return (
    <section id="projects" className="container py-16 font-sans text-slate-300">
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        data-aos="fade-up"
      >
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] border border-slate-700 p-6 rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-emerald-400">
                {project.title}
              </h3>
              {project.title.toLowerCase().includes("progress") && (
                <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded">
                  WIP
                </span>
              )}
            </div>

            <p className="text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-slate-800 border border-emerald-500 text-emerald-300 rounded-full hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-400 underline hover:text-white transition"
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
