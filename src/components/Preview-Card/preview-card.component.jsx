import './preview-card.styles.css';
import { Link } from 'react-router-dom';

const PreviewCard = ({ preview }) => {
    const { img, title, description } = preview;

    const newTitle = title.toLowerCase().replace(/\s+/g, '-') 

    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src={img} alt='knife' />
            </div>
            <div className='card-text'>
                <span>{title}</span>
                <p>{description}</p>
            </div>
            <Link to={`/shop/${newTitle}-knives`}><button className='view-more'>View More</button></Link>
        </div>
    )
}

export default PreviewCard;