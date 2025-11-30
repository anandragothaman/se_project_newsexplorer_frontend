import { useState } from "react";
import "./App.css";

//component imports
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main>
          {/* <Preloader /> */}
          <NewsCard />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
