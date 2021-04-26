const express = require('express');
const router = express.Router();


var response = {
  firstname:"shanmukha",
  lastname:"mangadahalli siddaramu",
  img:"C:/Users/mangadsa/Documents/myapp/myappbe/shaan.jpg",
  title:"Intern in the field of RF and SATCOM Systems at Fraunhofer IIS",
  currentlocation:"Erlangen, Bavaria, Germany",
  about:`I am a Software Developer with 4 years of work experience mainly in Backend Development (Database and APIs) and Data Science (Recommendation System, NLP and Neural Networks). 
   As a person, I am a Enthusiastic Learner, Creative who likes to lead an Honest Life. `,
  expereince:[
    {
      title:"Intern in the field of RF and SATCOM Systems",
      type:"Internship",
      company:"Fraunhofer IIS",
      location:"Erlangen, Bavaria, Germany",
      startdate:"01.02.2021",
      enddate:"30.06.2021",
      description:"Support research and development activities through hardware programming (C, Python). Development of GUI using NodeJS and VueJS."
    },
    {
      title:"Research-Assistant in IoT Development",
      type:"Work-Student",
      company:"EAH Jena",
      location:"Erlangen, Bavaria, Germany",
      startdate:"01.05.2020",
      enddate:"30.11.2020",
      description:"Developing IoT Projects involving Embedded systems (microcontroller- Raspberry pi, Esp32 and Teensy) with Wireless communication and Cameras for controlling the remote vehicle and getting the live camera feed. Created Web Interface for Camera Feed and controlling the remote vehicle with NodeJS, Sockets and ReactJS."
    },
    {
      title:"Sr. Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"31.05.2018",
      enddate:"01.10.2019",
      description:`Design and Development of Knowledge Graph and User Recommendation Systems using Machine Learning Algorithms (Python) for learning platforms which is used by multiple clients as a tool for reskilling their workforce.
      Data Analysis with Python, NumPY, Pandas.
      Software Development using MERN stack.
      Database: PostgreSQL, Neo4J. Enterprise Search Solution for mid to large organization using Elasticsearch and NodeJS.`
    },
    {
      title:"Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"02.06.2017",
      enddate:"31.05.2018",
      description:`Software Development using ASP.NET (Web API, Entity Framework).
      Database: MS - SQL, Elasticsearch. Enterprise Search Solution for mid to large organization using SharePoint and C#.`
    },
    {
      title:"Trainee in Programming, Data Structures and Algorithms, Web Development",
      type:"Training",
      company:"Infosys Limited",
      location:"Mysuru, India",
      startdate:"02.01.2017",
      enddate:"31.05.2017",
      description:"Python, SQL, Java, Networks and AngularJS"
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