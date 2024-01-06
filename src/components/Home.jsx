import css from '../assets/css/home.module.css';
import Header from './Header';
import NewsSlider from './NewsSlider';
import Footer from './Footer';
import React, {Suspense} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import { fetchArticles } from '../redux/articles/articleSlice';
import { fetchSources } from '../redux/sources/sourceSlice';

const Home = () => {
  const articles = useSelector((state) => state.articles.articles);
  const loading = useSelector((state) => state.articles.loading);
  const sources = useSelector((state) => state.sources.sources);
  const dispatch = useDispatch();
  const queryRef = useRef(null);
  const initialQuery = 'technology';
  
  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles(initialQuery));
    }
    if(sources.length === 0){
      dispatch(fetchSources());
    }
  }
  ,[articles.length, sources.length]);

  const modArticles = [...articles].slice(-10);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchArticles(queryRef.current.value));
  }

  const date = new Date().toDateString();
  const Article = React.lazy(() => import('./Article'));

  if (loading) {
    return(
      <>
        <div>Loading</div>
      </>
    )
  }

  return (
    <>
    <div className={css.cover} id="header">
      <Header />
      <div className={css.date}>
        <div className={css.lead}>{date} 
          <span>
            <form onSubmit={handleSubmit}>
            <input type="text"  placeholder='Search keyword & Press Enter..'
            name="query" ref={queryRef} />
            </form>
            </span>
        </div>
        <p className={css.bot}>Where News Lives!</p>
      </div>
      <div className={css.slider}>
        { sources.map(source => (<span key={source.id}> <a href={source.url}>{source.name}</a> </span>))}
      </div>
      <div>
        <NewsSlider />
      </div>
    </div>
    <div className={css.personalizedFeeds}>
      <Suspense fallback={<div>...</div>}>
        <Article articles={articles} />
      </Suspense>
    </div>
    <div className={css.articleList}>
      <h3>Other Stories In This Category</h3> 
      {modArticles.map(article => (<Link key={article.url} className={css.artList} to={`/news/detail/${encodeURIComponent(article.url)}`}> <p>{article.title +' - '+ article.source.name}</p> </Link> ))}
    </div>
    <Footer />
  </>
  )
}

export default Home;
