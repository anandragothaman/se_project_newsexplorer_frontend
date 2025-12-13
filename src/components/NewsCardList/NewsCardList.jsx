import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
function NewsCardList({ articles, isSavedPage, isLogin, onSave, onDelete }) {
  return (
    <section className="news-card__container">
      {articles.map((article) => (
        <NewsCard
          id={isSavedPage ? article._id : article.url}
          article={article}
          isSavedPage={isSavedPage}
          isLogin={isLogin}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}
export default NewsCardList;
