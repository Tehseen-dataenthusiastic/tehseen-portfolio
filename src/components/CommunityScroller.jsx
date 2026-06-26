import img1 from "../assets/community/ghar1.jpg";
import img2 from "../assets/community/ghar2.jpg";
import img3 from "../assets/community/ghar3.jpg";
import img4 from "../assets/community/ghar4.jpg";
import img5 from "../assets/community/ghar5.jpg";

import video1 from "../assets/community/volunteer1.mp4";
import video2 from "../assets/community/volunteer2.mp4";

const media = [
  { type: "image", src: img1 },
  { type: "video", src: video1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "video", src: video2 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
];

export default function CommunityScroller() {
  return (
    <section className="community-strip">
      <div className="community-track">
        {[...media, ...media].map((item, index) => (
          <div className="community-card" key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt="" loading="lazy" />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}