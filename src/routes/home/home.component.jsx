import './home.styles.css';

import Preview from '../../components/preview/preview.component';
import About from '../../components/About/about.component';
import Published from '../../components/Published/published.component';
import American from '../../components/American/american.component';
import MainBackground from '../../components/MainBackground/mainBackground.component';
import Experience from '../../components/Experience/experience.component';
import Knowledge from '../../components/Knowledge/knowledge.component';
import Newsletter from '../../components/Newsletter/newsletter.component';

const Home = () => {
    return (
        <div className='home-container'>
            <MainBackground />
            <Preview />
            <About />
            <Published />
            <American />
            <Experience />
            <Knowledge />
            <Newsletter />
        </div>
        
    )
}

export default Home; 