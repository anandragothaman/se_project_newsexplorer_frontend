import "./ArticleDetails.css";
function ArticleDetails({ articleCount, userName }) {
  return (
    <div className="header__article-details">
      <h2 className="header__article-details__title">Saved articles</h2>
      <p className="header__article-details__saved-count">
        {userName}, you have {articleCount} saved articles
      </p>
      <p className="header__article-details__keywords">
        By keywords:{" "}
        <span className="header__article-details__category">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </div>
  );
}
export default ArticleDetails;
