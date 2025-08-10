import { useRef, useEffect } from "react";
import { Send, Mail, MessageCircle, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionWrap from "./SectionWrap";

export default function Contact() {
  const form = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 800, once: true, startEvent: "DOMContentLoaded" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("Zuhair_Ahmed_Hassan", "template_wiqymzf", form.current, {
          publicKey: "mKOhyIqR3YWS2l_Ow",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            // Reset form after successful submission
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <SectionWrap
      id="contact"
      title="Get In Touch"
      text="Ready to bring your ideas to life? I'd love to hear from you. Send me a message and let's start creating something amazing together."
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-2xl mx-auto">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          data-aos="fade-up"
        >
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="group w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600  text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </SectionWrap>
  );
}
