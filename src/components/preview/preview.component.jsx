import './preview.styles.css';
import PreviewCard from '../Preview-Card/preview-card.component';
import { useNavigate } from 'react-router-dom';

const Preview = () => {

    const navigate = useNavigate();

    const goToShop = () => {
        navigate('./shop')
    }

    const previewItems = [
        {
            id: 1,
            img: 'https://mywpenginesitekp.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/08/08181039/Peter-Martin-Zircuti-and-Carbon-Fiber-Flipper-12572.jpg',
            title: 'Every-Day Carry',
            description: 'EDC knives are the type of knives you enjoy carrying and using on a daily basis.',
        },
        {
            id: 2,
            img: 'https://mywpenginesitekp.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/08/08181320/Scott-Sawby-Jasper-Interframe-Button-Lock-11913.jpg',
            title: 'Collector Grade',
            description: 'Custom, handmade, one of kind knives come in many variations. Knives in this genre are appreciated by the astute collector with a discerning eye and are the foundation of every serious custom knife collection.',
        },
        {
            id: 3,
            img: 'https://mywpenginesitekp.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/08/08180810/Ray-Cover-Jr-Engraved-Joe-Kious-Pocket-Locket-12170.jpg',
            title: 'Investment Quality',
            description: 'Every Collectible has its “Gold Standard”. Knives of this caliber have historically stood the test of time in the custom knife world.',
        },
    ]


    return (
        <div className='preview'>
            <div className='preview-title'>
                <span onClick={goToShop}>Shop</span>
                <hr />
            </div>
            <div className='preview-container'>
                {previewItems.map(preview => 
                    <PreviewCard key={preview.id} preview={preview} />
                )}
            </div>
        </div>
    )
}

export default Preview;