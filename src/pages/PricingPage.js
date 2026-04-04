import "./PricingPage.css";
import { useNavigate } from "react-router-dom";

export default function PricingPage() {
 
const navigate = useNavigate();

const goToContactform = () => {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById("contactform");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};
  return (
    <div className="pricingPage">

      {/* HERO */}
      <section className="pricingHero">
        <h1>Comic Book Pricing</h1>
        <p>
          Different styles take different levels of effort. 
          <ul>
          <li>Simple / cartoon</li>
          <li>Western comic style</li>   
          <li>Manga / anime</li> 
          <li>Highly detailed realism</li>
          <li>Painted or semi-realistic covers </li>



</ul>
 Choose the style that fits your story’s energy and visual ambition.
        </p>
      </section>

      {/* PRICING GRID */}
      <section className="pricingGrid">

        <div className="priceCard simple">
          <h2>Simple / Cartoon</h2>
          <div className="price">$65 <span>per page</span></div>
          <ul>
            <li>Clean lines</li>
            <li>Minimal shading</li>
            <li>Exaggerated expressions</li>
            <li>Simple backgrounds</li>
            <li>Quick to produce</li>
          </ul>
        </div>

        <div className="priceCard manga popular">
          <div className="badge">Most Popular</div>
          <h2>Manga / Anime</h2>
          <div className="price">$125 <span>per page</span></div>
          <ul>
            <li>Dynamic poses</li>
            <li>Moderate detail</li>
            <li>Classic panel layouts</li>
            <li>Inked outlines</li>
            <li>Action / adventure focus</li>
          </ul>
        </div>

        <div className="priceCard western">
          <h2>Western Comic Style</h2>
          <div className="price">$125 <span>per page</span></div>
          <ul>
            <li>Expressive faces</li>
            <li>Clean linework</li>
            <li>Dramatic panels</li>
            <li>Stylized anatomy</li>
          </ul>
        </div>

        <div className="priceCard semi">
          <h2>Semi-Realistic Covers</h2>
          <div className="price">$145 <span>per page</span></div>
          <ul>
            <li>Accurate anatomy</li>
            <li>Complex backgrounds</li>
            <li>Detailed lighting</li>
            <li>Textures and props</li>
            <li>Slower production</li>
          </ul>
        </div>

        <div className="priceCard realism">
          <h2>Realistic Covers</h2>
          <div className="price">$245 <span>per page</span></div>
          <ul>
            <li>Painterly coloring</li>
            <li>Detailed characters</li>
            <li>Dramatic lighting</li>
            <li>Full-page impact</li>
            <li>Cover-quality visuals</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <section className="pricingCTA">
        <h2>Ready to Bring Your Story to Life?</h2>
        <button onClick={goToContactform}>Start Your Project</button>
      </section>

    </div>
  );
}