import dynamic from "next/dynamic";

const Navbar = () => {
    return(
        <>
        {/* <!--========== Header ==============--> */}
        <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
            <div className="gen-bottom-header">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="#">
                                <img className="img-fluid logo" src="images/logo-1.png" alt="streamlab-image"/>
                            </a>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form role="search" method="get" className="search-form" action="#">
                                    <label>
                                        <span className="screen-reader-text"></span>
                                        <input type="search" className="search-field" placeholder="Search …" value="" name="s" size="85"/>
                                    </label>
                                    <button type="submit" className="search-submit"><span
                                        className="screen-reader-text"></span></button>
                                </form>
                                <div id="gen-menu-contain" className="gen-menu-contain">                                
                                <ul id="gen-main-menu" className="navbar-nav ml-auto">
                                    <li className="menu-item active">
                                        <a href="/" aria-current="page">Home</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/categories">Categories</a>
                                        <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="#">Asian</a></li>
                                            <li className="menu-item"><a href="#">Amateur</a></li>
                                            <li className="menu-item"><a href="#">BBW</a></li>
                                            <li className="menu-item"><a href="#">Big Boobs</a></li>
                                            <li className="menu-item"><a href="#">Small Boobs</a></li>
                                            <li className="menu-item"><a href="#">Lesbian</a></li>
                                            <li className="menu-item"><a href="#">Show All...</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/models" aria-current="page">Models</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/livesex" aria-current="page">Live Sex</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars"></i>
                            </button>
                        </nav>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})