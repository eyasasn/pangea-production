import './GardensPetrified.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GardensPetrifiedImg from '../../images/slider1-lg.png'
import GP1 from '../../images/gp/1.jpeg'
import GP2 from '../../images/gp/2.jpeg'
import GP3 from '../../images/gp/3.jpeg'
import GP4 from '../../images/gp/4.png'
import GP5 from '../../images/gp/5.png'
import GP6 from '../../images/gp/6.png'
import GP7 from '../../images/gp/7.png'

function GardensPetrified() {
    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-column justify-content-between '>
                <Header />
                <img className='img img-fluid' src={GardensPetrifiedImg} alt="gardens petrified" />
                <div className='container'>
                    <h2 className='text-center gardens-petrified-title '> GARDEN’S PETRIFIED</h2>
                    <h4 className='ali-cabbar'>a film by ali cabbar</h4>
                    <p className='gardens-petrified-first-p'>After his father's death, Yusuf goes to his village,
                        which he has not been to for years, and learns that a geothermal company wants to buy his father's
                        agricultural lands and drill a well. He wants to solve problems without disrespecting his father's memory,
                        but things don't go as he hoped and he has to make some tough decisions.
                    </p>

                    <h3 className='gardens-petrified-subtitles'>Fragment of Film</h3>

                    {/* FILM FRAGMANI */}
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/_6jPqyeITBA" title="#DISFF45 Gardens Petrified by Ali Cabbar [SHORT &amp; GREEN]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>



                    <h3 className='gardens-petrified-subtitles'>Festival Journey</h3>
                    <h3 className='gardens-petrified-subtitles-2 '>AWARDS</h3>
                    <ul className='gardens-petrified-rest-p'>
                        <li>  45th Drama International Film Festival, Short and Green International Competition, Drama Green Award, (GREECE - 2022)</li>
                        <li>  Cinema Verde Environmental Film & Arts Festival, Honorable Mention, (USA - 2022)</li>
                        <li>  İzmir International Film Festival, Other Cinema Distiribution Award, (TURKIYE - 2022)</li>
                        <li>  Uşak International Film Festival, Best Leading Act Award, (TURKIYE - 2022)</li>
                        <li>  Sultanbeyli International Short Film Festival, Metin Erksan Honorable Mention, (TURKIYE - 2022)</li>

                    </ul>
                    <h3 className='gardens-petrified-subtitles-2 '>SELECTION</h3>
                    <ul className='gardens-petrified-rest-p'>
                        <li>44th Clermont Ferrand International Short Film Festival, International Competition, World Premiere, (FRANCE - 2022)</li>
                        <li>30th Environmental Film Festival In The Nation's Capital (DCEFF), Official Selection, USA Premiere, (USA - 2022)</li>
                        <li>Cinema Verde Environmental Film & Arts Festival, International Competition, (USA - 2022)</li>
                        <li>Filmfest Bremen, Focus : Sustainability, Germany Premiere, (GERMANY  2022)</li>
                        <li>23th Landshuter Kurzfilmfestival / Landshut Short Film Festival, International Competition, (GERMANY - 2022)</li>
                        <li>10th Rural FilmFest, Official Selection, (SPAIN - 2022)</li>
                        <li>KO:SH Film Fest, İnternational Competition, Official Selection, (ALBANIA - 2022)</li>
                        <li>Taste of Anatolia - Films From Turkey, Official Selection, (UNITED KINGDOM - 2022)</li>
                        <li>45th Drama International Short Film Festival, Short and Green International Competition, (GREEK - 2022)</li>
                        <li>Humans of Film Festival, International Competition, (HOLLAND - 2022)</li>
                        <li>13th Corto e Fieno - Rural Film Festival, International Competition, (ITALY - 2022)</li>
                        <li>28th Med Film Festival, Official Selection, (ITALY - 2022)</li>
                        <li>18th Passaggi D’autore Intrecci Mediterranean Short Film Festival, Official Selection, (ITALY - 2022)</li>
                        <li>Positifly Differently Short Film Festival, Official Selection, (GREECE)</li>
                        <li>39th European Film Festival of Lille, Official Selection, (FRANCE)</li>
                        <li>MARTOVSKI - Belgrade documentary and short film festival, International Competition, (SERBIA)</li>
                        <li>LIFE AFTER OIL International Film Festival, Environmental Short, (ITALY)</li>
                        <li>23th Izmir International Short Film Festival, National Fiction Film Nomine, (TURKIYE - 2022)</li>
                        <li>9th Usak International Short Film Festival, Best National, Best Actor, Best Support Player Nomine, (TURKIYE - 2022)</li>
                        <li>Sultanbeyli International Short Film Festival, Best National, (TURKIYE - 2022)</li>
                    </ul>
                    <h3 className='gardens-petrified-subtitles'>Gallery</h3>
                    <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={GP1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={GP2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={GP3} className="d-block w-100" alt="..." />
                            </div>

                            <div className="carousel-item">
                                <img src={GP4} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={GP5} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={GP6} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={GP7} className="d-block w-100" alt="..." />
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

        </div>


    )
}

export default GardensPetrified