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
                    <SearchForm />
                  </section>
                </header>
                <main>
                  {/* <Preloader /> */}
                  {/* <NoData /> */}
                  <NewsCard />
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
