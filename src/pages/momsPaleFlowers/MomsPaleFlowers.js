import './MomsPaleFlowers.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MomsPaleFlowersImage from '../../images/slider3-lg.png'
function MomsPaleFlowers() {
    return (

        <div className=' d-flex flex-column '>
            <div className='d-flex flex-column justify-content-between '>
                <Header />
                <img className='img img-fluid' src={MomsPaleFlowersImage} alt="momspaleflowers" />
                <div className='container'>
                    <h2 className='text-center moms-pale-flowers-title '> MOM'S PALE FLOWERS</h2>
                    <h4 className='ali-cabbar-p'>a film by ali cabbar</h4>
                    <p className='moms-pale-flowers-first-p'>Bahadır, a struggling artist living in Istanbul is forced
                        to return to his native Anatolian village to grieve the death of his father and oversee the grape
                        harvest. But what he finds home is a reckoning. Behind him, his father left a widow in need of support, lands of vines to manage and a pile of debt that must be paid back. Over the course of a week Bahadir’s sense of purpose fractures. He is forced to consider his failure as an artist and starts to ponder if maybe his life would be best served in his hometown. He rekindles with his childhood friend Ahmet and his ex-girlfriend Feride whose disillusion seems to echo his own. But even that newfound familiarity is threatened when it becomes obvious cultivating grapes is no longer viable. Climate change has made production increasingly difficult in a landscape stricken with drought and inflation. Before his eyes, Bahadir witnesses his livelihood and his family’s heritage on the brink of disintegration. A decision must be made, hope for a miracle, or sell the land to pay back the debt and head for the unknown. Whatever the choice, it will be painful.
                    </p>
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default MomsPaleFlowers