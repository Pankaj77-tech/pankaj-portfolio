// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import nestJsLogo from './assets/tech_logo/NestJS-logo.jpeg';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import pragmaLogo from './assets/company_logo/pragma-logo.jpeg';
import blue9Logo from './assets/company_logo/Blue9-logo.jpeg';

// Education Section Logo's
import cbseLogo from './assets/education_logo/CBSE-logo.png';
import aktuLogo from './assets/education_logo/AKTU-logo.png';

// Project Section Logo's
import mayaAppLogo from './assets/work_logo/maya.png';
import lsqLogo from './assets/work_logo/lsq-logo.jpeg';
import sgbLogo from './assets/work_logo/sbg_bond.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      {name: 'HTML', logo: htmlLogo},
      {name: 'CSS', logo: cssLogo},
      {name: 'JavaScript', logo: javascriptLogo},
      {name: 'React JS', logo: reactjsLogo},
      {name: 'Redux', logo: reduxLogo},
      {name: 'Tailwind CSS', logo: tailwindcssLogo},
      {name: 'Material UI', logo: materialuiLogo},
      {name: 'Bootstrap', logo: bootstrapLogo},
    ],
  },
  {
    title: 'Backend',
    skills: [
      {name: 'Node JS', logo: nodejsLogo},
      {name: 'Nest JS', logo: nestJsLogo},
      {name: 'Express JS', logo: expressjsLogo},
      {name: 'MySQL', logo: mysqlLogo},
      {name: 'PostgreSQL', logo: postgreLogo},
    ],
  },
  {
    title: 'Languages',
    skills: [
      {name: 'JavaScript', logo: javascriptLogo},
      {name: 'TypeScript', logo: typescriptLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      {name: 'Git', logo: gitLogo},
      {name: 'GitHub', logo: githubLogo},
      {name: 'VS Code', logo: vscodeLogo},
      {name: 'Postman', logo: postmanLogo},
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: pragmaLogo,
    role: 'Fullstack Developer',
    company: 'Pragma Apps & Technologies Private Technologies',
    date: 'February 2022 - Present',
    desc: 'Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance. Contributed to various projects, improving the efficiency and functionality of software applications. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    skills: [
      'JavaScript',
      'React JS',
      'TypeScript',
      'Node JS',
      'Tailwind CSS',
      'MySQL',
      'Redux',
      'Nest Js',
    ],
  },
  {
    id: 1,
    img: blue9Logo,
    role: 'Software Engineer',
    company: 'Blue9 Technologies',
    date: 'June 2021 - Jan 2022',
    desc: 'Contributed to innovative projects as a Software Engineer, leading frontend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.',
    skills: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
];

export const education = [
  {
    id: 0,
    img: aktuLogo,
    school: 'AKTU , Lucknow',
    date: 'July 2016 - September 2020',
    grade: '8.44 CGPA',
    desc: 'I have completed my Bachelor degree (B.Tech) in Mechanical Enginnering from AKTU Lucknow.',
    degree: 'Bachelor of Technology (B.Tech)',
  },
  {
    id: 1,
    img: cbseLogo,
    school: 'Durgawati Hemraj Tah Saraswati Vidya Mandir, Nehru Nagar Ghaziabad',
    date: 'Apr 2015 - March 2016',
    grade: '82.8%',
    desc: 'I completed my class 12 education from Durgawati Hemraj Tah Saraswati Vidya Mandir, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.',
    degree: 'CBSE(XII) - PCM with Computer Science',
  },
  {
    id: 2,
    img: cbseLogo,
    school: 'Durgawati Hemraj Tah Saraswati Vidya Mandir, Nehru Nagar Ghaziabad',
    date: 'Apr 2013 - March 2014',
    grade: '9.4 CGPA',
    desc: 'I completed my class 10 education from Durgawati Hemraj Tah Saraswati Vidya Mandir, under the CBSE board, where I studied Science with Computer.',
    degree: 'CBSE(X), Science with Computer Application',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Maya App',
    description: 'Maya is a mental health app designed especially for young adults, students, and healthcare professionals who may be facing stress, anxiety, or other mental health challenges.The app works like a structured course — as users complete one part (called a cartridge), new parts unlock for them. Some programs are time-based, meaning users can only access new sessions after a few days or a week.',
    image: mayaAppLogo,
    tags: ['React JS', 'Nest JS', 'My SQL', 'Rest API'],
    // github: 'https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS',
    // webapp: 'https://githubprofiledetective.netlify.app/',
  },
  {
    id: 1,
    title: 'Sovereign Gold Bonds Tools',
    description: 'A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.',
    image: sgbLogo,
    tags: ['React JS', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    // github: 'https://github.com/codingmastr/Movie-Recommendation-App',
    // webapp: 'https://movie-recommendation-app-jet.vercel.app/',
  },
  {
    id: 2,
    title: 'QR Code Scanner',
    description: 'A cross-platform mobile application for an innovative attendance system that utilizes QR code scanning to log user entries. The app captures and stores detailed login data, including real-time GPS location and precise timestamps, and maintains a complete activity history per user. Additionally, implemented a dynamic map feature that visually displays recent login locations to enhance traceability and provide intuitive geographic insights into user activity.',
    image: pragmaLogo,
    tags: ['React JS', 'Nest JS', 'Express', 'HTML', 'CSS', 'JavaScript'],
    // github: 'https://github.com/codingmastr/CSPrep',
    // webapp: 'https://csprep.netlify.app/',
  },
  {
    id: 3,
    title: 'Leadsquared CRM',
    description: 'A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.',
    image: lsqLogo,
    tags: ['React JS', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript'],
    // github: 'https://github.com/codingmastr/CSPrep',
    // webapp: 'https://csprep.netlify.app/',
  },
];
