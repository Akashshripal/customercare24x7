import  React  from "react";

export default function Footer(){
    return(
        <>
        <footer className="footer">
         <div className="container footer-data">
         <div className="row pb-5">
            <div className="col-lg-4 col-sm-12 footer-item">
                <h6>About Us</h6>
                <p>We Service Center  Bangalore has been taking care of appliances for the past 15 years and considering our vast clientele, we can rightly be called as thought leaders. Take a look at the brand that we have/ are working with.</p>
                <div className="footer-icon"><i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin-in"></i> <i class="fa-brands fa-behance"></i></div>
            </div>
            <div className="col-lg-2 col-sm-12 footer-item">
                <h6>Services</h6>
                <p>Home</p>
                <p>Refrigerator & Fridge Repair Service Bangalore</p>
                <p>Washing Machine Repair Service Bangalore</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="col-lg-2 col-sm-12 footer-item">
                <h6>Company</h6>
                <p>Home</p>
                <p>Refrigerator & Fridge Repair Service Bangalore</p>
                <p>Washing Machine Repair Service Bangalore</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="col-lg-4 col-sm-12 footer-item">
                <h6>Contact Us</h6>
                <h6>ADDRESS</h6>
                <p>Near your place</p>
                <h6>EMAIL</h6>
                <p>info@yourdomainname.com</p>
                <h6>CONTACT</h6>
                <p>18001239687</p>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
                <div className="line"></div>
            </div>
         </div>
         
         <div className="footer-bootom">
         <div className="row align-center">
                <div className="col-lg-12 col-sm-12">
                    <p className="footer-text">© Copyright 2021 Service Center  Designed &amp; Developed By Orion Techgen </p>
                </div>
                {/* <div className="col-lg-4 text-center logo">
                    <a href="#"><img className="footer-logo" src="https://servicecenter24x7bangalore.in/wp-content/uploads/2023/06/images-1.png" alt="Logo"/></a>
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
         <a className="call-now-Down" href="tel:80123455667">
            <div className="col-lg-12 col-sm-12"><i className="fa-solid fa-phone"></i> Book now</div>
         </a>
         </div>
        </footer>
        </>
    )
}