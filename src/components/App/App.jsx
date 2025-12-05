import { useState } from "react";
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
import ArticleDetails from "../ArticleDetails/ArticleDetails";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const handleLogInClick = () => {
    setActiveModal("login");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleSignUpClick = () => {
    setActiveModal("register");
  };
  const handleLoginModalSubmit = ({ email, password }) => {
    auth
      .signIn({ email, password })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          const redirectPath = location.state?.from?.pathname || "/";
          navigate(redirectPath);
          closeActiveModal();
        }
      })
      .catch((error) => {
        console.error("Failed to signin:", error);
      });
  };
  const handleRegisterModalSubmit = ({ email, password, name, avatar }) => {
    auth
      .signUp({ email, password, name, avatar })
      .then((data) => {
        handleLoginModalSubmit({ email, password });
      })
      .catch((error) => {
        console.error("Failed to register:", error);
      });
  };
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="header">
                  <Header handleLogInClick={handleLogInClick} />
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
                  <Header handleLogInClick={handleLogInClick} />
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
    </div>
  );
}

export default App;
