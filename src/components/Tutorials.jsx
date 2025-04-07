// src/pages/Tutorials.jsx
import Header from "./Header";
import Footer from "./Footer";
import TutorialCard from "./TutorialCard";
import "../styles/tutorials.css"; // optional, reuse your existing styles

export default function Tutorials() {
  return (
    <>
      <Header />

      <main id="tutorials-content">
        <section className="tutorials-hero">
          <div className="container">
            <h1>Sign Language Tutorials</h1>
            <p>Browse our collection of age-appropriate sign language lessons</p>
          </div>
        </section>

        <section className="tutorial-filters">
          <div className="container">
            <div className="filter-container">
              <div className="filter-group">
                <label htmlFor="age-filter">Age Group:</label>
                <select id="age-filter">
                  <option value="all">All Ages</option>
                  <option value="0-5">Ages 2-5</option>
                  <option value="6-10">Ages 6-10</option>
                  <option value="11-15">Ages 11-15</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="category-filter">Category:</label>
                <select id="category-filter">
                  <option value="all">All Categories</option>
                  <option value="alphabet">Alphabet</option>
                  <option value="numbers">Numbers</option>
                  <option value="family">Family</option>
                  <option value="emotions">Emotions</option>
                  <option value="food">Food</option>
                  <option value="animals">Animals</option>
                  <option value="daily">Daily Activities</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="difficulty-filter">Difficulty:</label>
                <select id="difficulty-filter">
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button id="apply-filters-btn" className="btn primary-btn">Apply Filters</button>
            </div>
          </div>
        </section>

        <section className="tutorial-list">
          <div className="container">
            <div className="tutorials-grid">
              <TutorialCard
                thumbnail="/assets/imgs/tutorialbasic.jpg"
                title="Basics"
                description="Learn the foundational hand signs for the alphabet"
                age="Ages 2-5"
                level="Beginner"
                time="15 minutes"
                videos="3"
                link="/tutorials/basics"
              />
              <TutorialCard
                thumbnail="/assets/imgs/tutorialfamily.jpg"
                title="Family Signs"
                description="Learn how to sign family members and relationships"
                age="Ages 6-10"
                level="Beginner"
                time="4 minutes"
                videos="1"
                link="/tutorials/family-signs"
              />
              <TutorialCard
                thumbnail="/assets/imgs/tutorialemotions.jpg"
                title="Emotions and Expressions"
                description="Learn how to communicate feelings and emotions"
                age="Ages 11-15"
                level="Intermediate"
                time="5 minutes"
                videos="1"
                link="/tutorials/emotions-expressions"
              />
            </div>

            <div className="pagination">
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn next">Next</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
