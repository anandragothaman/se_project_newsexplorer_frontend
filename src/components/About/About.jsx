import React from "react";
import "./About.css";
function About() {
  return (
    <section className="author">
      <div className="author__avatar"></div>
      <div className="author__info">
        <h2 className="author__title">About the Author</h2>
        <div className="author__bio">
          <p className="author__description">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="author__description">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
