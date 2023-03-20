import './Home.css'
import Header from '../../components/header/Header'
import HomeImage from '../../images/HomeImage.png'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <div className='container-fluid d-flex flex-column '>
            <div className='container d-flex flex-column justify-content-between '>
                <Header />
                <img className='img img-fluid' src={HomeImage} alt="gardens petrified" />
                <Footer />
            </div>

        </div >
    )
}

export default Home