import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const skillGroups = [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Python"],
    },
    {
      category: "GenAI & LLM",
      skills: ["OpenAI", "LangChain", "Hugging Face", "RAG", "Pinecone", "Faiss"],
    },
    {
      category: "Frontend",
      skills: ["Angular", "React"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "NestJS", "Express.js", "FastAPI"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (Lambda, S3, Cognito, ECS, SQS, SNS)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
    },
    {
      category: "Testing & Tools",
      skills: ["Jest", "Jasmine", "Git", "Postman", "Swagger", "CI/CD"],
    },
  ];

  return (
    <section
      id="skills"
      className="container py-16 font-sans text-slate-300 bg-background"
    >
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        data-aos="fade-up"
      >
        Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-4 text-center">
              {group.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={400 + i * 50}
                  className="bg-slate-900 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500 hover:text-white hover:shadow-[0_0_10px_rgba(34,197,94,0.6)] transition duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
