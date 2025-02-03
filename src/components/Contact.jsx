import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionWrap from "./SectionWrap";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 800, once: true, startEvent: "DOMContentLoaded" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Zuhair_Ahmed_Hassan", "template_wiqymzf", form.current, {
        publicKey: "mKOhyIqR3YWS2l_Ow",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <SectionWrap
        id="contact"
        title={"Contact"}
        text={"Please fill out the form below to get in touch with me."}
      >
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message"
            required
          />
          <button type="submit" className="contactBtn">
            Submit
          </button>
        </form>
      </SectionWrap>
    </>
  );
}
