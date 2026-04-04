import React, { useEffect, useState } from "react";
import "./Portfolio.css";

const slides = [
  {
    image: "/comicpanel.jpg",
    title: "Storytelling",
    desc: "Exploring the craft of weaving epic comic book narratives" 
  },
  {
    image: "/portfolio/Manga3.jpg",
    title: "Art Style",
    desc: "Showcasing the visual styles that bring comics to life"
  },
  {
    image: "/img2.jpg",
    title: "Character Design",
    desc: "Diving into the creation of memorable and dynamic characters"
  },
   {
    image: "/portfolio/Manga2.jpg",
    title: "Portfolio",
    desc: "A showcase of our best comic illustration work"
  }
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mp-section">
      <h2 className="mp-header">Portfolio</h2>

      <div className="mp-slider">

        <button className="mp-arrow left" onClick={prevSlide}>❮</button>

        <div className="mp-slide-wrapper">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`mp-slide ${i === index ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />

              <div className="mp-caption">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mp-arrow right" onClick={nextSlide}>❯</button>

      </div>
   
      <div className="mp-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
       <div className="endsect">
          <p>
             <span><a href="/portfolio">
   View Portfolio</a></span>
</p>
</div>
    </section>
  );
}