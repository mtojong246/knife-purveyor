import './newsletter.styles.css';
import NewsletterCard from '../Newsletter-Card/newsletter-card.component';

const Newsletter = () => {

    const newsletters = [
        {
            title: 'The Spring Leaf Connection, Knife Making Technologies Explained',
            description: "We thought we’d offer a tale of the leaf-spring – that of the automatic kind. Esteemed Knifemakers like Richard Wright, Tore Forgarizzu, and George Daily have been producing superbly crafted leaf-spring automatics using time-honored techniques that require precision and a highly creative mind.Two types of spring activation systems are most prevalent in the knife-making community, […]",
            link: 'https://www.knifepurveyor.com/publications/the-spring-leaf-connection-knife-making-technologies-explained/',
        },
        {
            title: 'The Point is:',
            description: "Michael Donato has a fine eye for quality and is a respected collector, historian, and a noted authority on the knife-making arts. We are launching a series of dialogs with him designed to pierce the often-cluttered intersections of art, collecting, valuation, sourcing, and choice-making. Michael presents the facts, facts that he believes you’ll find fascinating […]",
            link: 'https://www.knifepurveyor.com/publications/the-point-is/',
        },
        {
            title: "The Best of Bose Worlds – How Tony and Reese Have Created Dual Legacy’s in Knife Making",
            description: "Tony Bose is a name known to every serious knife collector. Renowned for his mastery of traditional folding knives, Tony’s award-winning cutlery can only be compared to his son, Reese’s work, in style, ingenuity, and uncommon excellence.",
            link: 'https://www.knifepurveyor.com/publications/the-best-of-bose-worlds-how-tony-and-reese-have-created-dual-legacys-in-knife-making/',
        }
    ]

    return (
        <div className='newsletter'>
            <span className='newsletter-title'>Newsletters</span>
            <hr />
            <div className='newsletter-container'>
                {newsletters.map(newsletter =>
                    <NewsletterCard key={newsletter.title} newsletter={newsletter} />
                )}
            </div>
        </div>
    )
}

export default Newsletter;