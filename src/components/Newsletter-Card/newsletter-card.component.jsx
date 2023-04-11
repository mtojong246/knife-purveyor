import './newsletter-card.styles.css';

const NewsletterCard = ({ newsletter }) => {
    const { title, description, link } = newsletter;

    return (
        <div className='newsletter-card-container'>
            <div className='newsletter-card-text'>
                <div className='newsletter-title-container'>
                    <span>{title}</span>
                </div>
                <p>{description}</p>
            </div>
            <a href={link}>
                <button type='button' className='read-more'>Read More</button>
            </a>
        </div>
    )
}

export default NewsletterCard;