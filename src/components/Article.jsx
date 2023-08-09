/* eslint-disable no-unused-vars */
import css from '../assets/css/article.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Article = React.memo(({ articles }) => {
  const secondArticles = useSelector((state) => state.articles.articles);
  console.log('Articles from article component ', secondArticles);

  return (
    secondArticles.map(article => {
      const encodedTitle = encodeURIComponent(article.url);
      return (
        <Link to={`/news/detail/${encodedTitle}`} className={css.link} key={article.title}>
          <div className={css.container}>
            <div className={css.info}>
              <span className={css.tag}>{article.source.name}</span>
              <p className={css.title}>{article.title}</p>
              <p className={css.footer}>
                <span><i className='bx bxs-news' /></span> {article.author}
                <span className={css.footdate}>{article.publishedAt.substring(0,10)}</span>
              </p>
            </div>
            <div className={css.image}>
              <img src={article.urlToImage} alt='avatar' />
            </div>
          </div>
        </Link>
      );
    })
  );
});

Article.displayName = 'Article';

Article.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default Article;
