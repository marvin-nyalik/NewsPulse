import {Link} from 'react-router-dom';
import css from '../assets/css/footer.module.css';

const Footer = () => {
  return (
   <>
      <div className={css.container}>
        <Link to="/">
          <i className='bx bxs-home-heart' style={{'color': '#213547'}}/>
        </Link>
        <a href='#header' ><i className='bx bxs-arrow-to-top' style={{'color': '#213547'}} /></a>
      </div>
      <div className={css.footer}>
        <p>NewsPulse Copyright &copy; 2023, All Rights Reserved</p>
      </div>
   </>
  );
}

export default Footer;
