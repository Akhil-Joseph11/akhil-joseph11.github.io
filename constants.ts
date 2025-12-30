import { ContentItem, ContentType } from './types';

const IMAGES = {
  thumbnail: '/images/Akhil-Thumbnail.jpg', 
  bench: '/images/Akhil-2.jpg', 
  beach: '/images/Akhil-3.jpg', 
  restaurant: '/images/Akhil-1.jpg', 
};

export const RESUME_DATA: ContentItem[] = [
  {
    id: 'exp-1',
    type: ContentType.Experience,
    title: 'Institute for Creative Technologies',
    subtitle: 'Systems Development Intern',
    date: 'May 2025 – August 2025',
    location: 'Los Angeles, USA',
    description: [
      'Applied Gaussian Splatting techniques to reconstruct high-fidelity 3D models of urban buildings from multi-angle drone and ground-level imagery.',
      'Extracted and processed frames from large-scale video datasets to generate dense 3D point clouds.',
      'Collaborated with researchers to optimize photogrammetry pipelines and rendering workflows.'
    ],
    image: '/images/USC-ICT.png',
    isLogo: true,
    matchPercentage: 98,
    tags: ['3D Modeling', 'Computer Vision', 'Gaussian Splatting', 'Research'],
    link: 'https://ict.usc.edu/'
  },
  {
    id: 'exp-2',
    type: ContentType.Experience,
    title: 'Shell',
    subtitle: 'Software Engineer',
    date: 'August 2022 – August 2024',
    location: 'Bangalore, India',
    description: [
      'Developed core features for Monitoring Data Foundation (MDF) to transform raw data into hierarchical data models.',
      'Built full-stack solutions (MERN) supporting front-end and back-end development.',
      'Engineered data integration pipelines enabling Excel-based imports and structured data exports.',
      'Achieved a 20% increase in operational efficiency through system connectivity.'
    ],
    image: '/images/Shell-logo.png',
    isLogo: true,
    matchPercentage: 99,
    tags: ['MERN Stack', 'Data Engineering', 'React', 'Node.js'],
    link: 'https://www.shell.com/'
  },
  {
    id: 'exp-3',
    type: ContentType.Experience,
    title: 'UBS',
    subtitle: 'Summer Intern',
    date: 'June 2021 – August 2021',
    location: 'Hyderabad, India',
    description: [
      'Implemented ML models (XGBoost, SVM, Logistic Regression) to classify financial risk, boosting accuracy by 20%.',
      'Automated Excel-based workflows using Alteryx, cutting manual processing time by 70%.',
      'Saved roughly 40 team hours/month through automation.'
    ],
    image: '/images/UBS-logo.jpg',
    isLogo: true,
    matchPercentage: 95,
    tags: ['Machine Learning', 'Python', 'Automation', 'Alteryx'],
    link: 'https://www.ubs.com/'
  },
  {
    id: 'proj-1',
    type: ContentType.Project,
    title: 'Online Banking Portal',
    subtitle: 'Full-Stack MERN Application',
    date: 'May 2025',
    description: [
      'Developed a secure online banking app with user registration, fund transfers, and real-time updates.',
      'Implemented RESTful APIs with role-based access controls and encryption.',
      'Integrated Stripe payment gateway and built an admin dashboard for transaction monitoring.'
    ],
    image: '/images/Banking-Portal.jpg',
    isLogo: false,
    matchPercentage: 97,
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'JWT'],
    link: 'https://github.com/Akhil-Joseph11'
  },
  {
    id: 'proj-2',
    type: ContentType.Project,
    title: 'Intrusion Detection System',
    subtitle: 'Deep Learning Security',
    date: 'March 2025',
    description: [
      'Engineered DNNs and CNNs for Intrusion Detection Systems using the NSL-KDD dataset.',
      'Attained 84.26% accuracy, outperforming existing benchmarks.',
      'Enhanced performance using Adaptive Synthetic Sampling (ADASYN) for class imbalance.'
    ],
    image: '/images/Intrusion-Detection.jpg',
    isLogo: false,
    matchPercentage: 94,
    tags: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
    link: 'https://github.com/Akhil-Joseph11'
  },
  {
    id: 'edu-1',
    type: ContentType.Education,
    title: 'University of Southern California',
    subtitle: 'MS in Computer Science',
    date: 'Aug 2024 – May 2026',
    location: 'Los Angeles, USA',
    description: [
      'Current GPA: 3.91/4.0',
      'Specializing in advanced computing systems and AI.'
    ],
    image: '/images/USC-logo.png',
    isLogo: true,
    matchPercentage: 100,
    tags: ['Masters', 'CS', 'AI'],
    link: 'https://www.usc.edu/'
  },
  {
    id: 'edu-2',
    type: ContentType.Education,
    title: 'Vellore Institute of Technology',
    subtitle: 'Bachelors in Computer Science',
    date: 'July 2018 – May 2022',
    location: 'Vellore, India',
    description: [
      'CGPA: 9.11/10.0',
      'Core foundations in Computer Science and Software Engineering.'
    ],
    image: '/images/VIT-logo.png',
    isLogo: true,
    matchPercentage: 100,
    tags: ['Bachelors', 'CS', 'Engineering'],
    link: 'https://vit.ac.in/'
  },
  {
    id: 'skill-1',
    type: ContentType.Skill,
    title: 'Full-Stack Development',
    subtitle: 'MERN Stack Specialty',
    description: [
      'React, Node.js, Express, MongoDB',
      'JavaScript (ES6+), HTML, CSS',
      'REST APIs'
    ],
    image: '/images/FullStack-Development.jpg',
    matchPercentage: 99,
    tags: ['Frontend', 'Backend', 'Web'],
  },
  {
    id: 'skill-2',
    type: ContentType.Skill,
    title: 'Languages & Core',
    subtitle: 'Programming Foundations',
    description: [
      'Python, Java, C++, SQL',
      'Data Structures & Algorithms'
    ],
    image: '/images/Languages-Core.jpg',
    matchPercentage: 98,
    tags: ['Coding', 'Algorithms'],
  },
  {
    id: 'skill-3',
    type: ContentType.Skill,
    title: 'Tools & Cloud',
    subtitle: 'DevOps & Data',
    description: [
      'Git, Azure, Power BI, Alteryx, OpenCV'
    ],
    image: '/images/Tools-Cloud.jpg',
    matchPercentage: 95,
    tags: ['Cloud', 'DevOps', 'Data'],
  },
  {
    id: 'ach-1',
    type: ContentType.Achievement,
    title: 'VIT Hack 2020 Winner',
    subtitle: '1st Place Hackathon',
    description: [
      'Developed a deep learning model to classify large-scale e-commerce data from Amazon.',
      'Secured 1st place among competitive teams.'
    ],
    image: '/images/VIT-logo.png',
    isLogo: true,
    matchPercentage: 100,
    tags: ['Hackathon', 'Winner', 'AI'],
  },
  {
    id: 'ach-2',
    type: ContentType.Achievement,
    title: 'Competitive Chess',
    subtitle: 'Rated 1900+',
    description: [
      'Multiple tournament wins.',
      'Strategic thinker with a rating of 1900+.'
    ],
    image: '/images/Chess.jpg',
    matchPercentage: 90,
    tags: ['Strategy', 'Chess'],
    link: 'https://lichess.org/@/AkhilJoseph'
  }
];

export const HERO_CONTENT = {
  title: "AKHIL JOSEPH",
  subtitle: "Full-Stack Engineer & AI/ML Specialist",
  description: "Join Akhil on a journey through scalable MERN Stack development, advanced AI & Machine Learning, and the frontier of Large Language Models (LLMs). From Los Angeles to Bangalore, witness the code that powers the future.",
  images: [IMAGES.bench, IMAGES.beach, IMAGES.thumbnail]
};

export const CONTACT_INFO = {
  phone: "(213) 994-1538",
  email: "akhiljos@usc.edu",
  linkedin: "https://linkedin.com/in/akhiljoseph11",
  github: "https://github.com/Akhil-Joseph11",
  location: "Los Angeles, CA 90007",
  resume: "https://drive.google.com/file/d/1ET-qTAfESo9Ntg9yZBRsCsZMqIjhORec/view?usp=sharing" 
};

export const PROFILE_IMAGE = IMAGES.thumbnail;