import {
    mobile,
    backend,
    creator,
    web,
    greathire,
    grantleyEdutech,
    portfolio,
    GreatHire,
    smartBridge,
    music_time_machine,
    liver_cirrhosis
  } from "../assets";
  
  // navbar links
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // Provided Service
  const services = [
    {
      title: "Web Developer",
      icon: web,
      tech: "(Node.js,React.js)"
    },
    // {
    //   title: "React.js Developer",
    //   icon: mobile,
    // },
    {
      title: "Java Developer",
      icon: backend,
      tech:"(Spring,JDBC,DataStructures & Algorithms,OOPS)"
    },
    {
      title: "Python Developer",
      icon: creator,
      tech:"(WebScraping,Flask,FastApi,OOPS)"
    },
    {
      title: "Machine Learning & Deep Learning ",
       icon: creator,
       tech:"(Statistics,Machine Learning Algorithms,Keras,TensorFlow)"
   },
  ];
  
  // Technologies provided
  
  
  // Experiences
  const experiences = [
    {
      title: "Data Science/Data Analytics Intern",
      company_name: "Grantley Edutech Private Limited",
      icon: grantleyEdutech,
      iconBg: "#383E56",
      date: "July 2024 - September 2024",
      points: [
        "Worked with Python for data processing, analysis, and visualization.",
        "Gained experience in Power BI and Tableau for data visualization and business intelligence reporting.",
        "Analyzed real-world datasets and derived actionable insights.",
        " Applied machine learning techniques and statistical analysis for data-driven solutions",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "GreatHire",
      icon: greathire,
      iconBg: "#383E56",
      date: "Febuary 2025 - May 2025",
      points: [
        "Designing and implementing a comprehensive full-stack job portal application, GreatHire, utilizing React for the frontend,Node.js for backend development, and MongoDB for database management to facilitate optimal matching between candidates and recruiters. ",
        "Collaborating with a cross-functional team to ensure the delivery of high-quality features, minimize code conflicts, and uphold consistent coding standards throughout the project.",
        "Utilizing Git and GitHub for effective version control, actively resolving code conflicts, and enhancing the overall efficiency and productivity of the development process.",
        "Employing React and Tailwind CSS to create intuitive and responsive user interfaces, while leveraging Node.js for backend service implementation and MongoDB for robust data management.",
      ],
    },
    {
      title: "Artificial Intelligence and Machine Learning Intern",
      company_name: "SmartBridge Educational Services Pvt.Ltd.",
      icon: smartBridge,
      iconBg: "#383E56",
      date: "June 2025 - July 2025",
      points: [
        "Led a 5-member team as Team Lead under SmartBridge’s internship program.",
        "Developed an end-to-end ML solution to predict liver cirrhosis using non-invasive clinical and lab data.",
        "Built and deployed a full-stack web application using Python (Flask) for the backend and React for the frontend.",
        "Integrated model with APIs to provide real-time predictions and user-friendly interfaces.",
        "Improved prediction accuracy through feature engineering and model tuning.",
        "Deployed the solution using Netlify (frontend) and Render (backend).",
      ],
    }
    
  ];

  // Testimonials
  const testimonials = [];

// Projects section
  const projects = [
    {
      name: "TEswarReddy | Portfolio",
      description:
        "This is my portfolio web app that provide information about me and my carrer. By this portfolio you know my tech stack that i have learned and you know my project wrok and you can contact my in contact section",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "email js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/TEswarreddy/Portfolio",
    },
    {
      name: "Music Time Machine",
      description:
        "This app lets you travel back in time and discover what songs were playing on the radio on any date in history. Just enter a date, and you can even add those songs to your Spotify playlist! 🎶",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Python-FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Spotify API",
          color: "pink-text-gradient",
        },
      ],
      image: music_time_machine,
      source_code_link: "https://github.com/TEswarreddy/Music_time_machine",
    },
    {
      name: "GreatHire",
      description:
        "GreatHire.in is a web app that simplifies hiring by connecting job seekers with top employers. You can explore jobs, showcase your skills, and apply easily through a seamless interface.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: GreatHire,
      source_code_link: "https://github.com/TEswarreddy/GreatHire.git",

    },
    {
      name: "Predicting Liver Cirrhosis",
      description:
        "Built a machine learning model in Python to help detect liver disease early using patient data. Worked on making the solution easy to use, low-cost, and more accurate for real healthcare use. ",
      tags: [
        {
          name: "Machine Learning Algorithms",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: liver_cirrhosis,
      source_code_link: "https://github.com/TEswarreddy/Predicting-Liver-Cirrhosis-Using-Advanced-Machine-Learning-Techniques.git",

    }
    
  ];
  
  export { services,experiences,testimonials, projects };