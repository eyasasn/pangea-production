import './Header.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand brand-first-part" href="/">PANGEA <span className='brand-second-part'>PRODUCTION</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa-menu" role="button" >
                    <i className="fa fa-bars" aria-hidden="true" style={{ color: "#979797" }}></i>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active ">
                        <a className="nav-link pl-3 pr-3" href="/">HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-3 pr-3" href="/about-us">ABOUT US</a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle pl-3 pr-3" href="#/" role="button" data-toggle="dropdown" aria-expanded="false">
                            WORKS
                        </a>
                        <div className="dropdown-menu dropdown-menu-right mt-0 ">
                            <a className="dropdown-item dropdown-item-list" href="/gardens-petrified">Gardens Petrified</a>
                            <a className="dropdown-item dropdown-item-list" href="/madun">Madun</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item dropdown-item-title" href="#/">Upcoming</a>
                            <a className="dropdown-item dropdown-item-list" href="/moms-pale-flowers">Mum's Pale Flowers</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pl-3" href="/contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Header