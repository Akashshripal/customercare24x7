import  React  from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
       
        <footer className="footer">
         <div className="container footer-data">

            <div className="row about-footer pb-5">
            <div className="col-lg-12 col-sm-12 footer-item text-center">
                <h6>About Us</h6>
                <p>We Service Center has been taking care of appliances for the past 15 years and considering our vast clientele, we can rightly be called as thought leaders. Take a look at the brand that we have are working with.</p>
                {/* <div><a className="footer-icon" href="#"><i class="fa-brands fa-facebook-f"></i></a> <a className="footer-icon" href="#"><i class="fa-brands fa-twitter"></i></a> <a className="footer-icon" href="#"><i class="fa-brands fa-linkedin-in"></i></a> <a className="footer-icon" href="#"><i class="fa-brands fa-behance"></i></a></div> */}
            </div>
            </div>
         <div className="row pb-5">        
            <div className="col-lg-4 col-sm-12 footer-item">
                <h6>Services</h6>
                {/* <p>Home</p>
                <p>Refrigerator Repair Service </p>
                <p>Washing Machine Repair Service </p>
                <p>Terms & Conditions</p> */}
                <ul>
                    <li className="nav-item"><Link className="nav-link"  to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="/fridge">Refrigerator Repair Service </Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="/Machine">Washing Machine Repair Service </Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="">About Us</Link></li> 
                    <li className="nav-item"><Link className="nav-link"  to="">Terms &amp; Conditions</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link"  to="">Privacy Policy</Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="">Contact Us</Link></li>*/}
                </ul>
            </div>
            <div className="col-lg-4 col-sm-12 footer-item ">
                <h6>Company</h6>
                <ul>
                    <li className="nav-item"><Link className="nav-link"  to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="/fridge">Refrigerator Repair Service </Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="/Machine">Washing Machine Repair Service </Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="">About Us</Link></li> 
                    <li className="nav-item"><Link className="nav-link"  to="">Terms &amp; Conditions</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link"  to="">Privacy Policy</Link></li>
                    <li className="nav-item"><Link className="nav-link"  to="">Contact Us</Link></li>*/}
                </ul>
            </div>
            <div className="col-lg-4 col-sm-12 footer-item footer-contact text-center">
                <h6 className="footer-contact1">Contact Us</h6>
                <h6>ADDRESS</h6>
                <p>All over banglore</p>
                <h6>EMAIL</h6>
                <p><a className="footer-contacting"  href="mailto:info@customerhomesupport24x7.in"><i class="fa-solid fa-envelope"></i> info@customerhomesupport24x7.in</a></p>
                <h6>CONTACT</h6>
                <p><a className="footer-contacting" href="tel:18001022745"><i class="fa-solid fa-phone"></i>18001022745</a></p>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
                <div className="line"></div>
            </div>
         </div>
         
         <div className="footer-bootom">
         <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <p className="footer-text">© Bangluru Service Center. All Right Reserved - Designed & Hosted By Web Universals </p>
                </div>
                {/* <div className="col-lg-4 text-center logo">
                    <a href="#"><img className="footer-logo" src="https://servicecenter24x7.in/wp-content/uploads/2023/06/images-1.png" alt="Logo"/></a>
                </div> */}
                {/* <div className="col-lg-4 text-right newsletter">
                    <form action="#">
                        <div className="input-group">
                            <input className="footer-input form-control" type="email" placeholder="Enter your e-mail"  name="email"/>
                            <span className="footer-input">
                                <button type="submit">
                                    <i className="fa fa-paper-plane arrow-icon"></i>
                                </button>  
                            </span>
                        </div>
                    </form>
                </div> */}
            </div>
         </div>
        
         </div>
         <div className="row text-center call-now-down">
         <a className="call-now-Down" href="tel:18001022745">
            <div className="col-lg-12 col-sm-12"><i className="fa-solid fa-phone"></i> Book now</div>
         </a>
         </div>
        </footer>
        </>
    )
}