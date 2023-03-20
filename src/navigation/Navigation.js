import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'

function navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default navigation