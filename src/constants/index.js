import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    greathire,
    grantleyEdutech,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    java,
    aws,
    portfolio,
    GreatHire,
    music_time_machine,
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
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Node.js Developer",
      icon: backend,
    },
    {
      title: "Javscript Developer",
      icon: creator,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
    {
      title: "python Developer",
      icon: creator,
    },
  ];
  
  // Technologies provided
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
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
      date: "Febuary 2025 - Now",
      points: [
        "Designing and implementing a comprehensive full-stack job portal application, GreatHire, utilizing React for the frontend,Node.js for backend development, and MongoDB for database management to facilitate optimal matching between candidates and recruiters. ",
        "Collaborating with a cross-functional team to ensure the delivery of high-quality features, minimize code conflicts, and uphold consistent coding standards throughout the project.",
        "Utilizing Git and GitHub for effective version control, actively resolving code conflicts, and enhancing the overall efficiency and productivity of the development process.",
        "Employing React and Tailwind CSS to create intuitive and responsive user interfaces, while leveraging Node.js for backend service implementation and MongoDB for robust data management.",
      ],
    },
    
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
        "🚀 GreatHire.in is a web app that simplifies hiring by connecting job seekers with top employers. You can explore jobs, showcase your skills, and apply easily through a seamless interface.",
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
      source_code_link: "https://greathire.in/",

    },
    
  ];
  
  export { services, technologies,experiences,testimonials, projects };