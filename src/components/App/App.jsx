import { useEffect, useState } from "react";
import "./App.css";

//component imports

import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NoData from "../NoData/NoData";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

//api imports
import { authorize, checkToken } from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState("");
  const [isRegistered, setIsRegistered] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLogInClick = () => {
    setActiveModal("login");
  };
  const handleLogOutClick = () => {
    localStorage.removeItem("token");
    setIsLoggingIn(true);
    setIsRegistered(false);
    setUserName("");
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
        setArticles(data.articles);
        setVisibleCount(3);
      } else {
        setArticles([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }

    setIsLoading(false);
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
                  {!isLoading && !noResults && articles.length > 0 && (
                    <NewsCard
                      articles={articles}
                      visibleCount={visibleCount}
                      onShowMore={() => setVisibleCount((prev) => prev + 3)}
                    />
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
                    isLogin={isLoggingIn}
                    isRegister={isRegistered}
                    handleLogInClick={handleLogInClick}
                  />
                  <section className="header__underline">
                    <ArticleDetails />
                  </section>
                </header>
                <main>
                  <NewsCard />
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
