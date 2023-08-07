import css from '../assets/css/newsSlider.module.css';
import avatar from '../assets/images/camera.jpg';
import { Link } from 'react-router-dom';

const NewsSlider = () => {
  return (
    <div className={css.slider}>
    <span>
    <Link to='/news/detail/news-slider'>
    <div className={css.cover}>
       <div className={css.newsContainer}>
          <img src={avatar}/>
          <p className={css.heroText}>News Article Title - How Not To Do It!</p>
       </div>
    </div>
    </Link>
    </span>
    <span>
    <Link to='/news/detail/another-news-slider'>
    <div className={css.cover}>
       <div className={css.newsContainer}>
          <img src={avatar}/>
          <p className={css.heroText}>Article Title - How To Do It!</p>
       </div>
    </div>
    </Link>
    </span>
    </div>
  )
}

export default NewsSlider;
