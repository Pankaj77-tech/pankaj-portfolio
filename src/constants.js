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
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
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
    desc: 'I have completed my Bachelor degree (B.Tech) in Mechanical Enginnering from Aktu Lucknow. I have completed my Bachelor degree (B.Tech) in Mechanical Engineering from Aktu Lucknow. I have completed my Bachelor degree (B.Tech) in Mechanical Engineering from Aktu Lucknow.',
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
    title: 'GitHub Profile Detective',
    description: 'A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.',
    image: githubdetLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
    github: 'https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS',
    webapp: 'https://githubprofiledetective.netlify.app/',
  },
  {
    id: 1,
    title: 'CS Prep',
    description: 'A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.',
    image: csprepLogo,
    tags: [
      'React JS',
      'Node.js',
      'MongoDB',
      'Express',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    github: 'https://github.com/codingmastr/CSPrep',
    webapp: 'https://csprep.netlify.app/',
  },
  {
    id: 2,
    title: 'Movie Recommendation App',
    description: 'A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.',
    image: movierecLogo,
    tags: ['React JS', 'API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/codingmastr/Movie-Recommendation-App',
    webapp: 'https://movie-recommendation-app-jet.vercel.app/',
  },
  {
    id: 3,
    title: 'Email Validator NPM Package',
    description: 'An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.',
    image: npmLogo,
    tags: ['React JS', 'Node.js', 'NPM', 'Validation'],
    github: 'https://github.com/codingmastr/cmtk-email-validator',
    webapp: 'https://www.npmjs.com/package/cmtk-email-validator',
  },
  {
    id: 4,
    title: 'Task Reminder Chrome Extension Tool',
    description: 'A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.',
    image: taskremLogo,
    tags: ['JavaScript', 'Chrome Extension', 'HTML', 'CSS'],
    github: 'https://github.com/codingmastr/Task-Reminder-Tool',
    webapp: 'chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci',
  },
  {
    id: 5,
    title: 'Webverse Digital',
    description: "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'Framer Motion'],
    github: 'https://github.com/codingmastr/Webverse-Digital',
    webapp: 'https://webversedigital.com/',
  },
  {
    id: 6,
    title: 'Coding Master',
    description: 'An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.',
    image: cmLogo,
    tags: ['React JS', 'Node.js', 'MongoDB', 'Express', 'Payment Integration'],
    github: 'https://codingmasterweb.in/',
    webapp: 'https://codingmasterweb.in/',
  },
  {
    id: 7,
    title: 'Image Search App',
    description: 'A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.',
    image: imagesearchLogo,
    tags: ['React JS', 'API', 'Search Feature', 'CSS', 'Javascript'],
    github: 'https://github.com/codingmastr/Image-Search-App',
    webapp: 'https://imagsearch.netlify.app/',
  },
  {
    id: 8,
    title: 'Image Background Remover',
    description: 'An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.',
    image: removebgLogo,
    tags: ['React JS', 'API', 'Image Processing', 'HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/codingmastr/Image-Background-Remover',
    webapp: 'https://removeyourbg.netlify.app/',
  },
];
