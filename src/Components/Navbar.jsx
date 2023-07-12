import React from 'react';

export default function Navbar() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        <p><i className="fa-solid fa-location-dot icon"></i>Whitefield Banglore</p>
                        <p><i className="fa-solid fa-envelope icon"></i>support@servicecenter24x7bangalore.in</p>

                    </div>
                    <div className="col-lg-2 col-sm-12"><i className="fa-solid fa-phone icon"></i> 18003137897</div>
                    <div className="col-lg-5 col-sm-12">
                        <p className="text-end">
                            <i className="fa-solid fa-clock icon"></i>Office Hours: Monday to Saturday 9 :00 AM – 7:45 PM
                        </p>
                        <p className="text-end">
                            <i className="fa-brands fa-facebook-f icon-color"></i>
                            <i className="fa-brands fa-twitter icon-color"></i>
                            <i className="fa-brands fa-linkedin-in icon-color"></i>
                        </p>

                    </div>
                </div>
            </div>

            <nav className=" navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"> <img className="logo" src="https://servicecenter24x7bangalore.in/wp-content/uploads/2023/06/images-1.png" alt="logo" /></a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul data-in="#" data-out="#" className="nav navbar-nav me-auto mb-2 p fs-10" id="menu-new-menu ">
                            <li className="nav-item"><a className="nav-link" title="Home" href="">Home</a></li>
                            <li className="nav-item"><a className="nav-link" title="Refrigerator &amp; Fridge  Repair Service Bangalore" href="">Refrigerator &amp; Fridge  Repair Service Bangalore</a></li>
                            <li className="nav-item"><a className="nav-link" title="Washing Machine Repair Service Bangalore" href="">Washing Machine Repair Service Bangalore</a></li>
                            <li className="nav-item"><a className="nav-link" title="Terms &amp; Conditions" href="">Terms &amp; Conditions</a></li>
                            <li className="nav-item"><a className="nav-link" title="Privacy Policy" href="">Privacy Policy</a></li>
                            <li className="nav-item"><a className="nav-link" title="Contact Us" href="">Contact Us</a></li>
                            <li className="nav-item"><a className="nav-link" title="About Us" href="">About Us</a></li>
                        </ul>

                        <div className="input-group rounded search">
                            <input type="search" className="form-control rounded bg-light" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}
