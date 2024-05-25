import cimg from "../images/c++.png";
import matlab from "../images/matalb.png";
import git from "../images/git.png";
import postman from "../images/postman.png";
import sql from "../images/sql.png";
import infoaidtech from "../images/info aidtech.jpg";
import infologo from "../images/infologo.png";
import infosys from "../images/infosys.png";
import easyget from "../images/easyget.png";
import foodies from "../images/foodies.png";
import socomedia from "../images/socomedia.png";
import shoppion from "../images/shippion.png";

export const Bio = {
  name: "Hamza Raza Qureshi",
  roles: [
    "Full Stack Developer",
    "Programmer",
  ],
  description:
    "",
  github: "https://github.com/HamzaRazaQureshi",
  resume:
    "https://drive.google.com/file/d/1Vm6gNT76Wn8wS9P8CMU_ivZxybj1ulfS/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/hamza-raza-qureshi-21109a221/",
  twitter: "",
  insta: "",
  facebook: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C++",
        image:
          cimg,
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "SQL",
        image:
          sql,
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          git,
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          postman,
      },
      {
        name: "Matlab",
        image:
          matlab,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: infologo,
    role: "Python Developer Intern",
    company: "Info aidTech",
    date: "Aug 2023 - July 2023",
    desc: "Demonstrated adaptability and problem-solving skills in software development.",
    skills: [
      "Tkinter", "Python", "Time Management", "Program Creation"
    ],
    doc: infoaidtech,
  },
];

export const education = [
  {
    id: 0,
    img: "",
    school: "Usman Institute of Technology",
    date: "Octuber 2020 - June 2024",
    grade: "3.25 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science at Usman Institute of Technology, Karachi. I have completed 7 semesters and have a CGPA of 3.25.",
    degree: "Bachelors of Science in Computer Science",
  },
  {
    id: 1,
    img: "",
    school: "Adamjee Government Science College",
    date: "April 2018 - March 2020",
    grade: "71.4%",
    desc: "I completed my Intermediate Education at Adamjee Govt. Science College, Karachi.",
    degree: "Pre-Engineering",
  },
  {
    id: 2,
    // img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
    img: "",
    school: "St. Paul's English High School",
    date: "April 2008 - March 2018",
    grade: "86.8%",
    desc: "I completed my Matriculation education at St. Paul's English High School, Dankuni.",
    degree: "Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Information System",
    date: "April 2022",
    description:
      "A simple Information System using React & Nodejs",
    image:
      infosys,
    tags: [
      "React",
      "Nodejs",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/HamzaRazaQureshi/Information-System",
    webapp: "https://github.com/HamzaRazaQureshi/Information-System",
  },
  {
    id: 1,
    title: "EasyGet",
    date: "April 2023",
    description:
      "EasyGet is a similar website to YOUTUBE demo created using HTML, CSS & Js.",
    image:
      easyget,
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/HamzaRazaQureshi/EasyGet",
    webapp: "https://hamzarazaqureshi.github.io/EasyGet/",
  },
  {
    id: 2,
    title: "Foodies",
    date: "August 2022",
    description:
      "A demo website created using HTML, CSS Bootstrap.",
    image:
      foodies,
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/HamzaRazaQureshi/Foodies-website",
    webapp: "https://hamzarazaqureshi.github.io/Foodies-website/",
  },
  {
    id: 3,
    title: "Shoppion",
    date: "Octuber 2022",
    description:
      "Developed SPA Ecommerce Website using HTML, CSS, JavaScript & Bootstrap.",
    image:
      shoppion,
    tags: [
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/HamzaRazaQureshi/Ecommerce-Website",
    webapp: "https://hamzarazaqureshi.github.io/Ecommerce-Website/",
  },
  {
    id: 4,
    title: "SocoMedia",
    date: "September 2022",
    description:
      "A social media website using HTML, CSS & Javascript.",
    image:
      socomedia,
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/HamzaRazaQureshi/SocialMedia-Website",
    webapp: "https://hamzarazaqureshi.github.io/SocialMedia-Website/?",
  },
];

// export const TimeLineData = [
//   { year: 2017, text: "Started my journey" },
//   { year: 2018, text: "Worked as a freelance developer" },
//   { year: 2019, text: "Founded JavaScript Mastery" },
//   { year: 2020, text: "Shared my projects with the world" },
//   { year: 2021, text: "Started my own platform" },
// ];
