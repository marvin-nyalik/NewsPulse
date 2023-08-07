import css from '../assets/css/article.module.css';
import avatar from '../assets/images/camera.jpg';
import { Link } from 'react-router-dom';

const Article = () => {
 return (
    <>
    <Link to='/news/detail/name' className={css.link}>
    <div className={css.container}>
        <div className={css.info}>
            <span className={css.tag}>Productivity</span>
            <p className={css.title}>Title of Obama the Great</p>
            <p className={css.footer}> <span><i className='bx bxs-news' /></span> Author <span className={css.footdate}>22/12/23</span></p>
        </div>
        <div className={css.image}>
            <img src={avatar}/>
        </div>
    </div>
    </Link>
    <Link to='/news/detail/name1' className={css.link}>
    <div className={css.container}>
        <div className={css.info}>
            <span className={css.tag}>Productivity</span>
            <p className={css.title}>Title of Obama the Great</p>
            <p className={css.footer}> <span><i className='bx bxs-news' /></span> Author <span className={css.footdate}>22/12/23</span></p>
        </div>
        <div className={css.image}>
            <img src={avatar}/>
        </div>
    </div>
    </Link>
    <Link to='/news/detail/name2' className={css.link}>
    <div className={css.container}>
        <div className={css.info}>
            <span className={css.tag}>Productivity</span>
            <p className={css.title}>Title of Obama the Great</p>
            <p className={css.footer}> <span><i className='bx bxs-news' /></span> Author <span className={css.footdate}>22/12/23</span></p>
        </div>
        <div className={css.image}>
            <img src={avatar}/>
        </div>
    </div>
    </Link>
    <Link to='/news/detail/name3' className={css.link}>
    <div className={css.container}>
        <div className={css.info}>
            <span className={css.tag}>Productivity</span>
            <p className={css.title}>Title of Obama the Great</p>
            <p className={css.footer}> <span><i className='bx bxs-news' /></span> Author <span className={css.footdate}>22/12/23</span></p>
        </div>
        <div className={css.image}>
            <img src={avatar}/>
        </div>
    </div>
    </Link>
    <Link to='/news/detail/name4' className={css.link}>
    <div className={css.container}>
        <div className={css.info}>
            <span className={css.tag}>Productivity</span>
            <p className={css.title}>Title of Obama the Great</p>
            <p className={css.footer}> <span><i className='bx bxs-news' /></span> Author <span className={css.footdate}>22/12/23</span></p>
        </div>
        <div className={css.image}>
            <img src={avatar}/>
        </div>
    </div>
    </Link>
    </>
 )
}

export default Article;