export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c81",
        title:
          "Inside a Wild Bitcoin Heist: Five-Star Hotels, Cash-Stuffed Envelopes, and Vanishing Funds",
        url: "put some actual article URL here",
        author: "Joel Khalili",
        description:
          "Sophisticated crypto scams are on the rise. But few of them go to the lengths one bitcoin mining executive experienced earlier this year.",
        urlToImage:
          "https://media.wired.com/photos/6913b909f757bec53ccf7811/191:100/w_1280,c_limit/Bitcoin-Heist-Business-1304706668.jpg",
        publishedAt: "2025-11-17T10:00:00Z",
      },
      {
        _id: "65f7368dfb74bd6a92114c82",
        title: "Bitcoin Continues Steep Decline, Down 34% Since Early October",
        author: "Matt Novak",
        description: "The crypto bros are tired of winning.",
        urlToImage:
          "https://gizmodo.com/app/uploads/2023/11/f49a044d19bd3b833ac04154d28540ee.jpg",
        publishedAt: "2025-11-21T17:10:40Z",
      },
      {
        _id: "65f7368dfb74bd6a92114c83",
        title:
          "Europol Shuts Down Bitcoin Mixer That Processed €1.3 Billion Worth of Crypto",
        url: "https://gizmodo.com/europol-shuts-down-bitcoin-mixer-that-processed-e1-3-billion-worth-of-crypto-2000694020",
        author: "Kyle Torpey",
        description:
          "Sophisticated crypto scams are on the rise. But few of them go to the lengths one bitcoin mining executive experienced earlier this year.",
        urlToImage:
          "https://gizmodo.com/app/uploads/2025/12/crypto_mixer-1200x675.jpg",
        publishedAt: "2025-12-01T18:35:39Z",
      },
      {
        _id: "65f7368dfb74bd6a92114c84",
        title:
          "Inside a Wild Bitcoin Heist: Five-Star Hotels, Cash-Stuffed Envelopes, and Vanishing Funds",
        url: "put some actual article URL here",
        author: "Joel Khalili",
        description:
          "Sophisticated crypto scams are on the rise. But few of them go to the lengths one bitcoin mining executive experienced earlier this year.",
        urlToImage:
          "https://media.wired.com/photos/6913b909f757bec53ccf7811/191:100/w_1280,c_limit/Bitcoin-Heist-Business-1304706668.jpg",
        publishedAt: "2025-11-17T10:00:00Z",
      },
    ])
  );
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      url: article,
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
