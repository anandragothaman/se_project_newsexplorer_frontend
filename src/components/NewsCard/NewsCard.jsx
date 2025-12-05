import "./NewsCard.css";
function NewsCard() {
  return (
    <section className="news-card-section">
      <h2 className="news-card-section-title">Search Results</h2>
      <section className="news-card">
        <div className="news-card__list">
          <div className="news-card__image-placeholder">
            <img
              className="news-card__image"
              src="../../src/assets/card_image1.svg"
            />{" "}
            <span className="news-card__bookmark"></span>
          </div>
          <div className="news-card__content">
            <p className="news-card__date">October 20, 2023</p>
            <h2 className="news-card__title">Sample News Article Title</h2>
            <p className="news-card__description">
              This is a brief description of the news article. It provides an
              overview of the content to entice readers to click and read more.
            </p>
            <p className="news-card__source">Source Name</p>
          </div>
        </div>
        <div className="news-card__list">
          <div className="news-card__image-placeholder">
            <img
              className="news-card__image"
              src="../../src/assets/card_image1.svg"
            />{" "}
            <span className="news-card__bookmark"></span>
          </div>
          <div className="news-card__content">
            <p className="news-card__date">October 20, 2023</p>
            <h2 className="news-card__title">Sample News Article Title</h2>
            <p className="news-card__description">
              This is a brief description of the news article. It provides an
              overview of the content to entice readers to click and read more.
            </p>
            <p className="news-card__source">Source Name</p>
          </div>
        </div>
        <div className="news-card__list">
          <div className="news-card__image-placeholder">
            <img
              className="news-card__image"
              src="../../src/assets/card_image1.svg"
            />{" "}
            <span className="news-card__bookmark"></span>
          </div>
          <div className="news-card__content">
            <p className="news-card__date">October 20, 2023</p>
            <h2 className="news-card__title">Sample News Article Title</h2>
            <p className="news-card__description">
              This is a brief description of the news article. It provides an
              overview of the content to entice readers to click and read more.
            </p>
            <p className="news-card__source">Source Name</p>
          </div>
        </div>
      </section>
      <button className="news-card__save-button">Show more</button>
    </section>
  );
}
export default NewsCard;
