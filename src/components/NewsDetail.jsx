import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import css from '../assets/css/details.module.css';
import avatar from '../assets/images/camera.jpg';

const NewsDetail = () => {
  return(
    <>
    <div className={css.detail}>
    <Header className={css.head}/>
    <div className={css.container}>
      <div className={css.showcase}>
        <div className={css.coverImg}>
          <img src={avatar} alt="Avatar" />
          <Link to="/">
          <p className={css.headerT}> <i class='bx bx-arrow-back'></i> <span>Ecstatic</span></p>
          </Link>
        </div>
          <div className={css.desktopSummary}>
          <div className={css.summary}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas similique, suscipit tenetur error molestias dolores vel nemo, natus praesentium et aspernatur asperiores tempora maiores perferendis amet, ducimus iure provident?</p>
          </div>
          </div>
      </div>
     
      <div className={css.title}>
        How Not To Do It And Then How To Get Up And Do It !
      </div>
      <div className={css.info}>
        <p>Alleagy Vegas Marvin <span><i className='bx bx-book-open' />Happy Reading</span> <span>22/12/1212</span></p>
      </div>
      <div className={css.msummary}>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quas similique, suscipit tenetur error molestias dolores vel nemo, natus praesentium et aspernatur asperiores tempora maiores perferendis amet, ducimus iure provident?</p>
      </div>
      <div className={css.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Suscipit, assumenda ab est, rerum obcaecati totam placeat
           perspiciatis, quam repudiandae dolor asperiores rem incidunt
           neque beatae vitae illo sunt? Quis quasi ad explicabo quod
           dignissimos consequatur velit earum. Natus iste veritatis
           suscipit sit similique dolor quas assumenda eligendi! Modi,
           amet accusamus?
           
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam nulla illo eius earum praesentium esse ex animi suscipit ipsam. Ut corrupti impedit rerum nesciunt velit veritatis saepe quos soluta!</p>
      </div>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default NewsDetail;