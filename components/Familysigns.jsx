import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import "../styles/style2.css";

export default function FamilySigns() {
  const [videoData, setVideoData] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = async (videoId) => {
    try {
      const res = await fetch(`/tutorials/family-signs/${videoId}`);
      const data = await res.json();
      setVideoData(data.videos);
    } catch (err) {
      console.error("Error loading video:", err);
    }
  };

  return (
    <>
      <Header />

      <div className="main">
        {videoData && (
          <VideoPlayer video={videoData.video} title={videoData.title} />
        )}

        <div className="basic">
          <div className="section-1" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <h2 className="h2">Section 1 - Family Signs</h2>
          </div>

          {dropdownOpen && (
            <div className="clicksection1">
              <ul className="Introdropdown1" style={{ listStyle: "none" }}>
                <li className="common">
                  <input type="checkbox" />
                  <span onClick={() => handleClick("004")}>Family Signs</span>
                </li>
                <li className="common">
                  <input type="checkbox" />
                  <span>Quizzes</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
