import css from '../assets/css/newsSlider.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NewsSlider = () => {
  const firstArticles = useSelector((state) => state.articles.articles).slice(0, 2);
  console.log('Articles from NewsSlider ', firstArticles);
  const loading = useSelector((state) => state.articles.loading);

  if (loading) {
    return (
      <div>Loading...</div>
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

 
//   return (
//     <div className={css.slider}>
//       {firstArticles.map(article => (
//          <span>
//          {const encodedTitle = encodeURIComponent(article.title)}

//          <Link to={`/news/detail/${encodedTitle}}`}>
//          <div className={css.cover}>
//             <div className={css.newsContainer}>
//                <img src={article.urlToImage}/>
//                <p className={css.heroText}>{article.title}</p>
//             </div>
//          </div>
//          </Link>
//          </span>
//       ))}
//     {/* <span>
//     <Link to='/news/detail/news-slider'>
//     <div className={css.cover}>
//        <div className={css.newsContainer}>
//           <img src={avatar}/>
//           <p className={css.heroText}>News Article Title - How Not To Do It!</p>
//        </div>
//     </div>
//     </Link>
//     </span> */}
//     {/* <span>
//     <Link to='/news/detail/another-news-slider'>
//     <div className={css.cover}>
//        <div className={css.newsContainer}>
//           <img src={avatar}/>
//           <p className={css.heroText}>Article Title - How To Do It!</p>
//        </div>
//     </div>
//     </Link>
//     </span> */}
//     </div>
//   )
// }

