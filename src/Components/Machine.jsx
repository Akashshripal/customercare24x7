import React, { useState, useEffect } from 'react';
import washingmachine from '../img/washmachine.png'
import about from '../img/about3.png'
import airconditioner from '../img/airconditioner.png'
import frige from '../img/frige.png'
import frenqtly from "../img/frquently.png"
import Machine01 from "../img/Machine-01.png"
import Machine02 from "../img/Machine-02.png"
import { FcPortraitMode,FcSurvey,FcOvertime } from "react-icons/fc";
import 'animate.css';
import axios from 'axios';
// import PopupForm from './PopupForm';



export default function Machine() {

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
    // window.location.assign("/Thankyou")

  }
  return (
    <>
    {/* <PopupForm/> */}
      <section className="Home machine">
        < div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 home-head animate__animated animate__backInLeft">
              {/* <h6> Service Center </h6> */}
               <h6> Home Support  </h6>
              <h1>Washing Machine  Home Support  For Repair & Service
                <br />1800 1022 745</h1>
              <button className="btn"><a className='home-btn' href="tel:1800 1022 745">Book Now</a> <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div className="col-lg-6 col-sm-12 head-call">
              <div className="card head-call-Now">
                <a href="tel:18003137897" className="text-center text-dark   animate__animated animate__rubberBand">Fell Free To Call</a>
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
                <img className='about-image animate__animated animate__backInUp' src={about} alt="" />
              </p>
              <div className="customer animate__animated animate__backInRight">
                <h1>25000+</h1>
                <h4>Customers Served</h4>
              </div>
            </div>

          </div>
          <div className="col-lg-6 col-sm-12 about-info">
            <h6>Best Washing Machine Repair & Service</h6>
            <h3>About Us</h3>
            <p>Welcome to service center , your trusted partner for professional washing machine repair services in Bangalore. We understand the inconvenience caused by a malfunctioning washing machine, and our team of skilled technicians is here to provide efficient and reliable repairs to get your appliance back up and running smoothly. Are you experiencing issues with your washing machine? Don't worry, we are here to help! Our professional and reliable washing machine repair service in Bangalore is just a call away. With years of experience and a team of skilled technicians, we provide prompt and efficient repairs for all types and brands of washing machines.</p>
            <h5><i class="fa-solid fa-check tick-icon "></i>Expert Technicians</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>Customer Satisfaction</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>Service Warranty Up To 90 Days</h5>
            <h5><i class="fa-solid fa-check tick-icon"></i>No Extra Charge</h5>
          </div>
        </div>
      </section>

      {/* services */}

      <section className="services container">
        <div className="row">
          <div className="col-lg-12 col-sm-12  text-center">
            <h1 className='servicesh1'>Services We Provide</h1>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-6 col-sm-12 machine-page">
            <img src={Machine01} alt="" style={{"height" : "366px", "width" : "550px"}}/>
             <h1>Top Load Washing Machine</h1>
              <p>Is your top load washing machine in need of professional repair? Look no further! Our specialized service is dedicated to providing efficient and reliable repairs for top load washing machines in Bangalore City. With our team of skilled technicians and commitment to customer satisfaction, we aim to restore your appliance to optimal working condition.</p>
              <p>Our Services:</p>
              <ol>
                <li><p>Agitator Repair: If your top load washing machine’s agitator is not functioning properly or making unusual noises, our experienced technicians can diagnose the issue and repair or replace the agitator as necessary.</p></li>
                <li><p>Spin Cycle Problems: If your washing machine is not spinning or is spinning unevenly, our experts will thoroughly inspect the motor, drive belt, and other components to identify and resolve the underlying problem.</p></li>
                <li><p>Water Leakage Resolution: Water leakage can be a frustrating issue that can lead to further damage. Our skilled technicians will meticulously examine your washing machine to locate the source of the leak and perform the required repairs to stop the leakage.</p></li>
                <li><p>Timer and Control Panel Repair: Malfunctions in the timer or control panel can disrupt the washing cycle. Our technicians are proficient in diagnosing and rectifying problems related to the control panel, ensuring smooth operation of your top load washing machine.</p></li>
                <li><p>Drainage System Maintenance: If your washing machine is experiencing drainage issues, our technicians will examine the drain pump, hoses, and filters to remove any blockages and restore proper drainage functionality.</p></li>
                <li><p>Electrical Fault Diagnosis and Repair: From faulty wiring to sensor or switch problems, electrical malfunctions can hamper the performance of your top load washing machine. Our skilled technicians will carefully diagnose and resolve electrical issues to ensure optimal functioning.</p></li>
              </ol>
              <p><strong>Contact us today to schedule reliable top load washing machine repair service in Bangalore City. Trust us to handle your appliance with care and expertise, providing effective solutions to restore the functionality of your top load washing machine.</strong></p>
              <p>LG washing Machine Service</p>
              <p>Samsung Washing Machine Service</p>
              <p>Bosch Washing Machine Service</p>
              <p>Whirlpool Washing Machine Service</p>
              {/* <p>IFB Washing Machine Service</p> */}
              {/* <ul>
                <li>
                  <h1><a href="tel:18003137897">Call Now</a></h1>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-6 col-sm-12 machine-page">
            <img src={Machine02} alt="" style={{"height" : "366px", "width" : "550px"}}/>
            <h1>Front Loading Washing Machine</h1>
              <p>
              Is your top load washing machine in need of professional repair? Look no further! Our specialized service is dedicated to providing efficient and reliable repairs for top load washing machines in Bangalore City. With our team of skilled technicians and commitment to customer satisfaction, we aim to restore your appliance to optimal working condition.
                </p>
              <p>Our Services:</p>
              <ol>
                <li><p>
                Agitator Repair: If your top load washing machine’s agitator is not functioning properly or making unusual noises, our experienced technicians can diagnose the issue and repair or replace the agitator as necessary.
                  </p></li>
                <li><p>
                Spin Cycle Problems: If your washing machine is not spinning or is spinning unevenly, our experts will thoroughly inspect the motor, drive belt, and other components to identify and resolve the underlying problem.
                  </p></li>
                <li><p>
                Control Panel and Electronic Component Repairs: Issues with the control panel or electronic components can disrupt the functioning of your front load washing machine. Our experts can troubleshoot and repair these components to restore proper operation.
                  </p></li>
                <li><p>
                Drainage System Maintenance: If your washing machine is not draining properly, our technicians will inspect and clean the drain pump, hoses, and filters to remove any blockages and restore smooth drainage.
                </p></li>
                <li><p>
                Error Code Diagnosis and Resolution: If your front load washing machine displays error codes, our technicians will identify the specific issue causing the error and provide effective solutions to resolve it.
                </p></li>
                <li><p>
                Electrical Fault Diagnosis and Repair: From faulty wiring to sensor or switch problems, electrical malfunctions can hamper the performance of your top load washing machine. Our skilled technicians will carefully diagnose and resolve electrical issues to ensure optimal functioning.
                  </p></li>
              </ol>
              <p><strong>Contact us today to schedule reliable top load washing machine repair service in Bangalore City. Trust us to handle your appliance with care and expertise, providing effective solutions to restore the functionality of your top load washing machine.</strong></p>
              <p>LG washing Machine Service</p>
              <p>Samsung Washing Machine Service</p>
              <p>Bosch Washing Machine Service</p>
              <p>Whirlpool Washing Machine Service</p>
              <p>IFB Washing Machine Service</p>
              {/* <ul>
                <li>
                  <h1><a href="tel:18003137897">Call Now</a></h1>
                </li>
              </ul> */}
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
            <img className='frenqtly-img' style={{ maxWidth: "100%" }} src={frenqtly} alt="" />
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
                <p>Bangalore</p>
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