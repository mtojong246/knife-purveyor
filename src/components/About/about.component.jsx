import './about.styles.css';

const About = () => {
    return (
        <div className='about-container' name="about">
            <div className='about-header'>
                <span className='about-title'>About Us</span>
            </div>
            <hr />
            <div className='about-text'>
                <p>When thinking about the tools that have shaped human history, we tend to think in relatively recent terms: The printing press. Combustion engines. Computers and Smartphones.</p>
                <p>However, certain tools not only changed the world, they made crafting this world possible in the first place. Knives and other bladed instruments have been in use for over two million years, predating even modern man himself. Refined over millennia of experimentation, the tool continued to make once seemingly impossible advancements in social development — agriculture, crafting, hunting large animals — now seem second nature. Its advancements would turn generations of nomads to farmers, hunters into warriors, and young boys into resourceful outdoorsmen.</p>
                <p>When you hold a custom-made knife, it’s more than just a tool — you’re feeling a piece of that powerful tradition for yourself. A potent symbol of man’s ability to not only triumph over nature, but to chart a destiny for himself and future generations.</p>
                <p>At KnifePurveyor, we’re passionate about celebrating this extraordinary legacy with other enthusiastic collectors, as well as introducing and educating newcomers to the world of custom-made knives. If you have any questions, concerns, or just want to learn about knives, please feel free to contact Michael and we’ll be happy to help you out!</p>
            </div>
        </div>
    )
}

export default About;