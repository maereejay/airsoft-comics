import React, { useState } from "react";
import "./Section6.css";

const faqData = [
  {
    q: "What is comic art?",
    a: "Comic art is a form of visual storytelling that uses sequential images, panels, and text to tell a story. It includes character design, panel layouts, line art, inking, coloring, and lettering to create complete comic pages or graphic novels."
  },
  {
    q: "What does a professional comic book artist do?",
    a: "A professional comic book artist creates characters, page layouts, sequential storytelling, line art, and final illustrations. Depending on the project, this may also include inking, coloring, lettering, and visual pacing."
  },
  {
    q: "Do you create original comic art from my story?",
    a: "Yes. We create original comic art based on your script, concept, or idea. Our artists work closely with you to ensure the visuals match your story, tone, and creative vision."
  },
  {
    q: "What styles of comic art do you offer?",
    a: "We offer a wide range of comic art styles, including realistic, stylized, manga-inspired, cartoon, dark fantasy, and children’s comic styles. Style selection is guided during the creative questionnaire stage."
  },
  {
    q: "Can you help with comic storyboards and panel layouts?",
    a: "Yes. We specialize in comic storyboards, panel composition, pacing, and visual storytelling to ensure your story flows clearly and engages readers."
  },
  {
    q: "How long does it take to illustrate a comic book?",
    a: "Timelines depend on the number of pages, level of detail, and style. Initial sketches typically take 3–7 days, with full comic pages completed according to the agreed project schedule."
  },
  {
    q: "How much does comic art cost?",
    a: "Comic art pricing depends on page count, art style, complexity, and services required such as line art, coloring, and lettering. You can view full pricing details on our pricing page or email us with your project information."
  },
  {
    q: "How many revisions are included?",
    a: "Each project includes up to three revisions during the sketch and panel layout stages. Additional revisions can be requested for an extra fee."
  },
  {
    q: "Do I own the rights to the comic artwork?",
    a: "Yes. Upon final payment, you receive full usage rights to the completed comic artwork unless otherwise stated in the contract."
  },
  {
    q: "Can you illustrate graphic novels and children’s comics?",
    a: "Yes. We create comic art for graphic novels, webcomics, and children’s books, tailored to the target audience and storytelling style."
  },
  {
    q: "Do you work with clients worldwide?",
    a: "Yes. We are a global comic art agency and collaborate with clients worldwide through email, live chat, and online communication tools."
  },
  {
    q: "How do I get started?",
    a: "Simply email us with your project details. We’ll guide you through the next steps and help bring your comic to life."
  }
];

export default function Section6() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="mf-section">
      <h2 className="mf-title">FREQUENTLY ASKED QUESTIONS (FAQ)</h2>

      <div className="mf-container">
        {faqData.map((item, i) => (
          <div
            key={i}
            className={`mf-card ${openIndex === i ? "open" : ""}`}
            onClick={() => toggle(i)}
          >
            <div className="mf-question">
              <span>{item.q}</span>
              <span className="mf-arrow">▼</span>
            </div>

            <div className="mf-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}