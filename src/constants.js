// Skills Section Logo's
import javascriptLogo from './assets/tech_logo/javascript.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import cppLogo from './assets/tech_logo/cpp.svg';
import bashLogo from './assets/tech_logo/bash.svg';
import wiresharkLogo from './assets/tech_logo/wireshark.svg';
import splunkLogo from './assets/tech_logo/splunk.svg';
import wazuhLogo from './assets/tech_logo/wazuh.jpeg';

// Experience Section Logo's

// Education Section Logo's
import comsatsLogo from './assets/education_logo/comsats.png';
import punjabCollegeLogo from './assets/education_logo/punjab.png';


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

// Certifications Section Logo's
import googleCertLogo from './assets/certifications_logo/Google.webp';
import iscCertLogo from './assets/certifications_logo/ISC.avif';
import forageCertLogo from './assets/certifications_logo/forage.jpg';
import developersHubLogo from './assets/company_logo/company.jpeg';


export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Bash', logo: bashLogo },
      { name: 'Wireshark', logo: wiresharkLogo },
      { name: 'Splunk', logo: splunkLogo },
      { name: 'Wazuh', logo: wazuhLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: developersHubLogo,
      role: "CyberSecurity Intern",
      company: " DevelopersHub Corporation",
      date: "September 2021 - August 2022",
      desc: "I worked as a CyberSecurity Intern at DevelopersHub Corporation, where I gained hands-on experience in identifying and mitigating security vulnerabilities. I assisted in conducting security assessments, implementing security measures, and monitoring for potential threats. This internship provided me with valuable insights into cybersecurity best practices and enhanced my skills in protecting digital assets.",
      skills: [
        "SIEM Tools",
        "Vulnerability Assessment",
        "Network Security",
        "Incident Response",
        "Cyber Threat Intelligence",
        "Security Auditing",
        "Risk Management",
        "Firewalls and IDS/IPS",
        "Security Awareness Training",
        "Compliance and Regulations",
      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: comsatsLogo,
      school: "COMSATS University, Islamabad, Vehari Campus",
      date: "Feb 2023 - June 2027",
      grade: "2.9 CGPA",
      desc: "I have completed my Bachelor's degree in Computer Applications from COMSATS University, Islamabad, Vehari Campus. During my time at COMSATS, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development,Computers Networks,Information Security and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at COMSATS University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: punjabCollegeLogo,
      school: "Punjab Group of Colleges",
      date: "Sept 2020 - Aug 2023",
      grade: "70%",
      desc: "I have completed my intermediate education from Punjab Group of Colleges, under the BISE board, where I studied Physics, Chemistry, and Mathematics (PCM). During my time at Punjab Group of Colleges, I gained a strong foundation in these core subjects. I actively participated in various academic and extracurricular activities, which helped me develop critical thinking and problem-solving skills. My experience at Punjab Group of Colleges has been instrumental in preparing me for higher education and shaping my academic journey.",
      degree: "Intermediate - FSc (Pre-Engineering)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "CSS"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "",
      description:
        "A React-based application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 6,
      title: "",
      description:
        "An ed-users access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "",
      description:
        "An efficient background  app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];

  export const certifications = [
    {
      id: 0,
      img: googleCertLogo,
      title: "Google cybersecurity professional certificate",
      organization: "Google",
      date: "March 2026",
      credentialId: "M9PA86HW7V5K",
      desc: "Completed a comprehensive cybersecurity professional certificate course covering network security, threat analysis, and incident response. Gained practical skills in securing systems and protecting against cyber threats, demonstrating a strong commitment to cybersecurity best practices.",
    },
    {
      id: 1,
      img: iscCertLogo,
      title: "ISC2 Certified in Cybersecurity (CC)",
      organization: "ISC2",
      date: "Feb 2026",
      credentialId: "ad31edc6-0616-43fe-8784-bad65563ebf6",
      desc: "I have earned the ISC2 Certified in Cybersecurity (CC) certification, demonstrating my foundational knowledge and skills in cybersecurity principles and practices. This certification validates my understanding of key cybersecurity concepts, including risk management, network security, and incident response, showcasing my commitment to maintaining a secure digital environment.",
    },
    {
      id: 2,
      img: forageCertLogo,
      title: "Mastercard Cybersecurity Virtual Experience Program",
      organization: "Forage",
      date: "March 10, 2026",
      credentialId: "snJLeZL8R5jyFNKBY",
      desc: "Completed the Mastercard Cybersecurity Virtual Experience Program on Forage, where I worked through practical cybersecurity tasks including threat identification, security awareness, and incident response activities in a simulated business environment.",
    },
    {
      id: 3,
      img: forageCertLogo,
      title: "Datacom - Cyber Security Operations Job Simulation",
      organization: "Forage",
      date: "March 2026",
      credentialId: "LM4gg6tZNmcBkniNN",
      desc: "Completed the Datacom Cyber Security Operations Job Simulation on Forage, where I gained hands-on experience in cybersecurity operations, including monitoring security events, analyzing threats, and responding to incidents in a simulated enterprise environment.",
    },
    {
      id: 4,
      img: forageCertLogo,
      title: "Tata Cybersecurity Security Analyst Job Simulation",
      organization: "Forage",
      date: "March 2026",
      credentialId: " sbK9h5AnsxAaTtakP",
      desc: "Completed the Tata Cybersecurity Security Analyst Job Simulation on Forage, where I developed practical skills in cybersecurity analysis, including threat detection, vulnerability assessment, and incident response in a simulated corporate environment.",
    },
  ];  

  