// src/pages/Emotions.jsx
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/style2.css"; // Optional: same as your /css/style2.css

export default function Emotions() {
  const [videoData, setVideoData] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState({
    section1: false,
  });

  const fetchVideo = async (videoId) => {
    try {
      const res = await fetch(`/tutorials/emotions-expressions/${videoId}`);
      const data = await res.json();
      setVideoData(data.videos);
    } catch (err) {
      console.error("Error loading video:", err);
    }
  };

  useEffect(() => {
    // Optional: Load default video on mount
    fetchVideo("005");
  }, []);

  return (
    <>
      <Header />

      <div className="main">
        {videoData && (
          <div className="anchor">
            <video width="800" height="480" controls>
              <source src={videoData.video} type="video/mp4" />
            </video>
            <h2>{videoData.title}</h2>
          </div>
        )}

        <div className="basic">
          <div
            className="section-1"
            onClick={() =>
              setDropdownVisible((prev) => ({
                ...prev,
                section1: !prev.section1,
              }))
            }
          >
            <h2 className="h2">Emotions and Expressions</h2>
          </div>

          {dropdownVisible.section1 && (
            <div className="clicksection1">
              <ul className="Introdropdown1" type="none">
                <li
                  className="common"
                  onClick={() => fetchVideo("005")}
                >
                  <input type="checkbox" />
                  <span>Emotions Introduction-1</span>
                </li>
                <li className="common" onClick={() => fetchVideo("006")}>
                  <input type="checkbox" />
                  <span>Emotions Introduction-2</span>
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
