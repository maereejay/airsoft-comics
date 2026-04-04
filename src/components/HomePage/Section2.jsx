import { useRef, useState } from "react";
import './Section2.css'
export default function Section2() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

  };


  return (
    <div className='section2'>
      <div className="s2aboutus">
        <div className="s2aboutusText">
      <h1>About Us</h1>
      <h3>We’re a global comic art agency</h3>
      <p>We represent award-winning, internationally recognized comic artists known for culturally rich,
emotionally engaging storytelling. Specializing in storyboards, sequential art, line art, inking, and
visual narrative design, our artists create compelling comic visuals that connect stories and
audiences worldwide.</p>
<a href="/about">Learn more</a>
</div>
<div className="s2aboutusVid" >
  <div>  <video
    src="/video/aboutUsVid.mp4"
    ref={videoRef}
    autoPlay
    muted
    loop
    controls
    className="s2video"
    
  />
   {isMuted && (
        <div className="videoOverlay"  onClick={handleToggleSound}>
          Tap for sound 🔊
        </div>
      )}
  </div>
  
</div>
</div>
<div className="s2imgContainer">
  <img src="" alt="" />
  <img src="" alt="" />
</div>
    </div>
  )
}
