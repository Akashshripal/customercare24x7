import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12">
                        {/* <p><i className="fa-solid fa-location-dot icon"></i>Whitefield Banglore</p> */}
                        <p><i className="fa-solid fa-envelope icon"></i>info@yourdomainname.com</p>

                    </div>
                    <div className="col-lg-2 col-sm-12"><i className="fa-solid fa-phone icon"></i> 80123455667</div>
                    <div className="col-lg-5 col-sm-12">
                        <p className="text-end">
                            <i className="fa-solid fa-clock icon"></i> All Days 7:00 AM – 8:00 PM
                        </p>
                        {/* <p className="text-end">
                            <i className="fa-brands fa-facebook-f icon-color"></i>
                            <i className="fa-brands fa-twitter icon-color"></i>
                            <i className="fa-brands fa-linkedin-in icon-color"></i>
                        </p> */}

                    </div>
                </div>
            </div>

            <nav className=" navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <a className="navbar-brand" href="#"> <img className="logo" src="https://servicecenter24x7bangalore.in/wp-content/uploads/2023/06/images-1.png" alt="logo" /></a> */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul data-in="#" data-out="#" className="nav navbar-nav me-auto mb-2 p fs-10 naving" id="menu-new-menu ">
                            <li className="nav-item"><Link className="nav-link"  to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/fridge">Refrigerator Repair Service </Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="/Machine">Washing Machine Repair Service </Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="">About Us</Link></li> 
                            <li className="nav-item"><Link className="nav-link"  to="">Terms &amp; Conditions</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link"  to="">Privacy Policy</Link></li>
                            <li className="nav-item"><Link className="nav-link"  to="">Contact Us</Link></li>*/}
                        </ul>

                        {/* <div className="input-group rounded search">
                            <input type="search" className="form-control rounded bg-light" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </div> */}
                    </div>
                </div>
            </nav>

        </>

    )

}
