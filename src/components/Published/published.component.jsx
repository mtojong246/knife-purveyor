import './published.styles.css';

const Published = () => {
    return (
        <div className='published-container' name='published'>
            <span className='published-title'>Published In</span>
            <hr />
            <div className='magazine-covers'>
                <div className='mag-img'>
                    <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/12/American-Hard-Assets-Cover-July-2014-350x425_jb.jpg'} alt='hard-assets' />
                </div>
                <div className='mag-img'>
                    <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/12/Excalibur-2013-350x425_jb.jpg'} alt='excalibur' />
                </div>
                <div className='mag-img'>
                    <img src={'https://www.knifepurveyor.com/wp-content/uploads/2020/12/Blade-August-2020-350x425_jb.jpg'} alt='wings-of-honor' />
                </div>
            </div>
        </div>
    )
}

export default Published;