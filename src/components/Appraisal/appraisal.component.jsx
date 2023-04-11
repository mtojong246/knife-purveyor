import './appraisal.styles.css';
import { useEffect } from 'react';

const Appraisal = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='appraisal-container'>
            <span>Appraisal Services</span>
            <div className='appraisal-text'>
                <p>At KnifePurveyor, collecting custom knives (and other one-of-a-kind items) is our passion.</p>
                <p>We understand that for many of us, our hobby is a family affair. However, more often than not, our families have little interest in our collections, and even less knowledge of their potential value. We may know our collections intimately, but what about your potential heirs?</p>
                <p>Make no mistake: your knives can represent an important part of your net worth. Sadly, we often hear of collections sold for mere pennies on the dollar with other vendors.</p>
                <p>Luckily, collectors can avoid this unfortunate reality with a KnifePurveyor appraisal.</p>
                <p>After a thorough review, you can feel confident knowing that your custom knife collection will be sold properly and fairly.</p>
                <p>KnifePurveyor professionals can carefully manage the sale of your collection, and ensure that your heirs are properly compensated.</p>
                <p>The appraisal conducted by leading custom knife industry expert Michael Donato will provide you with:</p>
                <ul>
                    <li>A detailed inventory and photographic record of collection</li>
                    <li>Current market value determination</li>
                    <li>An exit strategy for your collection</li>
                    <li>Pre-negotiated terms to facilitate the smooth sale of your knives for your heirs</li>
                    <li>A letter of intent for your estate planning</li>
                </ul>
                <p>You can use a KnifePurveyor appraisal to showcase your collection, serve as documentation for insurance purposes, and let your family know where to turn for help, if they need it. A completed appraisal also allows KnifePurveyor to easily and quickly offer your knives for resale to our clientele, when you or your designated representative decide to sell them. This appraisal locks in our lowest commission of 20%, should you or your designated representative decide to sell these knives through us. Upon consignment of your knives, we will provide a free, updated appraisal of their current fair market value to reflect current demand.</p>
                <p>We take great strides to accurately showcase and inventory your collection. We are always available to you (and your family) to discuss your custom knife needs, and look forward to your continued patronage.</p>
                <p><a href=''>Click Here</a> for more details.</p>
                <p>If you would like to schedule an appointment please contact us by phone at 919-295-1283.</p>
                <p>Lord, please don’t let my wife sell my knives for what I told her I paid for them.</p>
            </div>
        </div>
    )
}

export default Appraisal; 