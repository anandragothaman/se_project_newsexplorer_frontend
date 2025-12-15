import "./About.css";
import profileImg from "../../assets/profile.jpeg";
function About() {
  return (
    <section className="author">
      <div className="author__avatar">
        <img
          className="author__avatar-image"
          alt="Author Avatar"
          src={profileImg}
        />
      </div>
      <div className="author__info">
        <h2 className="author__title">About the Author</h2>
        <div className="author__bio">
          <p className="author__description">
            I am Anand Ragothaman, a Full Stack Developer specializing in
            building responsive, user-friendly web applications using modern web
            technologies such as HTML, CSS, Typescript, React, Node.js, and
            MongoDB.
          </p>
          <p className="author__description">
            Through TripleTen, I developed strong foundations in modern
            front-end practices and real-world project development. I enjoy
            creating clean, intuitive interfaces and continuously improving my
            skills to deliver high-quality user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
