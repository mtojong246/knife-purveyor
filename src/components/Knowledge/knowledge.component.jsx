import './knowledge.styles.css';

const Knowledge = () => {
    return (
        <div className='knowledge-container'>
            <div className='knowledge-title-container'><span className='knowledge-title'>Encyclopedic Knowledge of The Custom Knife Industry</span></div>
            <hr />
            <div className='knowledge-content'>
                <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/12/custom-knife-reference-books.jpg'} alt='books' />
                <div className='knowledge-text'>
                    <p>We’re proud to be a part of the custom knife community, and our role as curators and cultural ambassadors is one we take seriously. With over 20 years of experience collecting, studying, and selling knives, Michael Donato’s encyclopedic knowledge of the custom knife industry is a tremendous resource for interested collectors. Michael is always excited to lend his expertise — featured in trade magazines and knife shows around the world — to customers hoping to learn more or find the perfect piece of their collections.</p>
                </div>
            </div>
            <div className='knowledge-paragraph'>
                <p>Making sure our collectors feel heard and appreciated is our TOP priority: If you ever have a question, idea, or concern you’d like to share with us, we encourage you to please contact us via phone or e-mail to respond to your inquiries within 24 hours. We’d love to hear from you!</p>
            </div>
        </div>
    )
}

export default Knowledge;