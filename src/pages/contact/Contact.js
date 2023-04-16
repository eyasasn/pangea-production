import './Contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Contact() {
    return (
        <div className=' d-flex flex-column  '>
            <div className=' d-flex flex-column justify-content-between'>
                <Header />
                <div className='bg-contact'>
                    <div className='container text-center'>
                        <h2 className='contact-title'> CONTACT</h2>
                        <h3 className='contact-p'>info@pangeaproduction.net</h3>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default Contact