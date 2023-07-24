import React, { useState, useEffect } from 'react';
// import washingmachine from '../img/washmachine.png'
import about from '../img/about2.png'
// import airconditioner from '../img/airconditioner.png'
import frige from '../img/frige2.png'
import frenqtly from "../img/frquently2.png"
import { FcPortraitMode,FcSurvey,FcOvertime } from "react-icons/fc";
import 'animate.css';
import axios from 'axios';
// import PopupForm from './PopupForm';




export default function Fridge(){
    const [number, setNumber] = useState(0);
  const [worker, setWorker] = useState(0);

  //form input

 const [name ,setName ] = useState('');
 //  const [email ,setEmail ] = useState('');
  const [phone , setPhone] = useState('');
  const [service,setService] = useState('');
  const [message ,setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 100) {
        setNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 15); // Change the interval time here (in milliseconds)

    return () => clearInterval(interval);
  }, [number]);



  useEffect(() => {
    const interval = setInterval(() => {
      if (worker < 25) {
        setWorker((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 15); // Change the interval time here (in milliseconds)

    return () => clearInterval(interval);
  }, [worker]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    const data = {
      Name:name,
      Phone:phone,
      Service:service,
      Message:message
    }
    axios.post('https://sheet.best/api/sheets/34a5f71b-ec0b-4b45-9410-5e8d6ee01b26',data).then((response)=>{
      console.log(response);
      setName('');
      setPhone('');
      setService('');
      setMessage('');
  
    })
    return(
     window.location.assign("/Thankyou")
    )

  }

  return (
    <>
    {/* <PopupForm/> */}
      <section className="Home fridge">
        < div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 home-head animate__animated animate__backInLeft">
              <h6> Home Support </h6>
              <h1>Refrigerator Home Support  For Repair & Service call <br /> 1800 1022 745</h1>
              {/* <p>We believe in every grow at your door step one stop solutions for all home based works</p> */}
              <button className="btn"><a className='home-btn' href="tel:1800 1022 745">Book Now</a> <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div className="col-lg-6 col-sm-12 head-call">
              <div className="card head-call-Now">
                <a href="tel:1800 1022 745" className="text-center text-dark   animate__animated animate__rubberBand"> Call Us Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <section className="container about" >
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="rel">
              <p className="about-img">
                <img className='about-image animate__animated animate__backInUp'  src={about} alt="" />
                </p>
              <div className="customer animate__animated animate__backInRight">
                <h1>25000+</h1>
                <h4>Customers Served</h4>
              </div>
            </div>

          </div>
          <div className="col-lg-6 col-sm-12 about-info">
            <h6>Best Refrigerator Fridge Machine Repair & Service</h6>
            <h3>About Us</h3>
            <p>
            Welcome to service center , your trusted partner for professional refrigerator repair services in Bangalore. We understand the inconvenience caused by a malfunctioning washing machine, and our team of skilled technicians is here to provide efficient and reliable repairs to get your appliance back up and running smoothly. If your refrigerator or fridge is giving you trouble, we're here to assist you. Our dedicated repair service specializes in refrigerator and fridge repairs in Bangalore City. With our team of skilled technicians and a commitment to customer satisfaction, we aim to provide efficient and reliable repairs to get your appliance running smoothly again.</p>
            <h5><i class="fa-solid fa-check tick-icon "></i>Expert Technicians</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>Customer Satisfaction​</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>Service Warranty Up To 90 Days</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>No Extra Charge​</h5>
          </div>
        </div>
      </section>

      {/* services */}

      <section className="servives">
      <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
          <h1 className='servicesh1'>Our Services</h1>
          <img className='fridge-ser-img' src={frige} alt="/" />
          <h3 className='servicesh1 servicesh3'>Refrigerator Service And Repair In Bangalore</h3>


          </div>
        </div>
 

        <div class="elementor-widget-container container service-content">
             
							<p>Are you in need of professional refrigerator service and repair in Bangalore? Look no further! We are your trusted experts in providing top-notch repairs and maintenance for refrigerators in the Bangalore area. With our skilled technicians and commitment to customer satisfaction, we aim to keep your refrigerator running smoothly and efficiently.</p><p>Our Services:</p><ol><li><p>Refrigerator Repair: Whether your refrigerator is not cooling properly, experiencing a faulty compressor, or facing any other issue, our experienced technicians can diagnose and repair it efficiently. We have extensive knowledge of various refrigerator brands and models, ensuring accurate and reliable repairs.</p></li><li><p>Refrigerator Maintenance: Regular maintenance is essential to keep your refrigerator in optimal condition. Our technicians provide thorough inspections, cleaning, and preventive maintenance to prevent future breakdowns and extend the lifespan of your appliance.</p></li><li><p>Refrigerator Parts Replacement: If your refrigerator requires any parts replacement, we only use genuine parts sourced directly from manufacturers. This ensures the highest quality and compatibility for your specific refrigerator model.</p></li><li><p>Refrigerator Troubleshooting: Is your refrigerator making unusual noises or displaying error codes? Our technicians have the expertise to troubleshoot and identify the root cause of the problem. We then provide effective solutions to resolve the issues and restore your refrigerator’s functionality.</p></li><li><p>Are you facing issues with your fridge? Look no further! We are your trusted experts in providing top-quality fridge service and repair in Bangalore. With our team of skilled technicians and a commitment to customer satisfaction, we strive to keep your fridge running smoothly and efficiently.</p><p>Our Services:</p><ol><li><p>Fridge Repair: Whether your fridge is not cooling properly, experiencing electrical problems, or facing any other issue, our experienced technicians can diagnose and repair it with precision. We have extensive knowledge of various fridge brands and models, ensuring accurate and reliable repairs.</p></li><li><p>Fridge Maintenance: Regular maintenance is key to prolonging the lifespan of your fridge and optimizing its performance. Our technicians provide thorough inspections, cleaning, and preventive maintenance to keep your fridge in excellent condition and prevent future breakdowns.</p></li><li><p>Fridge Parts Replacement: If your fridge requires any parts replacement, we only use genuine parts sourced directly from manufacturers. This ensures the highest quality and compatibility for your specific fridge model.</p></li><li><p>Fridge Troubleshooting: Is your fridge making strange noises or exhibiting unusual behavior? Our technicians have the expertise to troubleshoot and identify the root cause of the problem. We then provide effective solutions to resolve the issues and restore your fridge’s functionality.</p></li></ol><p>Why Choose Us?</p><ol><li><p>Expert Technicians: Our team of skilled technicians specializes in fridge service and repair. They have in-depth knowledge and experience in handling various fridge brands and models, ensuring accurate diagnosis and efficient repairs.</p></li><li><p>Prompt and Reliable Service: We understand the inconvenience of a malfunctioning fridge. That’s why we prioritize prompt service and strive to schedule repairs at your convenience, minimizing any disruption to your daily routine.</p></li><li><p>Affordable and Transparent Pricing: We offer competitive and transparent pricing for our services. We provide upfront cost estimates and ensure there are no hidden charges, allowing you to make informed decisions.</p></li><li><p>Genuine Parts and Quality Workmanship: We use only genuine parts sourced directly from manufacturers to ensure the longevity and optimal performance of your fridge</p></li></ol></li></ol><ul><li>Refrigerator service Bangalore</li><li>Refrigerator repair Bangalore</li><li>Professional refrigerator technicians</li><li>Affordable refrigerator repairs</li><li>Best refrigerator service in Bangalore</li><li>Reliable refrigerator maintenance</li><li>Expert refrigerator repair services</li><li>Refrigerator service center Bangalore</li><li>Emergency refrigerator repairs</li><li>Quick refrigerator service</li></ul><p><strong>At Refrigerator Service and Repair in Bangalore, we understand the importance of a properly functioning refrigerator in your daily life. That’s why we strive to provide prompt, reliable, and affordable services. Customer satisfaction is our priority, and our friendly customer support team is always available to address any inquiries or concerns you may have.</strong></p><p><strong>Contact us today to schedule your refrigerator service and repair in Bangalore. Trust us to handle your appliance with care and expertise, ensuring optimal performance and longevity.</strong></p><ol><li>Refrigerator service in Bangalore</li><li>Refrigerator repair Bangalore</li><li>Fridge repair service near me</li><li>Best refrigerator service center in Bangalore</li><li>Affordable refrigerator repair Bangalore</li><li>Professional fridge repair in Bangalore</li><li>Quick refrigerator service Bangalore</li><li>Expert refrigerator technicians Bangalore</li><li>Emergency fridge repair Bangalore</li><li>Reliable refrigerator maintenance in Bangalore</li><li>Fridge service Bangalore</li><li>Fridge repair Bangalore</li><li>Professional fridge technicians</li><li>Affordable fridge repairs</li><li>Best fridge service in Bangalore</li><li>Reliable fridge maintenance</li><li>Expert fridge repair services</li><li>Fridge service center Bangalore</li><li>Emergency fridge repairs</li><li>Quick fridge service</li></ol><p>LG Refrigerator Repair Service</p><p>Bosch Refrigerator Repair Service Center</p><p>Samsung Refrigerator Repair Service Center</p><p>Whirlpool Refrigerator Repair Service Center</p><p>Godrej Refrigerator Repair Service Center</p><p>Haier Refrigerator Repair Service Center</p>
              {/* <ul><li><h1>
                <a className='service-content-call' href="tel:1800 1022 745">Call Now</a></h1></li>
                </ul>					 */}
            	</div>
      </section>

   

      {/* Contact us */}

      <section className="contact container">
        <div className="contact-info">
          <div className="row">
            <div className="col-lg-6 col=sm-12 contact-head">
              <h2>Honesty is the best policy. We communicate honestly. No hidden fees, no surprises, no upsells! Only honest work and trustworthy staff.</h2>
              <div className="row">
                <div className="col-lg-6 col=sm-12 states">
                  <h1>{worker}</h1>
                  <p>World Class Worker</p>
                </div>
                <div className="col-lg-6 col=sm-12 states">
                  <h1>{number}%</h1>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col=sm-12 butns">
              <a href="tel:18001239687" className="contact-btn">CONTACT US <i class="fa-solid fa-arrow-right-long"></i></a>
              <a href="" className="talk-btn">LET,S TALK <i class="fa-solid fa-comments"></i></a>
            </div>
          </div>

        </div>
      </section>

      {/* whychoose */}

      <section className='whychoose text-center'>
        <h1>Why Choose Us</h1>
        <div className='container'>
          <div className="row choose-1">
            <div className="col-lg-4 col-sm-12 choose">
              <h3>LOW-COST INSPECTION</h3>
              <h6>0% service charge if the service is availed. Service charges only applicable for visiting and inspection at the lowest price.</h6>
            </div>
            <div className="col-lg-4 col-sm-12 choose">
              <h3>90 DAYS WARRANTY</h3>
              <h6>All appliance services are covered by 90 days warranty any issues with in our warranty period please reach us immediately.</h6>
            </div>
            <div className="col-lg-4 col-sm-12 choose">
              <h3>TRUSTED TECHNICIAN</h3>
              <h6>Home Works provides only experienced technicians to fulfill the service requirement.</h6>
            </div>
          </div>
          
        </div>

      </section>

      {/* service center */}

      <section className="servicecenter container">
        <h6>SERVICE CENTER</h6>
        <h4>How It Works</h4>
        <div className="row">
          <div className="col-lg-6 col-sm-4 center-info">
            <FcSurvey className='center-info-img'/>
            <h6>CHOOSE A SERVICES</h6>
            <p>Just submit mobile number we’ll call you</p>
          </div>
          <div className="col-lg-6 col-sm-4 center-info">
            <FcOvertime className="center-info-img"/>
            <h6>BOOK SERVICE</h6>
            <p>Our executive will call and confirm appointment time</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-4 center-info Sit-back">
          <FcPortraitMode className='center-info-img'/>
            <h6>SIT BACK & RELAX</h6>
            <p>An expert, technician will come on time at your doorstep!</p>
          </div>
        </div>
      </section>
      {/* Asked questions  */}
      <section className="container-fluid Askedques text-center">
        <h1>- FREQUENTLY ASKED QUESTIONS -</h1>
        <h2>Got questions? We’ve got answers. send us</h2>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img className='frenqtly-img' style={{maxWidth: "100%"}} src={frenqtly} alt="" />
          </div>
          <div className="col-lg-6 col-sm-12 dropDownlist">
            <div className="dropdown col-sm-12">
              <button className="btn dropdown-toggle Drops" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                What If repair does not last
              </button>
              <ul className="dropdown-menu Drops" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                {/* <li><a className="dropdown-divider"></li> */}
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div className="dropdown col-sm-12">
              <button className="btn dropdown-toggle Drops" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Pay After Service
              </button>
              <ul className="dropdown-menu Drops" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                {/* <li><a className="dropdown-divider"></li> */}
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div className="dropdown col-sm-12">
              <button className="btn dropdown-toggle Drops" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Stress Free Service
              </button>
              <ul className="dropdown-menu Drops" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                {/* <li><a className="dropdown-divider"></li> */}
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div className="dropdown col-sm-12">
              <button className="btn dropdown-toggle Drops" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Is There Any Hidden Cost
              </button>
              <ul className="dropdown-menu Drops" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                {/* <li><a className="dropdown-divider"></li> */}
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* contactusnew */}
      <section className="contactusnew container">
        <div className="row ">
          <div className="col-lg-6 col-sm-12 contactusnew-info">
            <h5 className='contacting'>CONTACT US</h5>
            <h2>If you have any questions, please feel free to contact us, our customer service center is working for you 24/7</h2>

            <form className='form-group contactNew-form' onSubmit={handleSubmit} action=''>
              <div className="mb-3">
                <label for="exampleInputName1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                 onChange={(e)=> setName(e.target.value)} value={name}
                />
               
              </div>
              {/* <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                 onChange={(e)=>setEmail(e.target.value)} value={email}
                />
                
              </div> */}
              <div className="mb-3">
                <label for="exampleInputSubjext1" className="form-label">Phone number</label>
                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                 onChange={(e)=>setPhone(e.target.value)} value={phone}
                
                />
              </div>
              <label for="exampleInputSubjext1" className="form-label">Service You Need</label>
              <select type="text"  name='service' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
               onChange={(e)=>setService(e.target.value)} value={service}
              >
                <option value="Select Your Service">Select Your Service</option>
                <option value="Washing Machine Service and Repair">Washing Machine Service and Repair</option>
                <option value="Fridge Service and Repair">Fridge Service and Repair</option>
                <option value="Microwave Ovan Service and Repair">Microwave Ovan Service and Repair</option>
                {/* <option value="">Other</option> */}
            </select>
              <div className="mb-3">
                <label for="exampleInputSubjext1" className="form-label">Your message (optional)</label>
                <textarea type="text" className="form-control" id="exampleInputtextarea1" aria-describedby="emailHelp" 
                 onChange={(e)=>setMessage(e.target.value)} value={message}
                />
              </div>
              <button type="submit" className="btn contactNew-form-btn">Submit</button>
            </form>

          </div>
          <div className="col-lg-6 col-sm-12  contactnew-right">
            <div className="d-flex ">
              <div className='iconsNew'><i className="fa-solid fa-location-dot"></i></div>
              <div className='contact-head'>
                <h5>Location</h5>
                <p>Bangalore </p>
              </div>
            </div>
            <div className="d-flex">
              <div className='iconsNew'><i className="fa-solid fa-phone-volume"></i></div>
              <div className='contact-head' >
                <h5>Make A Call</h5>
                <p>1800 1022 745</p>
              </div>
            </div>
            <div className="d-flex ">
              <div className='iconsNew'><i className="fa-solid fa-envelope"></i>
              </div>
              <div className='contact-head'>
                <h5>Email</h5>
                <p>info@customerhomesupport24x7.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="Disclaimer row text-center p-5">
            <div className="col-lg-12 col-sm-12 ">
                <h4>DISCLAIMER</h4>
                <h6>WE ARE AN INDEPENDENT SERVICE PROVIDER AND WE HAVE NO AUTHORIZATION FROM ANY COMPANY: AS "ANY HOME APPLIANCES AUTHORIZED CUSTOMER CARE". WE DEAL WITH ALL APPLIANCES PRODUCTS ONLY AFTER THE STANDARD ONE YEAR WARRANTY.</h6>
            </div>
        </div>
    </>
    )
}