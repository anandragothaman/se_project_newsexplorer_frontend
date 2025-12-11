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

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setIsLogIn] = useState("");
  const [isRegister, setIsRegister] = useState("");
  const handleLogInClick = () => {
    setActiveModal("login");
  };
  const handleLogOutClick = () => {
    setIsLogIn(true);
    setIsRegister(false);
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSignUpClick = () => {
    setActiveModal("register");
  };
  const handleLoginModalSubmit = ({ email, password }) => {
    setIsLogIn(false);
    setIsRegister(true);
    closeActiveModal();
    // auth
    //   .signIn({ email, password })
    //   .then((data) => {
    //     if (data.token) {
    //       setToken(data.token);
    //       setIsLoggedIn(true);
    //       const redirectPath = location.state?.from?.pathname || "/";
    //       navigate(redirectPath);
    //       closeActiveModal();
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Failed to signin:", error);
    //   });
  };
  const handleRegisterModalSubmit = ({ email, password, name }) => {
    console.log("Registering user:", { email, password, name });
    setUserName(name);
    setActiveModal("registerSuccess");
    // auth
    //   .signUp({ email, password, name, avatar })
    //   .then((data) => {
    //     handleLoginModalSubmit({ email, password });
    //   })
    //   .catch((error) => {
    //     console.error("Failed to register:", error);
    //   });
  };
  useEffect(() => {
    setIsLogIn(true);
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
                    isLogin={isLogin}
                    isRegister={isRegister}
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
                    isLogin={isLogin}
                    isRegister={isRegister}
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
