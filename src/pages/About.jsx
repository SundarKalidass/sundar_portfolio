import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillGroups = {
    "Languages": ["TypeScript", "JavaScript", "Python"],
    "GenAI & LLM": [
      "OpenAI", "LangChain", "Hugging Face", "Prompt Engineering", "RAG",
      "Pinecone", "Faiss", "OpenSearch"
    ],
    "Frontend": ["Angular", "React"],
    "Backend": ["Node.js", "NestJS", "FastAPI", "Express.js"],
    "Databases": ["MySQL", "MongoDB", "Redis"],
    "Cloud & DevOps": [
      "AWS", "S3", "Lambda", "Cognito", "ECS", "SQS", "SNS",
      "Docker", "Kubernetes", "Terraform"
    ],
    "Tools & Testing": ["CI/CD", "Jenkins", "Git", "Postman", "Swagger", "Jest", "Jasmine"],
  };

  return (
    <section className="container py-16 font-sans text-slate-300">
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
        data-aos="fade-up"
      >
        About Me
      </h2>

      <p
        className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Full Stack AI Developer with 3.5+ years of experience in GenAI applications, LLM fine-tuning,
        RAG pipelines, and cloud-native development. Proficient in Angular, Node.js, Python, and building
        scalable, production-grade systems on AWS.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div data-aos="fade-right" data-aos-delay="200">
          <h3 className="text-xl font-semibold text-emerald-400 mb-3">Experience</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <strong className="text-white">Backend Engineer, Dbiz.ai</strong> – Hybrid (May 2025 – Present)<br />
              Focused on Generative AI, RAG, LangChain, FastAPI, full-stack PoCs, and cloud deployments with AWS.
            </li>
            <li>
              <strong className="text-white">Software Engineer, Auriss Technologies</strong> – Remote (Jul 2022 – Mar 2025)<br />
              Built GenAI PoCs with Azure/Oracle AI, integrated AWS services, improved performance via Angular and caching.
            </li>
          </ul>
        </div>

        <div data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-xl font-semibold text-emerald-400 mb-3">Education & Certifications</h3>
          <p className="mb-2">
            <strong className="text-white">B.E. Computer Science</strong><br />
            Akshaya College of Engineering and Technology (2019 – 2022)
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>AWS Certified Developer – Associate (Nov 2024)</li>
            <li>Azure AI Engineer Associate (Jul 2025)</li>
          </ul>
        </div>
      </div>

      <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">Skills & Tech Stack</h3>
        <div className="space-y-8">
          {Object.entries(skillGroups).map(([group, skills], idx) => (
            <div key={group}>
              <h4
                className="text-lg font-medium text-white mb-2"
                data-aos="fade-right"
                data-aos-delay={300 + idx * 100}
              >
                {group}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    data-aos="zoom-in"
                    data-aos-delay={400 + i * 40}
                    className="bg-slate-800 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500 hover:bg-emerald-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
