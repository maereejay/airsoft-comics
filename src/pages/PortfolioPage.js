import { useState, useEffect, useCallback } from "react";
import "./PortfolioPage.css";
import { Helmet } from "react-helmet";
const artworks = [
  {
    category: "Manga",
    title: "Manga",
    description: "High energy manga panel with dramatic motion lines.",
    images: [
      "/portfolio/Manga1.jpg",
      "/portfolio/Manga2.jpg",
      "/portfolio/Manga3.jpg",
    ]
  },
  {
    category: "Western",
    title: "Western",
    description: "Bold western comic style with strong inking.",
    images: [
      "/portfolio/Western1.jpg",
      "/portfolio/Western2.jpg",
      "/portfolio/Western3.jpg",
    ]
  },
  {
    category: "Cartoon",
    title: "Cartoon",
    description: "Expressive cartoon design with vibrant character focus.",
    images: [
      "/portfolio/Cartoon1.jpg",
      "/portfolio/Cartoon2.jpg",
      "/portfolio/Cartoon3.jpg",
    ]
  },
  {
    category: "Realism",
    title: "Realism",
    description: "Detailed realistic comic-style illustration.",
    images: [
      "/portfolio/Realism.png",
      "/portfolio/Realism2.jpg",
      "/portfolio/Realism3.jpg",
    ]
  },
  {
    category: "Semi Realism",
    title: "Semi Realism",
    description: "Balanced stylized realism with expressive features.",
    images: [
      "/portfolio/SemiReal1.jpg",
      "/portfolio/SemiReal2.jpg",
      "/portfolio/SemiReal3.jpg",
    ]
  }
];

const filters = ["All","Cartoon","Manga","Western","Semi Realism","Realism"];

export default function PortfolioPage(){

  const [activeFilter,setActiveFilter] = useState("All");
  const [activeWork,setActiveWork] = useState(null);
  const [imageIndex,setImageIndex] = useState(0);

  /* ========================= */
  /* FLATTEN IMAGES PER FILTER */
  /* ========================= */

  const filteredImages = activeFilter === "All"
    ? artworks.flatMap(item =>
        item.images.map((img, i) => ({
          title: item.title,
          description: item.description,
          images: item.images,
          startIndex: i
        }))
      )
    : artworks
        .filter(item => item.category === activeFilter)
        .flatMap(item =>
          item.images.map((img, i) => ({
            title: item.title,
            description: item.description,
            images: item.images,
            startIndex: i
          }))
        );

  const close = ()=> setActiveWork(null);

  const next = useCallback(() => {
  setImageIndex((prev) => (prev + 1) % activeWork.images.length);
}, [activeWork]);

const prev = useCallback(() => {
  setImageIndex((prev) => (prev - 1 + activeWork.images.length) % activeWork.images.length);
}, [activeWork]);

useEffect(() => {
  const keyHandler = (e) => {
    if (!activeWork) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  window.addEventListener("keydown", keyHandler);
  return () => window.removeEventListener("keydown", keyHandler);
}, [activeWork, next, prev]);
  return(
    <div className="portfolioPage">
      <Helmet>
            <title>Professional Comic Book Art Design
</title>
            <meta
              name="description"
              content="Elevate your story with professional comic book art that captures attention instantly. Our expert
artists create bold, dynamic, and market-ready visuals that reflect your narrative’s energy and
captivate your ideal audience.
We’re a team of multifaceted comic artists dedicated to helping creators captivate readers from
the very first panel. Our artwork doesn’t just look stunning. It commands attention, builds
worlds, and pulls readers straight into the action.
"
            />
          </Helmet>
      {/* HERO */}
      <section className="hero">
        <h1>Professional Comic Book Art </h1>
        <p>
        We’re a team of multifaceted comic artists dedicated to helping creators captivate readers from the very first panel. Our artwork doesn’t just look stunning. It commands attention, builds worlds, and pulls readers straight into the action.
        </p>
      </section>

      {/* FILTERS */}
      <div className="filters">
        {filters.map(f=>(
          <button
            key={f}
            className={activeFilter===f ? "active" : ""}
            onClick={()=>setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="grid">
        {filteredImages.map((item,index)=>(
          <div
            className="panel"
            key={index}
            onClick={()=>{
              setActiveWork({
                title: item.title,
                description: item.description,
                images: item.images
              });
              setImageIndex(item.startIndex);
            }}
          >
            <img src={item.images[item.startIndex]} alt="" />
            <div className="panelOverlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {activeWork && (
        <div className="modal" onClick={close}>
          <div className="modalContent" onClick={(e)=>e.stopPropagation()}>

            <button className="closeBtn" onClick={close}>✕</button>

          <button className="arrow left" onClick={prev}>‹</button>

            <img src={activeWork.images[imageIndex]} alt="" />

            <button className="arrow right" onClick={next}>›</button>

            <div className="description">
              <h2>{activeWork.title}</h2>
              <p>{activeWork.description}</p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}