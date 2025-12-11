import { React, useState } from "react";
import "./SearchForm.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) return;
    onSearch(query);
  };
  return (
    <section className="search">
      <h2 className="search-title">What's going on in the world?</h2>
      <p className="search-description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Enter topic..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="search-button">Search</button>
      </form>
    </section>
  );
}
export default Search;
