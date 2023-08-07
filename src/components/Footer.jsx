import css from '../assets/css/footer.module.css';

const Footer = () => {
  return (
    <>
   <div className={css.container}>
     <i className='bx bxs-home-heart' />
     <i className='bx bxs-arrow-to-top' />
   </div>
   <div className={css.footer}>
     <p>NewsPulse Copyright &copy; 2023, All Rights Reserved</p>
   </div>
   </>
  );
}

export default Footer;