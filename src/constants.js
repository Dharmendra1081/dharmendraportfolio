// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det1.png';
import csprepLogo from './assets/work_logo/cs_prep1.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Front End Developer",
      company: "Neoteric Infotech",
      date: "Dec 2024 - Present",
      desc: "Developed dynamic and scalable web applications using React.js and modern JavaScript, focusing on reusable UI components, state management, and API integration. Collaborated with cross-functional teams to build responsive interfaces, implement RESTful Apis, and optimize frontend performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "material UI",
        "Bootstrap"
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Front End Intern",
      company: "Oasis Infobyte",
      date: "March 2024 - April 2024",
      desc: "Worked as a Frontend Developer Intern in a virtual environment, developing responsive web interfaces using HTML, CSS, and JavaScript. Built a personal portfolio website and a temperature converter application, emphasizing clean UI, responsiveness, and core JavaScript functionality.",
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Web Design",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "CodSoft",
      date: "February 2024 - March 2024",
      desc: "Worked as a Frontend Developer Intern in a virtual environment, focusing on designing and implementing responsive user interfaces using HTML, CSS, JavaScript, Bootstrap. Collaborated with designers to convert Figma wireframes and prototypes into interactive, user-friendly web pages while following responsive design best practices..",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Responsive Web Design"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "AKTU, Lucknow",
      date: "jun 2022 - July 2025",
      grade: "7.81 CGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) degree under Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow. During my academic journey, I built a strong foundation in computer science and engineering concepts, including Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I worked on practical projects and assignments that enhanced my problem-solving skills and hands-on development experience. My education has helped me develop strong analytical thinking, technical proficiency, and readiness for real-world software development challenges.",
      degree: "Bachelor Of Technology - (B.Tech)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BTEUP, Lucknow",
      date: "jun 2019 - july 2022",
      grade: "74.2%",
      desc:  "I completed my Polytechnic Diploma in Computer Science Engineering (CSE) under the Board of Technical Education, Uttar Pradesh (BTEUP), Lucknow. During this program, I gained strong practical and technical knowledge in core computer science subjects such as Programming Fundamentals, Data Structures, Database Management Systems, Web Development, and Computer Networks. The curriculum emphasized hands-on learning through lab work and projects, which helped me develop problem-solving skills and a solid understanding of real-world software development concepts.",
      degree: "Polytechnic Diploma - (Polytechnic -CSE)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shiva Convent Inter College, Jhansi",
      date: "March 2017 - April 2018",
      grade: "71%",
      desc: "I completed my Intermediate (Class 12) from Shiva Convent Inter College, Jhansi, studying Physics, Chemistry, and Mathematics (PCM) along with Computer Science, which built a strong foundation in analytical and technical skills.",
      degree: "Intermediate - (12th) PCM",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Mahatma Jyotiba R P H S Birguwan, jhansi",
      date: "Apr 2015 - May 2016",
      grade: "70%",
      desc: "I completed my High School (Class 10) from Mahatma Jyotiba R P H S, Birguwan, Jhansi, where I studied Science with Computer.",
      degree: "High School, (10th)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Cara (E-Commerce Website)",
      description:
        "Developed a responsive e-commerce web application using HTML, CSS, and JavaScript with product listing, interactive UI, and smooth user navigation across devices.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Web design"],
      github: "https://github.com/Dharmendra1081/E-CommerceWebsite.git",
      webapp: "https://ecommercewebsite-cara.netlify.app/",
    },
    {
      id: 1,
      title: "Scry Ai (Responsive Web Interface Design)",
      description:
        "Designed and developed a fully responsive website layout featuring a modern header and multiple content sections to showcase strong responsive web design skills. Built using HTML, CSS, JavaScript, and jQuery, the interface includes a visually rich hero section, smooth interactions, and well-structured layouts. The website is optimized for both mobile and desktop devices, ensuring consistent performance, usability, and visual appeal across all screen sizes.",
      image: csprepLogo,
      tags: [ "HTML", "CSS", "JavaScript", "Responsive Web Design", "Responsive Header", "Jquery"],
      github: "https://github.com/Dharmendra1081/ScryAi.git",
      webapp: "https://scryai.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
  ]; 