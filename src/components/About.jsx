import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import "../styles/about.css"; // Move your inline CSS to this file

const teamMembers = [
  {
    name: "Amith K M",
    role: "AI Developer",
    image: "/assets/imgs/amith.jpeg",
    skills: ["Python", "NLP", "Computer Vision", "NumPy"],
    contribution:
      "Amith is responsible for training Machine learning models and ensuring a seamless user experience.",
  },
  {
    name: "Adarsh K R",
    role: "Backend Developer",
    image: "/assets/imgs/adarsh.jpeg",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Next.js"],
    contribution:
      "Adarsh handles the server-side logic and database management with impressive website smooth flow of website.",
  },
  {
    name: "Prajwal K",
    role: "Frontend Developer",
    image: "/assets/imgs/prajwal.jpeg",
    skills: ["HTML", "Tailwind CSS", "TypeScript", "Node.js", "React.js"],
    contribution:
      "Prajwal K designs the user interfaces and enhances dynamic fetching data which ensures the website is visually appealing and user-friendly.",
  },
  {
    name: "Chandana",
    role: "Ui/UX Developer",
    image: "/assets/imgs/chandana.jpeg",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
    contribution:
      "Chandana oversees the project, ensuring the impressive UI/UX layout with dynamic website experience creation.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-us">
        <h1>About Us</h1>
        <p>Meet the talented individuals behind our project</p>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <div className="skills">
                {member.skills.map((skill, idx) => (
                  <span key={idx}>{skill}</span>
                ))}
              </div>
              <p className="contribution">{member.contribution}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
