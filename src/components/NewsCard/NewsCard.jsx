import "./NewsCard.css";
function NewsCard({
  article,
  isLoginVisible,
  onSave,
  isSaved,
  onDelete,
  isSavedPage,
}) {
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
      <div className="news-card__list">
        <div className="news-card__image-placeholder">
          {isSavedPage && (
            <span className="news-card__keyword">{article.keyword}</span>
          )}

          <a href={article.url} target="_blank" className="news-card__link">
            <img className="news-card__image" src={article.urlToImage} />{" "}
          </a>
          <div className="news-card__bookmark-wrapper">
            {!isSavedPage ? (
              <button
                className={`news-card__bookmark ${
                  isSaved ? "news-card__bookmark-active" : ""
                }`}
                onClick={() => onSave(article)}
              ></button>
            ) : (
              <button
                className="news-card__delete-bookmark"
                onClick={() => onDelete(article._id)}
              ></button>
            )}
            {isLoginVisible && (
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

        <a href={article.url} target="_blank" className="news-card__link">
          <div className="news-card__content">
            <p className="news-card__date">{formatDate(article.publishedAt)}</p>
            <h2 className="news-card__title">{article.title}</h2>
            <p className="news-card__description">{article.description}</p>
            <p className="news-card__source">{article.author}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
export default NewsCard;
