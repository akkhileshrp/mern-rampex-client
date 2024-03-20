// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
// import './Components/App.css';
// import myimage from './Assets/images.png';
// import Page2 from "./Page2";
// import Page3 from "./Page3";

// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <h1 className="brand"><span>Feedback Form</span></h1>
//         <div className="wrapper">
//           <div className="company-info">
//             <h3>Phoenix Web Design</h3>
//             <img src={myimage} className='img1' alt="company logo" />
//           </div>
//           <div className="contact">
//             <h3>E-mail Us</h3>
//             <form id="contact-form">
//               <p>
//                 <label>Name</label>
//                 <input type="text" name="name" id="name" required />
//               </p>
//               <p>
//                 <label>Company</label>
//                 <input type="text" name="company" id="company" />
//               </p>
//               <p>
//                 <label>E-mail Address</label>
//                 <input type="email" name="email" id="email" required />
//               </p>
//               <p>
//                 <label>Phone Number</label>
//                 <input type="text" name="phone" id="phone" />
//               </p>
//               <p className="full">
//                 <label>Message</label>
//                 <textarea name="message" rows="5" id="message"></textarea>
//               </p>
//               <p className="full">
//                 <Link to="/page2"><button type="button">Next</button></Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Routes> {/* Wrap Routes around your Route components */}
//         <Route path="/page2" element={<Page2 />} /> {/* Use element prop instead of component */}
//         <Route path="/page3" element={<Page3 />} /> {/* Use element prop instead of component */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Final from "./Final";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5/>}/>
      <Route path="/final" element={<Final/>}/>
    </Routes>
  );
};

export default App;
