export function formatKeywords(savedArticles) {
  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword).filter(Boolean)),
  ];

  if (keywords.length === 0) return "";

  if (keywords.length === 1) {
    return keywords[0];
  }

  if (keywords.length === 2) {
    return `${keywords[0]} and ${keywords[1]}`;
  }

  return `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other`;
}
