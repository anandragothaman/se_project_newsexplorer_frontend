import "./NoData.css";
function NoData() {
  return (
    <section className="no-data">
      <img
        src="../../src/assets/not-found.svg"
        alt="no results"
        className="no-data__image"
      />
      <h2 className="no-data__title">Nothing found</h2>
      <p className="no-data__subtitle">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}
export default NoData;
