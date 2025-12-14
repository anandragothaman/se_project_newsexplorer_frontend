export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c81",
        author: "Ines Ferré",
        title:
          "Bitcoin price under pressure, slips below $92,000 as 'self-fulfilling prophecy' puts 4-year cycle in focus",
        description:
          "Bitcoin prices were below $92,000 on Monday, while questions mount about whether the market has already hit its cycle high.",
        url: "https://finance.yahoo.com/news/bitcoin-price-under-pressure-slips-below-92000-as-self-fulfilling-prophecy-puts-4-year-cycle-in-focus-203113535.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/AO5RBYMomqyFL4Z2L01Xmw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDcx/https://s.yimg.com/os/creatr-uploaded-images/2022-06/1701f760-eb3d-11ec-9fcd-fda7580ab069",
        publishedAt: "2025-11-17T20:31:13Z",
        keyword: "Bitcoin",
        content:
          "Bitcoin (BTC-USD) remained under pressure on Monday, falling below $92,000 and bringing its losses from record highs in October to more than 26%. The drop is prompting questions about whether this re… [+2621 chars]",
      },
      {
        _id: "65f7368dfb74bd6a92114c82",
        author: "Pedro Solimano",
        title:
          "Bitcoin to $500,000? Here’s when to expect the price to hit the new record",
        description:
          "Standard Chartered pushed its $500,000 Bitcoin target to 2030 from 2028. The bank says digital asset treasury buying is over and won't support prices anymore...",
        url: "https://www.dlnews.com/articles/markets/the-reasons-why-bitcoin-will-hit-500000-two-years-later/",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/nP9MWAAvs3DIXxV21.KpDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03ODU-/https://media.zenfs.com/en/dlnews_702/3f51b1ead998dbc95e132525f61aecef",
        publishedAt: "2025-12-09T16:45:45Z",
        keyword: "Bitcoin",
        content:
          "Standard Chartered just delayed its $500,000 Bitcoin price target by two years.\r\nThe UK-based bank now expects Bitcoin to top half a million per coin by 2030, instead of 2028, citing three structural… [+4218 chars]",
      },
      {
        _id: "65f7368dfb74bd6a92114c83",
        author: "Yahoo Finance Video",
        title:
          "Grant Cardone's real estate-bitcoin hybrid might disrupt the REIT industry",
        description:
          "Is a new real estate-bitcoin hybrid the key to building real wealth? Host Ross Mac speaks with Grant Cardone, CEO of Cardone Capital. Cardone breaks down his...",
        url: "https://finance.yahoo.com/video/grant-cardones-real-estate-bitcoin-200051355.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/HWAqOc4zozNaCzo27ld0lA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2025-11/3725e170-c58f-11f0-bdd0-7ea65a347265",
        publishedAt: "2025-11-21T20:00:51Z",
        keyword: "Bitcoin",
        content:
          "like let's actually talk about how the hybrid works, right? I would imagine obviously, if there's a hybrid and there's a call it 50% draw down on the price of Bitcoin, what does that mean to the inve… [+2987 chars]",
      },
    ])
  );
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: crypto.randomUUID(),
      keyword: article.keyword,
      url: article.url,
      title: article.title,
      urlToImage: article.urlToImage,
      author: article.author,
      description: article.description,
      publishedAt: article.publishedAt,
    });
  });
}

export function deleteArticle(id) {
  return new Promise((resolve) => {
    resolve({ message: "deleted", id });
  });
}
