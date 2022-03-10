import { useEffect, useState } from "react";
import * as articleApi from "../utils/articleApi";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import PostComment from "./Post-Comment";
import CommentSection from "./Comment-Section";

export default function FullArticle({ article, setArticle }) {
  const { article_id } = useParams();
  useEffect(() => {
    articleApi
      .fetchArticleById(article_id)
      .then((articleFromApi) => setArticle(articleFromApi));
  }, []);

  const date = new Date(Date.parse(article.created_at))

  return (
    <article>
      <div className="full_article">
        <h1 className="article_h1">
          {article.title} <br />
        </h1>
        <div className="created">
          Posted: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`} <br />
        </div>
        <h2 className="full_article_topic">
          Author: {article.author} <br />
          Topic: {article.topic} <br />
        </h2>
        <div className="full_article_info">
          <Votes article={article} article_id={article_id} />
        </div>
        <div className="full_article_body">{article.body}</div>
      </div>
      <div className="post_comment">
        <PostComment article_id={article_id}/>
      </div>
      <div className="comment_section">
        <CommentSection article_id={article_id}/>
      </div>
    </article>
  );
}
