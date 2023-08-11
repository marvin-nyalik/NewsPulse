import css from '../assets/css/home.module.css';

const Header = () => {
  return(
    <div className={css.toolbar}>
    <div className={css.headline}>
      <div className={css.logoDiv}>
        <i className='bx bx-news'></i>
        <p>NewsPulse</p>
      </div>
      <div>
        <i className='bx bxs-user-circle' style={{'font-size': '24px'}}></i>
      </div>
    </div>
  </div>
  );
}

export default Header;
