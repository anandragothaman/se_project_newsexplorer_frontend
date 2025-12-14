import "./ArticleDetails.css";
import { formatKeywords } from "../../utils/formatKeywords";
function ArticleDetails({ savedArticles, articleCount, userName }) {
  const keywordText = formatKeywords(savedArticles);
  return (
    <div className="header__article-details">
      <h2 className="header__article-details__title">Saved articles</h2>
      <p className="header__article-details__saved-count">
        {userName}, you have {articleCount} saved articles
      </p>
      <p className="header__article-details__keywords">
        By keywords:{" "}
        <span className="header__article-details__category">{keywordText}</span>
      </p>
    </div>
  );
}
export default ArticleDetails;
