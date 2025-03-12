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
  ];
  
  export { services, technologies,experiences,testimonials, projects };