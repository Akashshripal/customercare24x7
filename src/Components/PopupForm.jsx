// PopupForm.js
import React, { useState } from 'react';
import axios from 'axios';

// import './PopupForm.css'; // Apply your custom CSS styles here

const PopupForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [name ,setName ] = useState('');
//  const [email ,setEmail ] = useState('');
 const [phone , setPhone] = useState('');
 const [service,setService] = useState('');
 const [message ,setMessage] = useState('');

  const handleCloseForm = () => {
    setShowForm(false);
  };
  // const handSubmit = () => {
  //   setShowForm(false);
  //   return (
  //       alert("Thankyou we will get back to you soon")
  //   )
  // }


  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(name,email,phone,message)
    const data = {
      Name:name,
      // Email:email,P
      Phone:phone,
      Service:service,
      Message:message
    }
    axios.post('https://sheet.best/api/sheets/34a5f71b-ec0b-4b45-9410-5e8d6ee01b26',data).then((response)=>{
      console.log(response);
      setName('');
      // setEmail('');
      setPhone('');
      setService('');
      setMessage('');
        return(
          window.location.assign("/Thankyou")
    )
    
    })
    handleCloseForm();

  }
  return (
    showForm && (
      <div className="popup-form-container" >
        <div className="popup-form">
          <button className="close-button" onClick={handleCloseForm}>
            &#x2716;
          </button>

          <form className='form' onSubmit={handleSubmit} action=''>
            {/* Your form inputs go here */}
            <h3 className='text-center form-head'>Contact us</h3>
            <input type="text" placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                 onChange={(e)=> setName(e.target.value)} value={name}
            />
            {/* <br /> */}
            <input type="tel" placeholder="Phone Number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required 
                 onChange={(e)=>setPhone(e.target.value)} value={phone}
            
            />
            {/* <br /> */}
            {/* <input type="text" placeholder='Address' required/>
            <br /> */}
            {/* <select name='service' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
               onChange={(e)=>setService(e.target.value)} value={service}
            >
                <option value="">Select Your Service</option>
                <option value="">Washing Machine Service and Repair</option>
                <option value="">Fridge Service and Repair</option>
                <option value="">Microwave Ovan Service and Repair</option>
            </select> */}
            <select type="text"  name='service' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
               onChange={(e)=>setService(e.target.value)} value={service}
              >
                <option value="Select Your Service">Select Your Service</option>
                <option value="Washing Machine Service and Repair">Washing Machine Service and Repair</option>
                <option value="Fridge Service and Repair">Fridge Service and Repair</option>
                <option value="Microwave Ovan Service and Repair">Microwave Ovan Service and Repair</option>
                {/* <option value="">Other</option> */}
            </select>
            {/* <br /> */}
            <textarea type="textarea" className="form-control" placeholder='Message' id="exampleInputEmail1" aria-describedby="emailHelp" 
                 onChange={(e)=>setMessage(e.target.value)} value={message}
            
            />
            {/* <br /> */}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
