import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "your_service_id",      // 🔁 Replace with your EmailJS Service ID
        "your_template_id",     // 🔁 Replace with your EmailJS Template ID
        form.current,
        "your_public_key"       // 🔁 Replace with your Public Key
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.error("Email failed:", error);
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 bg-background text-slate-100 font-sans"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          data-aos="fade-up"
        >
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div className="space-y-6 text-slate-300" data-aos="fade-right">
            <p className="text-lg leading-relaxed">
              Whether you want to build something amazing, explore GenAI use cases,
              or just say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-emerald-400 text-xl" />
                <span>HSR Layout, Bengaluru</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-400 text-xl" />
                <a href="mailto:sundar.ai@outlook.com" className="hover:underline">
                  sundar.ai@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-400 text-xl" />
                <a href="tel:+919585229909" className="hover:underline">
                  +91 95852 29909
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            data-aos="fade-left"
            className="bg-slate-800 p-6 rounded-xl space-y-5 shadow-lg border border-slate-700"
            onSubmit={sendEmail}
          >
            <div>
              <label className="block text-sm mb-1 text-slate-400">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-400">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-400">Message</label>
              <textarea
                rows="4"
                name="message"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-emerald-500 text-black py-2 rounded hover:bg-emerald-600 transition"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-400 text-sm text-center mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
