import React, { useState, useEffect, useCallback } from 'react';
import "./Section5.css";
import { FiDownload } from "react-icons/fi";

const images = [
  "/img1.JPG",
  "/img2.JPG",
  "/img3.JPG",
  "/img4WEBP.WEBP",
  "/img5.WEBP",
  "/img6.JPG"
];

export default function Gallery() {
  const [index, setIndex] = useState(null);

  const close = useCallback(() => setIndex(null), []);

  const next = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, []);

  // ESC KEY CLOSE + ARROWS
  useEffect(() => {
    const handler = (e) => {
      if (index === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, close, next, prev]);

  return (
    <>
      <section className="gallery">
        {images.map((src, i) => (
          <div className="galleryItem" key={i} onClick={() => setIndex(i)}>
            <img src={src} alt="" />
            <div className="overlay"><span>+</span></div>
          </div>
        ))}
      </section>

      {index !== null && (
        <div className="lightbox" onClick={close}>
          <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={close}>✕</button>
            <button className="arrow lefta" onClick={prev}>‹</button>
            <img src={images[index]} alt="" className="lightboxImg" />
            <button className="arrow righta" onClick={next}>›</button>
            <a href={images[index]} download className="downloadBtn">
              <FiDownload />
            </a>
          </div>
        </div>
      )}
    </>
  );
}