import css from '../assets/css/home.module.css';
const Home = () => {
  const date = new Date().toDateString();
  return (
    <>
    <div className={css.cover}>
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
      <p className={css.lead}>{date}</p>
      <p className={css.bot}>Welcome Back <br /> Bot</p>
    </div>
    <div className={css.slider}>
        <span>BBC</span>
        <span>CNN</span>
        <span>NYtimes</span>
        <span>ABCNews</span>
        <span>ESPN</span>
        <span>RealMadrid</span>
    </div>
    </div>
  </>
  )
}

export default Home;