import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/FullArticle.css"
import "./css/Users.css"
import "./css/Login.css"
import "./css/Articles.css"
import "./css/Home.css"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Users from "./Components/Users/Users";
import Articles from "./Components/Articles/Articles";
import FullArticle from "./Components/Articles/Full-Article";
import Login from "./Components/Login";
import ArticleTopic from "./Components/Articles/Article-Topic";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Error from "./Components/Error";
import { UserLoginContext } from "./Context/userLogin";

function App() {
  const [currentUser, setCurrentUser] = useState("jessjelly");
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);

  return (
    <BrowserRouter>
      <UserLoginContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home setArticle={setArticle} article={article} />}
            />
            <Route path="/Users" element={<Users />} />
            <Route
              path="/articles"
              element={
                <Articles setArticles={setArticles} articles={articles} />
              }
            />
            <Route
              path="/articles/:topic"
              element={
                <ArticleTopic setArticles={setArticles} articles={articles} />
              }
            />
            <Route
              path="/article/:article_id"
              element={
                <FullArticle setArticle={setArticle} article={article} />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </UserLoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
