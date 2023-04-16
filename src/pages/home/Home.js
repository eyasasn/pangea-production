import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Slider1xs from '../../images/slider1-xs.png'
import Slider2xs from '../../images/slider2-xs.png'
import Slider3xs from '../../images/slider3-xs.png'
import Slider1lg from '../../images/slider1-lg.png'
import Slider2lg from '../../images/slider2-lg.png'
import Slider3lg from '../../images/slider3-lg.png'


function Home() {
    return (
        <div className=' d-flex flex-column '>
            <div className=' d-flex flex-column justify-content-between '>
                <Header />
                <div id="carouselExampleControls" className="carousel slide " data-ride="carousel" data-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active"  >
                            <a href='/gardens-petrified'>
                                <img src={Slider1lg} className="w-100 d-none d-sm-none d-md-block d-lg-block d-xl-block" alt="garden's petrified" />
                                <img src={Slider1xs} className="w-100 d-block d-sm-block d-md-none d-lg-none d-xl-none" alt="garden's petrified" />
                            </a>
                        </div>
                        <div className="carousel-item" >
                            <a href='/madun'>
                                <img src={Slider2lg} className=" w-100 d-none d-sm-none d-md-block d-lg-block d-xl-block " alt="madun" />
                                <img src={Slider2xs} className=" w-100 d-block d-sm-block d-md-none d-lg-none d-xl-none" alt="madun" />
                            </a>
                        </div>
                        <div className="carousel-item" >
                            <a href='/moms-pale-flowers'>
                                <img src={Slider3lg} className=" w-100 d-none d-sm-none d-md-block d-lg-block d-xl-block" alt="mom's pale flowers" />
                                <img src={Slider3xs} className=" w-100 d-block d-sm-block d-md-none d-lg-none d-xl-none" alt="mom's pale flowers" />

                            </a>
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

export default Home