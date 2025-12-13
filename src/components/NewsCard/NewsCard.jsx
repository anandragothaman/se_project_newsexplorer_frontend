import "./NewsCard.css";
function NewsCard({ article, isLogin, onSave, onDelete, isSavedPage, id }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  }
  return (
    <section className="news-card__section">
      <div key={id} className="news-card__list">
        <div className="news-card__image-placeholder">
          <img className="news-card__image" src={article.urlToImage} />{" "}
          <div className="news-card__bookmark-wrapper">
            {!isSavedPage ? (
              <span
                className="news-card__bookmark"
                onClick={() => onSave(article)}
              ></span>
            ) : (
              <span
                className="news-card__delete-bookmark"
                onClick={() => onDelete(article._id)}
              ></span>
            )}
            {isLogin && (
              <span className="news-card__bookmark-tooltip">
                Sign in to save articles
              </span>
            )}
            {isSavedPage && (
              <span className="news-card__bookmark-tooltip">
                Remove from saved
              </span>
            )}
          </div>
        </div>
        <div className="news-card__content">
          <p className="news-card__date">{formatDate(article.publishedAt)}</p>
          <h2 className="news-card__title">{article.title}</h2>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.author}</p>
        </div>
      </div>
    </section>
  );
}
export default NewsCard;
