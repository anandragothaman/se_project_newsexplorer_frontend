import { useEffect, useState } from "react";
import "./App.css";

//component imports

import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NoData from "../NoData/NoData";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

//api imports
import { authorize, checkToken } from "../../utils/auth";
import { getItems, saveArticle, deleteArticle } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState("");
  const [isRegistered, setIsRegistered] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchArticles, setSearchArticles] = useState([]);
  const visibleArticles = searchArticles.slice(0, visibleCount);
  const [savedArticles, setSavedArticles] = useState([]);
  const navigate = useNavigate();

  const handleLogInClick = () => {
    setActiveModal("login");
  };
  const handleLogOutClick = () => {
    localStorage.removeItem("token");
    setIsLoggingIn(true);
    setIsRegistered(false);
    setUserName("");
    navigate("/");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLoginModalSubmit = async ({ email, password }) => {
    try {
      const res = await authorize(email, password);

      if (!res.token) {
        console.log("Login failed");
        return;
      }

      // save token
      localStorage.setItem("token", res.token);

      // fetch user data
      const userResp = await checkToken(res.token);
      setUserName(userResp.data.name);

      // Update your UI login state
      setIsLoggingIn(false);
      setIsRegistered(true);

      closeActiveModal();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegisterModalSubmit = ({ email, password, name }) => {
    try {
      setUserName(name);
      setActiveModal("registerSuccess");
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const handleSearch = async (query) => {
    setIsLoading(true);
    setNoResults(false);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=bab9d4b072044898a173155e41c12cbe`
      );

      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        setSearchArticles(data.articles);
        setVisibleCount(3);
      } else {
        setSearchArticles([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }

    setIsLoading(false);
  };

  const handleSaveArticle = async (article) => {
    if (isLoggingIn) {
      setActiveModal("login");
      return;
    }
    const alreadySaved = savedArticles.some(
      (saved) => saved.url === article.url
    );

    if (alreadySaved) {
      console.log("Article already saved");
      return;
    }

    try {
      const savedArticle = await saveArticle(article);
      setSavedArticles((prev) => [...prev, savedArticle]);
    } catch (error) {
      console.error("Failed to save article:", error);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    try {
      await deleteArticle(articleId);

      setSavedArticles((prev) =>
        prev.filter((article) => article._id !== articleId)
      );
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggingIn(true);
      return;
    }

    checkToken(token)
      .then((res) => {
        setUserName(res.data.name);
        setIsLoggingIn(false);
        setIsRegistered(true);
      })
      .catch(() => {
        setIsLoggingIn(true);
      });
  }, []);

  useEffect(() => {
    if (!isLoggingIn) {
      getItems().then((items) => {
        setSavedArticles(items);
      });
    }
  }, [!isLoggingIn]);
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="header">
                  <Header
                    isSavedArticle={savedArticles.length > 0}
                    userName={userName}
                    isLogin={isLoggingIn}
                    isRegister={isRegistered}
                    handleLogInClick={handleLogInClick}
                    handleLogOutClick={handleLogOutClick}
                  />
                  <section className="header__underline">
                    <SearchForm onSearch={handleSearch} />
                  </section>
                </header>
                <main>
                  {isLoading && <Preloader />}
                  {noResults && <NoData />}
                  {!isLoading && !noResults && searchArticles.length > 0 && (
                    <section className="news-card">
                      <h2 className="news-card__title">Search Results</h2>
                      <NewsCardList
                        articles={visibleArticles}
                        isSavedPage={false}
                        isLogin={isLoggingIn}
                        onSave={handleSaveArticle}
                        visibleCount={visibleCount}
                      />
                      {visibleCount < searchArticles.length && (
                        <button
                          className="news-card__save-button"
                          onClick={() => setVisibleCount((prev) => prev + 3)}
                        >
                          Show more
                        </button>
                      )}
                    </section>
                  )}
                  <About />
                </main>
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <header className="header header_saved-news">
                  <Header
                    isSavedArticle={savedArticles.length > 0}
                    userName={userName}
                    isLogin={isLoggingIn}
                    isRegister={isRegistered}
                    handleLogInClick={handleLogInClick}
                    handleLogOutClick={handleLogOutClick}
                  />
                  <section className="header__underline">
                    <ArticleDetails
                      articleCount={savedArticles.length}
                      userName={userName}
                    />
                  </section>
                </header>
                <main>
                  <section className="news-card">
                    <NewsCardList
                      articles={savedArticles}
                      isSavedPage={true}
                      isLogin={isLoggingIn}
                      onDelete={handleDeleteArticle}
                    />
                  </section>
                </main>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
        onRegisterModalSubmit={handleRegisterModalSubmit}
        handleLogInClick={handleLogInClick}
      />
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
        onLoginModalSubmit={handleLoginModalSubmit}
        handleSignUpClick={handleSignUpClick}
      />
      <RegisterSuccessModal
        isOpen={activeModal === "registerSuccess"}
        onClose={closeActiveModal}
        onRegisterModalSubmit={handleRegisterModalSubmit}
        handleLogInClick={handleLogInClick}
      />
    </div>
  );
}

export default App;
