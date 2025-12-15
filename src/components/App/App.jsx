//library imports
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//component imports
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoData from "../NoData/NoData";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//api imports
import { authorize, checkToken } from "../../utils/auth";
import { getItems, saveArticle, deleteArticle } from "../../utils/api";
import AppContext from "../Contexts/AppContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoginVisible, setIsLoginVisible] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchArticles, setSearchArticles] = useState([]);
  const visibleArticles = searchArticles.slice(0, visibleCount);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [isMobileLoginVisible, setIsMobileLoginVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogInClick = () => {
    setActiveModal("login");
    setIsMobileLoginVisible(false);
  };
  const handleLogOutClick = () => {
    navigate("/");
    localStorage.removeItem("token");
    setIsLoginVisible(true);
    setIsMobileLoginVisible(false);
    setUserName("");
    setIsLoggedIn(false);
    setSavedArticles([]);
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleMobileLoginClick = () => {
    setIsMobileLoginVisible(!isMobileLoginVisible);
  };

  const handleLoginModalSubmit = async ({ email, password }) => {
    try {
      const res = await authorize(email, password);

      if (!res.token) {
        setIsLoggedIn(false);
        return;
      }

      localStorage.setItem("token", res.token);

      const userResp = await checkToken(res.token);
      setUserName(userName ? userName : userResp.data.name);

      setIsLoginVisible(false);
      setIsLoggedIn(true);
      closeActiveModal();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegisterModalSubmit = ({ name }) => {
    try {
      setUserName(name);
      setActiveModal("registerSuccess");
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const handleSearch = async (query) => {
    setCurrentKeyword(query);
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
    if (!isLoggedIn) {
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
      const savedArticle = await saveArticle({
        ...article,
        keyword: currentKeyword,
      });
      setSavedArticles((prev) => {
        // prevent duplicates
        const exists = prev.some((a) => a.url === savedArticle.url);
        if (exists) return prev;

        return [...prev, savedArticle];
      });
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
      setIsLoginVisible(true);
      setIsLoggedIn(false);
      setIsAuthChecked(true);
      return;
    }

    checkToken(token)
      .then((res) => {
        setUserName((prev) => prev || res.data.name);
        setIsLoginVisible(false);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoginVisible(true);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
      })
      .finally(() => {
        setIsAuthChecked(true);
      });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getItems().then((items) => {
        setSavedArticles(items);
      });
    }
  }, [isLoggedIn]);
  return (
    <AppContext.Provider value={{ isLoggedIn, isAuthChecked }}>
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
                      isLoginVisible={isLoginVisible}
                      isMobileLoginVisible={isMobileLoginVisible}
                      handleLogInClick={handleLogInClick}
                      handleLogOutClick={handleLogOutClick}
                      handleMobileLoginClick={handleMobileLoginClick}
                    />
                    <section className="header__search">
                      <SearchForm onSearch={handleSearch} />
                    </section>
                  </header>
                  <main>
                    {isLoading && <Preloader />}
                    {noResults && <NoData />}
                    {!isLoading && !noResults && searchArticles.length > 0 && (
                      <section className="news-cards">
                        <h2 className="news-cards__heading">Search Results</h2>
                        <NewsCardList
                          articles={visibleArticles}
                          savedArticles={savedArticles}
                          searchArticles={searchArticles}
                          isSavedPage={false}
                          isLoginVisible={isLoginVisible}
                          onSave={handleSaveArticle}
                          visibleCount={visibleCount}
                          setVisibleCount={setVisibleCount}
                        />
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
                <ProtectedRoute>
                  <header className="header header--saved-news">
                    <Header
                      isSavedArticle={savedArticles.length > 0}
                      userName={userName}
                      isLoginVisible={isLoginVisible}
                      isMobileLoginVisible={isMobileLoginVisible}
                      handleLogInClick={handleLogInClick}
                      handleLogOutClick={handleLogOutClick}
                      handleMobileLoginClick={handleMobileLoginClick}
                    />
                    <section className="header__underline">
                      <ArticleDetails
                        savedArticles={savedArticles}
                        articleCount={savedArticles.length}
                        userName={userName}
                      />
                    </section>
                  </header>
                  <main>
                    <section className="news-cards">
                      <NewsCardList
                        articles={savedArticles}
                        isSavedPage={true}
                        isLoginVisible={isLoginVisible}
                        onDelete={handleDeleteArticle}
                      />
                    </section>
                  </main>
                </ProtectedRoute>
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
    </AppContext.Provider>
  );
}

export default App;
