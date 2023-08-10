import css from '../assets/css/newsSlider.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewsSlider = () => {
  const firstArticles = useSelector((state) => state.articles.articles).slice(0, 2);
  const loading = useSelector((state) => state.articles.loading);

  if (loading) {
    return (
      <div>...</div>
    );
  } else {
    return (
      <div className={css.slider}>
        {firstArticles.map(article => {
          const encodedTitle = encodeURIComponent(article.url);
          return (
            <span key={article.url}>
              <Link to={`/news/detail/${encodedTitle}`}>
                <div className={css.cover}>
                  <div className={css.newsContainer}>
                    <img src={article.urlToImage} alt={article.url} />
                    <p className={css.heroText}>{article.title}</p>
                  </div>
                </div>
              </Link>
            </span>
          );
        })}
      </div>
    );
  }
};


export default NewsSlider;
