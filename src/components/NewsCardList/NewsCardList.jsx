import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
function NewsCardList({
  articles,
  isSavedPage,
  visibleCount,
  setVisibleCount,
  searchArticles,
  savedArticles = [],
  isLoginVisible,
  onSave,
  onDelete,
}) {
  return (
    <>
      <section className="news-card__container">
        {articles.map((article) => {
          const isSaved =
            !isSavedPage &&
            savedArticles.some((saved) => saved.url === article.url);
          const key = isSavedPage ? article._id : article.url;
          return (
            <NewsCard
              key={key}
              article={article}
              isSavedPage={isSavedPage}
              isSaved={isSaved}
              isLoginVisible={isLoginVisible}
              onSave={onSave}
              onDelete={onDelete}
            />
          );
        })}
      </section>
      {!isSavedPage && visibleCount < searchArticles.length && (
        <button
          className="news-card__save-button"
          onClick={() => setVisibleCount((prev) => prev + 3)}
        >
          Show more
        </button>
      )}
    </>
  );
}
export default NewsCardList;
