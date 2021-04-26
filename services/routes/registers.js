const express = require('express');
const router = express.Router();


var response = {
  firstname:"shanmukha",
  lastname:"mangadahalli siddaramu",
  img:"C:/Users/mangadsa/Documents/myapp/myappbe/shaan.jpg",
  title:"Intern in the field of RF and SATCOM Systems at Fraunhofer IIS",
  currentlocation:"Erlangen, Bavaria, Germany",
  about:"Enthusiastic Learner, Creative who likes to lead an Honest Life.",
  expereince:[
    {
      title:"Intern in the field of RF and SATCOM Systems",
      type:"Internship",
      company:"Fraunhofer IIS",
      location:"Erlangen, Bavaria, Germany",
      startdate:"1.2.2021",
      enddate:"30.6.2021",
      description:"Support research and development activities through hardware programming (C, Python). Development of GUI using NodeJS and VueJS."
    },
    {
      title:"Scientific Assistant",
      type:"Part-time",
      company:"EAH Jena",
      location:"Erlangen, Bavaria, Germany",
      startdate:"1.5.2020",
      enddate:"30.11.2020",
      description:"Developing IoT Projects involving Embedded systems (microcontroller- Raspberry pi, Esp32 and Teensy) with Wireless communication and Cameras for controlling the remote vehicle and getting the live camera feed. Created Web Interface for Camera Feed and controlling the remote vehicle with NodeJS, Sockets and ReactJS."
    },
  ],
  education:[
    {
      school:"EAH Jena",
      degree:"M.Sc. in Scientific Instrumentation - Microsystems",
      subjects:"Micro and nano technology, Solid State Physics, FEM and 3D Design",
      startdate:"2019",
      enddate:"2021",
    },
    {
      school:"GAT",
      degree:"B.E. in ECE",
      subjects:"",
      startdate:"2012",
      enddate:"2016",
    }
  ]
}

router.get('/', async (req, res) => {
 
  res.send(response);
});


module.exports = router;