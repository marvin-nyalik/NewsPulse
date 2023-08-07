import css from '../assets/css/home.module.css';
<<<<<<< HEAD
import Header from './Header';
=======
>>>>>>> fbbc36e7172178a831bf62bd22c119a67ca4a497
import NewsSlider from './NewsSlider';
import Footer from './Footer';
import React, {Suspense} from 'react';

const Home = () => {
  const date = new Date().toDateString();
  const Article = React.lazy(() => import('./Article'));

  return (
    <>
    <div className={css.cover}>
<<<<<<< HEAD
    <Header />
=======
    <div className={css.toolbar}>
      <div className={css.headline}>
        <div className={css.logoDiv}>
          <i className='bx bx-news'></i>
          <p>NewsPulse</p>
        </div>
        <div>
          <i className='bx bxs-user-circle'></i>
        </div>
      </div>
    </div>
>>>>>>> fbbc36e7172178a831bf62bd22c119a67ca4a497
    <div className={css.date}>
      <p className={css.lead}>{date} <span> <input type="text" placeholder='Search & Press Enter...' /></span></p>
      <p className={css.bot}>Where News Lives!</p>
    </div>
    <div className={css.slider}>
        <span>BBC</span>
        <span>CNN</span>
        <span>NYtimes</span>
        <span>ABCNews</span>
        <span>ESPN</span>
        <span>RealMadrid</span>
    </div>
    <div>
    <NewsSlider />
    </div>
    </div>
    <div className={css.personalizedFeeds}>
      <Suspense fallback={<div>Loading...</div>}>
        <Article />
      </Suspense>
    </div>
    <Footer />
  </>
  )
}

export default Home;