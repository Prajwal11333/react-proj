// HomePage.jsx
import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      
      <main id="home-content">
        <HeroSection />
        <FeaturesSection />
        <AgeGroupsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to EduSign</h1>
        <p>Making sign language education accessible for children ages 2-15</p>
        <div className="hero-buttons">
          <a href="/tutorials" className="btn primary-btn">Start Learning</a>
          <a href="/aboutus" className="btn secondary-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      id: "feature-interactive",
      icon: "👋",
      title: "Interactive Learning",
      description: "Engaging activities designed specifically for children"
    },
    {
      id: "feature-personalized",
      icon: "👤",
      title: "Personalized Progress",
      description: "Track learning journey with customized dashboards"
    },
    {
      id: "feature-community",
      icon: "👨‍👩‍👧‍👦",
      title: "Supportive Community",
      description: "Connect with other families and educators"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose EduSign?</h2>
        <div className="feature-cards">
          {features.map((feature) => (
            <div className="feature-card" id={feature.id} key={feature.id}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Age Groups Section Component
const AgeGroupsSection = () => {
  const ageGroups = [
    {
      id: "age-0-5",
      title: "Ages 2-5",
      description: "Foundational sign language through play and images",
      link: "/tutorials?age=0-5"
    },
    {
      id: "age-6-10",
      title: "Ages 6-10",
      description: "Building vocabulary and simple conversations",
      link: "/tutorials?age=6-10"
    },
    {
      id: "age-11-15",
      title: "Ages 11-15",
      description: "Advanced concepts and everyday communication",
      link: "/tutorials?age=11-15"
    }
  ];

  return (
    <section className="age-groups">
      <div className="container">
        <h2>Learning Paths by Age</h2>
        <div className="age-group-cards">
          {ageGroups.map((ageGroup) => (
            <div className="age-card" id={ageGroup.id} key={ageGroup.id}>
              <h3>{ageGroup.title}</h3>
              <p>{ageGroup.description}</p>
              <a href={ageGroup.link} className="age-link">Explore</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "EduSign has transformed how my child engages with language learning.",
      author: "Parent of a 7-year-old"
    },
    {
      quote: "The interactive lessons keep my kids engaged while they learn valuable skills.",
      author: "Parent of twins, age 10"
    },
    {
      quote: "As an educator, I appreciate the structured approach and quality resources.",
      author: "Special Education Teacher"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Families Say</h2>
        <div className="testimonial-slider" id="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-author">- {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CtaSection = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Start?</h2>
        <p>Join thousands of families empowering their children through sign language</p>
        <a href="/login" className="btn primary-btn" id="home-signup-btn">Create Free Account</a>
      </div>
    </section>
  );
};

export default HomePage;