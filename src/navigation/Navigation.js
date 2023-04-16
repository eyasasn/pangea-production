import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'
import GardensPetrified from '../pages/gardensPetrified/GardensPetrified'
import Madun from '../pages/madun/Madun'
import AboutUs from '../pages/aboutUs/AboutUs'
import Contact from '../pages/contact/Contact'
import MomsPaleFlowers from "../pages/momsPaleFlowers/MomsPaleFlowers"


function navigation() {
    return (
        <Routes forceRefresh={true}>
            <Route path="/" element={<Home />} />
            <Route path="/gardens-petrified" element={<GardensPetrified />} />
            <Route path="/madun" element={<Madun />} />
            <Route path="/moms-pale-flowers" element={<MomsPaleFlowers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default navigation