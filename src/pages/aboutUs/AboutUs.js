import './AboutUs.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function AboutUs() {
    return (
        <div className=' d-flex flex-column  '>
            <div className=' d-flex flex-column justify-content-between'>
                <Header />
                <div className='bg-about-us'>
                    <div className='container '>
                        <h3 className='about-us-title'>About Pangea Production</h3>
                        <p className='about-us-first-p'>Pangea film company was founded in Istanbul by director
                            <a href='https://vimeo.com/alicabbar' className='black-part'>  Ali Cabbar</a>  , whose films won awards at various international festivals. The company,
                            which closely follows the world and wants to tell stories about human rights and
                            environmental justice from local to universal, wants to make innovative films that
                            center sustainability. In addition, the company serves as a local producer for
                            international productions and co-produces projects in which it shares similar
                            perspectives.</p>
                    </div>
                </div>
                <Footer />

            </div>


        </div >
    )
}

export default AboutUs