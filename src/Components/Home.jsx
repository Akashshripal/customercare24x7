// import React from "react";
import React, { useState, useEffect } from 'react';
import washingmachine from '../img/washmachine.png'
import about from '../img/about1.png'
import airconditioner from '../img/airconditioner.png'
import frige from '../img/frige.png'
import frenqtly from "../img/frquently.png"
import { FcPortraitMode,FcSurvey,FcOvertime } from "react-icons/fc";
import 'animate.css';
import axios from 'axios';



export default function Home() {

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
   

  }

  return (
    <>
      {/* <PopupForm/> */}
      <section className="Home">
        < div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 home-head animate__animated animate__backInLeft">
              {/* <h6>Service Support </h6> */}
              <h6>Home Support </h6>
              <h1>Home Support 24x7
                In Call @ <br /> 1800 1022 745</h1>
              <p>We believe in every grow at your door step one stop solutions for all home based works</p>
              <button className="btn"><a className='home-btn' href="tel:1800 1022 745">Book Now</a> <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div className="col-lg-6 col-sm-12 head-call">
              <div className="card head-call-Now">
                <a href="tel:1800 1022 745" className ="text-center text-dark  head-call-Now-btn animate__animated animate__rubberBand">Feel Free To Call Us Now</a>
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
            <h6>5 YEARS OF EXPERIENCE</h6>
            <h3>About Us</h3>
            <p>Welcome to our Washing Machine and Refrigerator Repair Service Center! We are a trusted and reliable service center specializing in the repair and maintenance of washing machines and refrigerators. With years of experience in the industry, we have built a reputation for providing top-quality repairs, excellent customer service, and affordable solutions to residents in Bangalore. Our team of skilled technicians is well-trained and knowledgeable in handling a wide range of washing machine and refrigerator brands and models. We understand the importance of these appliances in your daily life, and our goal is to ensure that they are functioning optimally, keeping your clothes clean and fresh, and your food preserved at the right temperature.</p>
            <h5><i class="fa-solid fa-check tick-icon "></i>Doorstep Service In 90 Min</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>Appliances Service Reasonable Price</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>Service Warranty Up To 90 Days</h5>
          </div>
        </div>
      </section>

      {/* services */}

      <section className="services">
        <div className="row">
          <div className="col-lg-12 col-sm-12  text-center">
          <h1 className='servicesh1'>Our Services</h1>
          </div>
        </div>
           

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-12 service-card   animate__animated animate__bounceInLeft">
              <img className="service-img" src={washingmachine} alt="" />
              <h2>Washing Machine</h2>
              <p>If there is any problem with the washing machine, then you have to contact the technician or washing machine service center. If you are searching for an online service, Service center   is the right solution for your washing machine. We offers you the service at reliable prices with quality service</p>
              <ul>
                <li>Fully Automatic Washing Machine</li>
                <li>Automatic Washing Macine</li>
                <li>Semi Automatic Washing Machine</li>
                <li>Manual Washing Machine</li>
                <li>Front & Top Load Washing Machine</li>
              </ul>
              <p className="text-center"> <a href="tel:1800 1022 745" className="btn  butn"><i className="fa-solid fa-phone"></i> Book Now</a>
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 service-card animate__animated animate__bounceInUp">
              <img className="service-img" src={airconditioner} alt="" />
              <h2>Air Conditioner</h2>
              <p>Here are different types of problems in AC, such as, you may face recurring problems if you ignore maintenance, such as leaking hoses, clogged air filters, noisy fans, gas leaks, etc,  If smaller problems come you can do it by yourself, and for the major problems, you have to contact us for your ac works</p>
              <ul>
                <li>Central Air Conditioning. </li>
                <li>Ductless, Mini-Split Air Conditioner.</li>
                <li>Window Air Conditioner. </li>
                <li>Portable Air Conditioner.</li>
                <li>Hybrid Air Conditioners.</li>
              </ul>
              <p className="text-center"> <a href="tel:1800 1022 745" className="btn  butn"><i className="fa-solid fa-phone"></i> Book Now</a>
              </p>
            </div>
            <div className="col-lg-4 col-sm-12 service-card animate__animated animate__bounceInRight">
              <img className="service-img" src={frige} alt="" />
              <h2>Refrigerator</h2>
              <p>If your fridge stops working or there is an external problem, we have the best technicians for all types of fridge repair services in Bangalore. Most of these types of refrigerators are repaired by our technicians We enables you to provide service at an affordable price on the day you book or call for service</p>
              <ul>
                <li>Double Door refrigerators</li>
                <li>French Door refrigerators</li>
                <li>Single Door refrigerators</li>
                <li>All Door refrigerators</li>
                <li>Side-by-side refrigerators</li>
              </ul>
              <p className="text-center"> <a href="tel:1800 1022 745" className="btn  butn"><i className="fa-solid fa-phone"></i> Book Now</a>
              </p>
            </div>
          </div>
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
              <a href="tel:1800 1022 745" className="contact-btn">CONTACT US <i class="fa-solid fa-arrow-right-long"></i></a>
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
          <div className="row">
            <div className="col-lg-4 col-sm-12 choose">
              <h3>Competitive Pricing</h3>
              <h6>We offer affordable and transparent pricing for our repair services. Our upfront cost estimates ensure that you have a clear understanding of the expenses involved, with no hidden charges.</h6>
            </div>
            <div className="col-lg-4 col-sm-12 choose">
              <h3>Customer Satisfaction</h3>
              <h6>Customer satisfaction is our utmost priority. We are dedicated to delivering exceptional service and ensuring that our customers are satisfied with the results..</h6>
            </div>
            <div className="col-lg-4 col-sm-12 choose">
              <h3>Timely Service:</h3>
              <h6>We value your time and strive to provide prompt and timely service. Our technicians will arrive at your location on schedule, equipped with the necessary tools and parts to complete the repairs efficiently.</h6>
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
            {/* <img src="https://servicecentersupport24x7.co.in/wp-content/uploads/2023/03/time-1.png" alt="" /> */}
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
                <p>Banglore</p>
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