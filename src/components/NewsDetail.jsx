import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import css from '../assets/css/details.module.css';
import avatar from '../assets/images/camera.jpg';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const NewsDetail = () => {
  const { title } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const thisArticle = articles.find(article => article.url === title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className={css.detail}>
    <Header className={css.head}/>
    <div className={css.container}>
      <div className={css.showcase}>
        <div className={css.coverImg}>
          <img src={thisArticle.urlToImage ? thisArticle.urlToImage : avatar} alt="Avatar" />
          <Link to="/">
          <p className={css.headerT}> <i className='bx bx-arrow-back' /> <span>Back</span></p>
          </Link>
        </div>
          <div className={css.desktopSummary}>
          <div className={css.summary}>
            <p>{thisArticle.description}</p>
          </div>
          </div>
      </div>
     
      <div className={css.title}>
        {thisArticle.title}
      </div>
      <div className={css.info}>
        <p>By {thisArticle.author ? thisArticle.author : 'Anonymous'}<span><i className='bx bx-book-open' />Source: {thisArticle.source.name}</span> <span>{thisArticle.publishedAt.substring(0,10)}</span></p>
      </div>
      <div className={css.msummary}>
      <p>{thisArticle.description}</p>
      </div>
      <div className={css.content}>
        <p>{thisArticle.content +
        `Quantum computing, a cutting-edge technology that leverages the principles of quantum mechanics, is steadily advancing, promising a revolution in computing power and potential breakthroughs in various scientific fields. Researchers and tech enthusiasts around the world are closely following the progress of this exciting technology, as it holds the key to solving complex problems that are beyond the capabilities of classical computers.

          In recent news, a team of scientists at QuantumTech Labs announced a significant breakthrough in quantum computing hardware. Their latest quantum processor, named QuantaCore, boasts an unprecedented 500-qubit capacity, making it one of the most powerful quantum processors ever developed. This achievement marks a significant milestone in the journey towards practical quantum computing, as the increased qubit count enables researchers to tackle more complex computational challenges.

          QuantaCore's advanced architecture incorporates innovative qubit stabilization techniques, reducing the error rates that have been a major hurdle in quantum computing. This development has the potential to accelerate the realization of fault-tolerant quantum computers, which are essential for solving intricate problems in fields such as cryptography, material science, and optimization.

          The impact of quantum computing on cryptography is particularly noteworthy. With QuantaCore's enhanced computational capabilities, experts predict that traditional cryptographic methods may become vulnerable to quantum attacks. As a result, the cybersecurity landscape is expected to undergo a significant transformation, prompting researchers to explore new encryption methods that are resistant to quantum hacking.

          Beyond cryptography, quantum computing is poised to revolutionize drug discovery and material design. Quantum simulations can accurately model molecular interactions and reactions, leading to the rapid identification of novel drug compounds and materials with specific properties. This could significantly shorten the time required for drug development and open doors to the creation of advanced materials with applications in electronics, energy storage, and more.

          Industry giants are also investing heavily in quantum technology. Amazon recently unveiled Quantum Compute Cloud (QCC), a cloud computing platform that provides developers and researchers access to quantum computing resources. This move is expected to democratize quantum computing and accelerate the pace of research and development across industries.

          As exciting as these advancements are, challenges still remain on the path to widespread quantum computing adoption. Cooling quantum processors to near absolute zero remains a technical hurdle, and researchers are exploring novel cooling methods to ensure stable and reliable quantum operations. Additionally, quantum error correction, an essential component for achieving fault-tolerant quantum computing, is an ongoing area of research.`}</p>
      </div>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default NewsDetail;
