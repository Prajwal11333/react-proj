import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";


export default function BasicsTutorial() {
  const [video, setVideo] = useState({
    video: "",
    title: "",
  });

  const [dropdowns, setDropdowns] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleVideoLoad = async (videoId) => {
    try {
      const res = await fetch(`/tutorials/basics/${videoId}`);
      const data = await res.json();
      setVideo(data.videos);
    } catch (err) {
      console.error("Failed to load video", err);
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        {video.video && <VideoPlayer videoSrc={video.video} title={video.title} />}

        <div className="basic">
          <div className="section-1" onClick={() => toggleDropdown("section1")}>
            <h2 className="h2">Section 1</h2>
          </div>
          {dropdowns.section1 && (
            <div className="clicksection1 Introduction">
              <ul className="Introdropdown1" style={{ listStyle: "none" }}>
                <li className="common" onClick={() => handleVideoLoad("001")}>
                  <input type="checkbox" />
                  <span>Introduction</span>
                </li>
              </ul>
            </div>
          )}

          <div className="section-2" onClick={() => toggleDropdown("section2")}>
            <h2 className="h2">Section 2 - Numbers</h2>
          </div>
          {dropdowns.section2 && (
            <div className="clicksection2">
              <ul className="Introdropdown2" style={{ listStyle: "none" }}>
                <li className="common" onClick={() => handleVideoLoad("002")}>
                  <input type="checkbox" />
                  <span>Numbers-1</span>
                </li>
                <li className="common">
                  <input type="checkbox" />
                  <span>Numbers-2</span>
                </li>
                <li className="common">
                  <input type="checkbox" />
                  <span>Numbers-3</span>
                </li>
              </ul>
            </div>
          )}

          <div className="section-3" onClick={() => toggleDropdown("section3")}>
            <h2 className="h2">Section 3 - Alphabets</h2>
          </div>
          {dropdowns.section3 && (
            <div className="clicksection3">
              <ul className="Introdropdown3" style={{ listStyle: "none" }}>
                <li className="common" onClick={() => handleVideoLoad("003")}>
                  <input type="checkbox" />
                  <span>Alphabets-1</span>
                </li>
                <li className="common">
                  <input type="checkbox" />
                  <span>Alphabets-2</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="video-actions">
          <a href="/tutorials/quiz/basics" className="btn primary-btn">
            Take Quiz
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
