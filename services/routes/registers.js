const express = require('express');
const router = express.Router();


var response = {
  firstname:"shanmukha",
  cv:"https://drive.google.com/file/d/15CyoPcOMKNwfQbOBSeNndcnn5FsQVNwZ/view?usp=sharing",
  lastname:"mangadahalli siddaramu",
  img:"C:/Users/mangadsa/Documents/myapp/myappbe/shaan.jpg",
  title:"Intern in the field of RF and SATCOM Systems at Fraunhofer IIS",
  currentlocation:"Erlangen, Bavaria, Germany",
  about:`I am a Software Developer with 4 years of work experience mainly in Backend Development (Database and APIs) and Data Science (Recommendation System, NLP and Neural Networks). 
   As a person, I am a Enthusiastic Learner, Creative who likes to lead an Honest Life. `,
  expereince:[
    {
      title:"Intern in the field of RF and SATCOM Systems - GUI Development",
      type:"Internship",
      company:"Fraunhofer IIS",
      location:"Erlangen, Germany",
      startdate:"01.02.2021",
      enddate:"30.06.2021",
      tasks:["Support research and development activities through hardware programming (C, Python). Development of GUI using NodeJS and VueJS."]
    },
    {
      title:"Research-Assistant in IoT Development",
      type:"Work-Student",
      company:"EAH Jena",
      location:"Jena, Germany",
      startdate:"01.05.2020",
      enddate:"30.11.2020",
      tasks:["Developing IoT Projects involving Embedded systems (microcontroller- Raspberry pi, Esp32 and Teensy) with Wireless communication and Cameras for controlling the remote vehicle and getting the live camera feed. Created Web Interface for Camera Feed and controlling the remote vehicle with NodeJS, Sockets and ReactJS."]
    },
    {
      title:"Sr. Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"31.05.2018",
      enddate:"01.10.2019",
      tasks:["Design and Development of Knowledge Graph and User Recommendation Systems using Machine Learning Algorithms (Python) for learning platforms which is used by multiple clients as a tool for reskilling their workforce.",
      "Data Analysis with Python, NumPY, Pandas",
      "Software Development using MERN stack",
      "Database: PostgreSQL, Neo4J", 
      "Enterprise Search Solution for mid to large organization using Elasticsearch and NodeJS.",
    "Managed a group of 3 Interns- Training and Assigning the work"]
    },
    {
      title:"Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"02.06.2017",
      enddate:"31.05.2018",
      tasks:["APIs using ASP.NET (Web API, Entity Framework)", "Cutomised Javascript & C# Document Viewer for word, pdf, ppt and xlx docs",
      "Database: MS - SQL, Elasticsearch", "Enterprise Search Solution for mid to large organization using SharePoint and C#."]
    },
    {
      title:"Trainee in Programming, Data Structures and Algorithms, Web Development",
      type:"Training",
      company:"Infosys Limited",
      location:"Mysuru, India",
      startdate:"02.01.2017",
      enddate:"31.05.2017",
      tasks:["Python, SQL, Java, Computer Networks and AngularJS"]
    },
  ],
  education:[
    {
      school:"Ernst-Abbe-Hochschule Jena",
      degree:"M.Sc. in Scientific Instrumentation - Microsystems",
      subjects:["Micro and nano technology","Scientific Computing with Python", "Solid State Physics", "FEM and 3D Design",],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Jena, Germany"
    },
    {
      school:"Visvesvaraya Technological University",
      degree:"B.E. in Electronics & Communication",
      subjects:["CMOS Analog Circuit Design", "HDL - VHDL & Verilog", "Embedded Systems", "Signal Theory and Communication Systems",],
      startdate:"27.08.2012",
      enddate:"10.06.2016",
      location:"Bengaluru, India"
    }
  ],
  skills2:[
    {name:"Concepts",info:"Object Oriented Programming, Data Structures & Algorithms",level:"" },
    {name:"Frontend Technologies",info:"VueJS, ReactJS, HTML, CSS",level:"" },
    {name:"Designing Tool",info:"Photoshop",level:"" },
    
  ],
  skills1:[
    {name:"Programming Laungages", info:"NodeJS, Python, JavaScript, C#, JAVA",level:"" },
    {name:"Databases",info:"SQL, NOSQL (Elasticsearch and MongoDB) & Neo4J",level:"" },
    {name:"Machine Leaning", info:"Recommendation Systems & Neural Networks",level:"" },
    {name:"Data Analysis", info:"Python, NumPY, Pandas",level:"" },
    
  ],
  courses:[
    {
      name:"Machine Learning A-Z™: Hands-On Python In Data Science",
      instructor:"Kirill Eremenko & Hadelin de Ponteves",
      institute:"Udemy",
      topics:["Data Preprocessing, Regression, Classification, Clustering, NLP, Neural Networks",],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Online",
    },
    {
      name:"Complete Guide to Image Processing with MATLAB",
      instructor:"Fawaz Sammani",
      institute:"Udemy",
      topics:["Theory of Image Processing, apply it in MATLAB, and design a GUI to interface it!"],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Online",
    },
  ],
  projects:[
    {
      name:"Circuit Design for Band Gap Reference and Low Drop Regulator in Cadence Virtuosso",
      team:"Kirill Eremenko & Hadelin de Ponteves",
      technology:"Cadence Virtuosso",
      topics:["Designing BGR with a target output voltage of 1.2V with a maximum variation of 75mV as specs with Monte Caro Simulation. For LDO, targetting of 5 mA as load current for MPHY driver."],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Online",
    },
  ],
  awards:[
    {
      name:"Insta Award for Continuous and Outstanding Contribution to the Team (Infosys Limited)",
      year:"2019",
    },
    {
      name:"Best Academic Performance Award in Bachelor's Degree ",
      year:"2016",
    },
    {
      name:"Best All Rounder Award/Best Outgoing Student in High School",
      year:"2012",
    },
    {
      name:"Elected as Head Boy of School and President of the Science Club",
      year:"2010-2012",
    },
  ],
  activities:[
    {
      name:"Imparting computer-based knowledge to underprivileged students.",
    },
    {
      name:"Organized various cultural, technical events through out School and College",
    },
    {
      name:"Skilled Graphics Designer.",
    },
    {
      name:"Athletic (Long Distance Runner), Basketball Player, Movie Making, Painting",
    },
  ],
  contacts:[
    
    {url:'mailto:shanmukha.krish123@gmail.com', icon:'mdi-gmail'},
        {url:'https://www.linkedin.com/in/shanmukha-m-s/', icon:'mdi-linkedin'},
        {url:'https://github.com/shanmukhams', icon:'mdi-github'},
        
  ]
}

router.get('/', async (req, res) => {
 
  res.send(response);
});


module.exports = router;