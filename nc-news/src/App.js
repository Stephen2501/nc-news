
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Users from './Components/Users';
import Articles from './Components/Articles'
import FullArticle from './Components/Full-Article';
import ArticleTopic from './Components/Article-Topic';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react';




function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Users" element={<Users/>} />
          <Route path="/articles" element={<Articles setArticles={setArticles} articles={articles}/>} />
          <Route path="/articles/:topic" element={<ArticleTopic setArticles={setArticles} articles={articles}/>} />
          <Route path="/article/:article_id" element={<FullArticle setArticle={setArticle} article={article}/>} />
    {/* <Route path="/articles/:sort_by" element={<ArticleSortBy setArticle={setArticle} article={article}/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
