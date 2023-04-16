import './Madun.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MadunImage from '../../images/slider2-lg.png'
import M1 from '../../images/m/1m.jpg'
import M2 from '../../images/m/2m.jpg'
import M3 from '../../images/m/3m.png'
import M4 from '../../images/m/4m.jpg'

function Madun() {
    return (
        <div className=' d-flex flex-column '>
            <div className=' d-flex flex-column justify-content-between '>
                <Header />
                <img className='img img-fluid' src={MadunImage} alt="madun" />
                <div className='container'>
                    <h2 className='text-center madun-title'> MADUN</h2>
                    <h4 className='ali-cabbar-m'>a film by ali cabbar</h4>
                    <p className='madun-first-p'>Serhad works for Mehmet whose employees are illegal black refugees selling watches. He falls in love with an illegal refugee woman, Aida. Even he finds a job for her to work with them. However, everything will not be as good as expected.
                    </p>
                    <h3 className='madun-subtitles'>Fragment of Film</h3>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJ1WDr4stSs" title="MADUN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className='madun-subtitles'>Festival Journey</h3>
                    <ul className='madun-rest-p'>
                        <li>21. Izmir International Short Film Festival, Official Selection, (Turkiye, 2020)</li>
                        <li> 7. International Usak Winged Seahorse Short Film Festival, National Short Film Competition (Turkiye, 2020)</li>
                        <li> 16. International Labor Film Festival, Official Selection (Turkiye 2021)</li>
                        <li>Taste of Anatolia - Films from Turkey (United Kingdom, 2021)</li>
                        <li>Seattle Turkish Film Festival Short Films (STFF Shorts) (USA, 2021)</li>
                        <li>9. Kayseri Film Festivali, National Competition, (Turkiye, 2021)</li>
                        <li> 3rd International Erzincan Short Film Festival, National Competition, (Turkiye, 2021)</li>
                    </ul>
                    <h3 className='madun-subtitles'>Gallery</h3>
                    <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={M1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={M2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={M3} className="d-block w-100" alt="..." />
                            </div>

                            <div className="carousel-item">
                                <img src={M4} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>

                <Footer />
            </div>

        </div >
    )
}

export default Madun