import css from '../assets/css/home.module.css';
import Header from './Header';
import NewsSlider from './NewsSlider';
import Footer from './Footer';
import React, {Suspense} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { fetchArticles } from '../redux/articles/articleSlice';
import { fetchSources } from '../redux/sources/sourceSlice';

const Home = () => {
  const articles = useSelector((state) => state.articles.articles);
  const sources = useSelector((state) => state.sources.sources);
  const dispatch = useDispatch();
  const [ query, setQuery ] = useState('');
  const initialQuery = 'technology';
  const modArticles = [...articles].splice(80, 20);
  
  useEffect(() => {
    if(query) {
      dispatch(fetchArticles(query));
    }
    else{
    dispatch(fetchArticles(initialQuery));
  }
  },[query]);

  useEffect(() => {
    if(sources.length === 0){
      dispatch(fetchSources());
    }
  },
  [sources.length]);

  const updateQuery = (e) => {
    setQuery(e.target.value);
  }

  const date = new Date().toDateString();
  const Article = React.lazy(() => import('./Article'));

  return (
    <>
    <div className={css.cover} id="header">
    <Header />
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
    <div className={css.date}>
      <p className={css.lead}>{date} 
        <span> <input type="text"  placeholder='Search & Press Enter..'
         name="query" value={query} onChange={updateQuery} /></span>
      </p>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Article articles={articles} query={query}/>
      </Suspense>
    </div>
    <div className={css.articleList}>
      <h3>Other Stories In This Category</h3> 
      {modArticles.map(article => (<Link key={article.url} to={`/news/detail/${encodeURIComponent(article.url)}`}> <p>{article.title +' - '+ article.source.name}</p> </Link> ))}
    </div>
    <Footer />
  </>
  )
}

export default Home;
