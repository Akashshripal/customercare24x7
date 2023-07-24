// import React from "react";

// export default function Thankyou(){
//     return (
//         <>
//         <div className="row">
//         <div className="col-lg-12 col-sm-12">
//         <h1>Thankyou We Will Get Back To You Soon</h1>
//         <button>Back to Home Page</button>
//         </div>
//         </div>
//         </>
//     )
// }
import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
  <div className="row pt-5 pb-5 Thankyou">
        <div className="col-lg-12 col-sm-12 text-center Thankyou-info">
        <h2>Thank You!</h2>
        <h1>We Will Get Back To You Soon</h1>  
        <button><i class="fa-solid fa-arrow-left-long"></i> <Link className="Thankyou-link" to="/">Back to Home</Link></button>
        </div>
  </div>
    </>
   
  );
};

export default ThankYou;
