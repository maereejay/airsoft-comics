import React from "react";
import './Aboutus.css';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
   
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
    <div className="about-us-page font-manga">
     

        <Helmet>
              <title>About Us | Premier Comic Book Artists
</title>
              <meta
                name="description"
                content="We are the premier comic book artists, helping creators bring powerful stories to life with
dynamic, high-quality artwork that captivates readers from the very first panel.
"
              />
            </Helmet>

      {/* About Section */}
      <section className="about-section max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed">
          AirSoft Studios is a creative studio of multifaceted comic book artists
          dedicated to helping storytellers bring their worlds to life through
          striking, immersive visuals. We specialize in crafting high-quality
          comic book art that captures emotion, movement, and atmosphere,
          drawing readers in from the very first panel.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Every illustration we create is more than just artwork; it’s a visual
          narrative that shapes the tone, builds the universe, and sets the
          stage for the story that unfolds.
        </p>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Our Capabilities</h2>
        <p className="text-lg leading-relaxed">
          At AirSoft Comics, comic art isn’t just illustration, it’s visual
          storytelling that commands attention. From the first panel to the
          final page, we create dynamic artwork that pulls readers into your
          world.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          With years of experience and global recognition, we blend cinematic
          composition, character design, and storytelling psychology to craft
          comic art that stands out in print and online.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Work with world-class comic artists who understand action, emotion,
          pacing, and what makes readers turn the page.
        </p>
        <div className="capabilities-links mt-6 flex gap-6">
          <a href="/portfolio" className="text-blue-500 hover:underline">
            Explore our portfolio
          </a>
          <a href="/pricing" className="text-blue-500 hover:underline">
            View our pricing
          </a>
          <button onClick={goToContactform} className="text-blue-500 hover:underline">
            Contact us and let’s bring your story to life
          </button>
        </div>
      </section>

      {/* Our Creators */}
      <section className="creators-section max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6">Our Creators</h2>
        <p className="text-lg leading-relaxed">
          When you partner with AirSoft Studios, you collaborate with a team of
          comic artists who blend imagination, cinematic storytelling, and
          dynamic illustration to make your story stand out. We’ve worked with
          creators across genres, styles, and platforms, always committed to
          delivering artwork that leaves a lasting impact from the very first
          panel.
        </p>

        <h3 className="text-2xl font-medium mt-8 mb-4">By the Numbers</h3>
        <ul>
  <li data-number="85%"><span>of creators report stronger reader engagement after release</span></li>
  <li data-number="70%"><span>of our projects gain recognition in major comic communities</span></li>
  <li data-number="9/10"><span>creators recommend us to others</span></li>
  <li data-number="60%"><span>return for sequels or new series</span></li>
  <li data-number="100+"><span>immersive worlds brought to life through powerful comic art</span></li>
  <li data-number="15+"><span>countries where creators trust us</span></li>
</ul>
        <p className="mt-4 text-lg">
          With AirSoft Studios, your story doesn’t just get illustrated — it
          gains a visual advantage.
        </p>
      </section>

      {/* Excellence */}
      <section className="excellence-section bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Our Excellence</h2>
        <p className="text-lg leading-relaxed">
          Our comic artistry has earned recognition within the creative
          industry, reflecting our commitment to delivering dynamic,
          story-driven artwork that elevates every project.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          6 featured comic illustrations (separate from portfolio work)
        </p>
      </section>

      {/* Values */}
      <section className="values-section max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li> <span>Excellence:</span> Every story deserves bold, cinematic artwork that captures attention from the first panel.</li>
          <li><span>Ambition:</span> We push creative boundaries to help your comic stand out in a competitive market.</li>
          <li><span>Courage:</span> Powerful stories deserve daring visuals that leave a lasting impact.</li>
          <li><span>Inclusion:</span> We celebrate diverse voices and create worlds that resonate with broad audiences.</li>
          <li><span>Innovation:</span> We blend timeless illustration with modern storytelling and visual strategy.</li>
          <li><span>One Team, One Vision:</span> We work closely with creators to transform ideas into immersive comic experiences.</li>
        </ul>
        <p className="mt-4 text-lg">
          With AirSoft Comics, your story isn’t just illustrated, it’s brought vividly to life.
        </p>
      </section>

      {/* Studio History */}
      <section className="history-section bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-semibold mb-6">Our Studio’s History</h2>
       
        <div className="studio-hist-container">
        <div className="stdhistImg"></div>
        <div className="paragraphs">
        <p className="text-lg leading-relaxed">
          Founded in 2020, AirSoft Studios began with a clear mission: to help
          storytellers captivate audiences through powerful visual art. What
          started as a small creative team quickly grew into a trusted name in
          comic and visual storytelling.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          As the industry evolved, so did we blending cinematic illustration,
          market awareness, and storytelling psychology to create artwork that
          doesn’t just look impressive, but connects deeply with readers.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Today, we proudly serve creators worldwide, delivering dynamic comic
          art that captivates, competes, and leaves a lasting impact.
        </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;