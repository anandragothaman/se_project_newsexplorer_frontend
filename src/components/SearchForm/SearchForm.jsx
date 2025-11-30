import React from "react";
import "./SearchForm.css";

function Search() {
  return (
    <section className="search">
      <h2 className="search-title">What's going on in the world?</h2>
      <p className="search-description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Enter topic..."
        />
        <button className="search-button">Search</button>
      </div>
    </section>
  );
}
export default Search;
