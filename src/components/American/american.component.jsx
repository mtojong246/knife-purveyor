import './american.styles.css';

const American = () => {
    return (
        <div className='american-container'>
            <div className='american-title-container'><span className='american-title'>American Knives, Handcrafted by American Artists</span></div>
            <hr/>
            <div className='american-content'>
                <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/10/scott-lobaido-statue-of-liberty-old-glory-painting.jpg'} alt='statue-of-liberty' />
                <p>More than just a tool, our expertly fused, artisan-made knives are meticulous works of art, produced after weeks of careful handiwork by some of the most talented artists in the country. KnifePurveyor prides itself on securing some of the most stunning examples of this timeless craft, ensuring our collectors have access to the finest blades available on the market today.</p>
            </div>
        </div>
    )
}

export default American; 