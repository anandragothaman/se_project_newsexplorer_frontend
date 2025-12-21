export const authorize = () => {
  return new Promise((resolve) => {
    resolve({ token: "fake-token-12345" });
  });
};

export const checkToken = () => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve) => {
    resolve({
      data: { name: "Elise", email: "elise@example.com", _id: "123" },
    });
  });
};
