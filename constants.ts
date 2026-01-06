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
      'EPISODE_DESCRIPTION:Working at the intersection of research and engineering, Akhil developed automated pipelines to transform 2D drone footage into hyper-realistic 3D environments. This role focused on scaling cutting-edge Gaussian Splatting techniques for urban scene reconstruction.',
      'KEY_SCENE:3D Reconstruction: Engineered high-fidelity models of urban infrastructure using Gaussian Splatting and multi-angle drone imagery.',
      'KEY_SCENE:Data Pipelines: Built automated scripts to extract and process frames from large-scale video datasets, generating dense 3D point clouds.',
      'KEY_SCENE:Optimization: Refined photogrammetry workflows to improve rendering speed and visual quality for research-grade outputs.'
    ],
    image: '/images/USC-ICT.png',
    isLogo: true,
    matchPercentage: 98,
    tags: ['Python', 'Gaussian Splatting', 'Computer Vision', 'Photogrammetry'],
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
      'EPISODE_DESCRIPTION:Entering the Proactive Monitoring Capability Center, Akhil spent two seasons architecting mission-critical software for one of the world\'s largest energy giants. The plot focuses on the Monitoring Data Foundation (MDF)—a massive initiative to transform raw, chaotic data into structured, actionable intelligence using modern Full-Stack technologies.',
      'KEY_SCENE:Core Infrastructure: Developed the backbone of the MDF platform, designing hierarchical data models that improved operational visibility across the enterprise.',
      'KEY_SCENE:Full-Stack Architecture: Built end-to-end solutions using the MERN Stack (MongoDB, Express, React, Node.js), bridging complex back-end logic with intuitive front-end interfaces.',
      'KEY_SCENE:Data Pipelines: Engineered robust integration pipelines to streamline data ingestion, enabling seamless Excel-based imports and structured exports for global stakeholders.'
    ],
    image: '/images/Shell-logo.png',
    isLogo: true,
    matchPercentage: 99,
    tags: ['React', 'Node.js', 'MongoDB', 'Data Engineering', 'Agile Development'],
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
      'EPISODE_DESCRIPTION:In the fast-paced environment of global finance, efficiency is currency. Akhil joined the Hyderabad team to modernize legacy workflows, deploying machine learning algorithms to predict financial risk with unprecedented accuracy. A story of automation, optimization, and high-impact engineering.',
      'KEY_SCENE:Predictive Modeling: Engineered ensemble models (XGBoost, SVM) to classify financial risk, boosting prediction accuracy by 20%.',
      'KEY_SCENE:Workflow Automation: Transformed manual Excel processes into automated Alteryx pipelines, slashing processing time by 70%.',
      'KEY_SCENE:Operational Impact: Streamlined team operations, saving roughly 40 hours per month of manual labor.'
    ],
    image: '/images/UBS-logo.jpg',
    isLogo: true,
    matchPercentage: 95,
    tags: ['Python', 'XGBoost', 'Alteryx', 'Financial Modeling', 'Automation'],
    link: 'https://www.ubs.com/'
  },
  {
    id: 'proj-5',
    type: ContentType.Project,
    title: 'BrainVault - Serverless RAG SaaS Platform',
    subtitle: 'AI-Powered Knowledge Base',
    date: 'January 2026',
    description: [
      'EPISODE_DESCRIPTION:Data is useless if you can\'t talk to it. BrainVault is a production-grade SaaS platform that transforms static PDFs into interactive, conversational intelligence. By leveraging a serverless architecture, it bridges the gap between cost-effective local LLMs and high-performance cloud inference, delivering answers in milliseconds.',
      'KEY_SCENE:Serverless Orchestration: Built a scalable ecosystem using Next.js 14 (App Router) and Vercel Edge Functions, eliminating the need for persistent GPU servers while ensuring global low-latency performance.',
      'KEY_SCENE:Model-Agnostic Engine: Engineered a flexible "Brain Layer" using LangChain that seamlessly switches between privacy-focused local models (Llama 3 via Ollama) and cloud giants (Groq, OpenAI).',
      'KEY_SCENE:Semantic Intelligence: Implemented a high-precision retrieval pipeline using Pinecone Vector DB, featuring automated chunking, embedding generation, and metadata filtering for accurate citations.',
      'KEY_SCENE:Cinema-Grade UX: Features real-time token streaming (SSE), robust security via Clerk (Namespace Isolation), and a polished dark-mode UI.'
    ],
    image: '/images/BrainVault.png',
    isLogo: false,
    matchPercentage: 99,
    tags: ['Next.js 14', 'TypeScript', 'LangChain', 'Pinecone', 'Tailwind CSS', 'OpenAI'],
    location: 'Remote / Online',
    codeLink: 'https://github.com/Akhil-Joseph11/BrainVault',
    websiteLink: 'https://brain-vault-three.vercel.app/'
  },
  {
    id: 'proj-3',
    type: ContentType.Project,
    title: 'PocketLLM - Self-Contained AI Chat Platform',
    subtitle: 'Full-Stack AI Application',
    date: 'December 2025',
    description: [
      'EPISODE_DESCRIPTION:In a world dependent on expensive cloud APIs, PocketLLM brings intelligence back home. This project explores the limits of efficiency by containerizing a full-scale LLM chat platform to run entirely on standard consumer hardware. No cloud bills, no data leaks—just pure, local inference orchestrated by a robust microservices architecture.',
      'KEY_SCENE:Portable Intelligence: Architected a Dockerized ecosystem optimized to deliver low-latency inference on limited resources (4 vCPUs, 16GB RAM), proving that AI doesn\'t always need a data center.',
      'KEY_SCENE:Microservices Backend: Engineered a high-throughput FastAPI gateway that orchestrates traffic between the Ollama inference engine, Redis caching layers, and persistent storage (MongoDB/PostgreSQL).',
      'KEY_SCENE:Performance Engineering: Implemented intelligent L1/L2 caching strategies to slash inference costs and reduce latency for repeated queries.',
      'KEY_SCENE:Real-Time UX: Developed a responsive React + TypeScript frontend featuring Server-Sent Events (SSE) for that signature "typing" effect and persistent chat history.'
    ],
    image: '/images/PocketLLM.png',
    isLogo: false,
    matchPercentage: 98,
    tags: ['Docker', 'FastAPI', 'Redis', 'React', 'Ollama', 'PostgreSQL'],
    websiteLink: 'https://github.com/Akhil-Joseph11/Pocketllm'
  },
  {
    id: 'proj-7',
    type: ContentType.Project,
    title: 'Waste Classification AI',
    subtitle: 'Deep Learning Research',
    date: 'May 2025',
    description: [
      'EPISODE_DESCRIPTION:Recycling is broken, but AI can fix it. In this research-heavy special, Akhil tackles the global waste crisis by training neural networks to "see" and sort trash better than humans. The plot revolves around a comparative showdown between industry-heavyweights (ResNet, VGG16) and modern efficient architectures to automate waste segregation across 9 distinct categories.',
      'KEY_SCENE:Battle of the Architectures: Conducted a rigorous comparative analysis of state-of-the-art CNNs (ResNet50, VGG16, EfficientNet) to find the perfect balance between speed and accuracy.',
      'KEY_SCENE:The Efficient Champion: Implemented a Transfer Learning pipeline leveraging ImageNet weights, with EfficientNetB0 emerging as the victor—achieving 74.4% test accuracy while minimizing computational cost.',
      'KEY_SCENE:Data Engineering: Engineered a robust image processing workflow to handle the messy reality of the RealWaste dataset (~4,700 images), using dynamic augmentation (rotations, zooms) and stratification to fix class imbalances.',
      'KEY_SCENE:Custom Classification Head: Designed a specialized output layer featuring Global Average Pooling and L2 Regularization, optimizing the model to distinguish between similar materials like glass and plastic.'
    ],
    image: '/images/WasteClassificationAI.jpg',
    isLogo: false,
    matchPercentage: 97,
    tags: ['Python', 'TensorFlow', 'Keras', 'EfficientNet', 'Pandas', 'Scikit-learn'],
    location: 'Remote / Online',
    websiteLink: 'https://github.com/Akhil-Joseph11/Waste-Classification-Using-Deep-Learning'
  },
  {
    id: 'proj-4',
    type: ContentType.Project,
    title: 'Morph Runner - 2D Shape-Shifting Game',
    subtitle: 'Interactive Experience',
    date: 'August 2025',
    description: [
      'EPISODE_DESCRIPTION:Speed is nothing without strategy. Morph Runner is a high-octane 2D platformer that forces players to multitask under pressure, physically altering their character\'s shape and color to traverse a hostile geometric world. Behind the scenes, this project served as a testbed for data-driven design—using real-time player telemetry to mathematically perfect the difficulty curve.',
      'KEY_SCENE:The Polymorphic Mechanic: Developed a unique traversal system where players must instantly shape-shift (Circle, Triangle, Square) and color-match to bypass specific obstacle types, creating a high cognitive-load loop.',
      'KEY_SCENE:Game Feel Engineering: Engineered a responsive C# physics controller featuring dynamic speed adjustments, screen shake "juice," and a non-fatal collision system to maintain flow state.',
      'KEY_SCENE:Data-Driven Balance: Integrated a Firebase pipeline to track granular player metrics (death coordinates, mismatch rates). Utilized Python & Matplotlib to visualize this data, identifying frustration points and optimizing level layout based on actual user behavior.',
      'KEY_SCENE:Progressive Level Design: Designed an architectural tutorialization system that introduces complex mechanics like shape-stacking organically, without relying on text instructions.'
    ],
    image: '/images/MorphRunner.png',
    isLogo: false,
    matchPercentage: 96,
    tags: ['Unity', 'C#', 'Firebase', 'Python', 'Data Analytics', 'WebGL'],
    location: 'Remote / Online',
    codeLink: 'https://github.com/Akhil-Joseph11/MorphRunner',
    playLink: 'https://vincent-weiyu.github.io/gold_milestone_webGL/'
  },
  {
    id: 'proj-1',
    type: ContentType.Project,
    title: 'Online Banking Portal',
    subtitle: 'Secure Banking Simulation',
    date: 'November 2024',
    description: [
      'EPISODE_DESCRIPTION:Money never sleeps, and neither does this system. Premiere Bank is a monolithic financial simulation designed to replicate the complexity of a real-world institution. Moving beyond simple transfers, this platform manages the dual worlds of Customer convenience and Employee operations, ensuring transactional integrity through atomic operations and server-side logic.',
      'KEY_SCENE:The Dual Ecosystem: Architected a role-based environment with distinct portals—empowering Customers to manage beneficiaries and transfer funds, while Employees oversee account approvals and check processing.',
      'KEY_SCENE:Atomic Transactions: Integrated Fawn to manage complex MongoDB transactions (Two-Phase Commits), ensuring that fund transfers are "all-or-nothing" to prevent data inconsistencies during failures.',
      'KEY_SCENE:Server-Side Security: Built a fortified Express/EJS architecture featuring Passport.js for session management, along with strict rate limiting, XSS sanitization, and encrypted passwords to prevent injection attacks.',
      'KEY_SCENE:Automated Logistics: Features a built-in notification system using Nodemailer for transaction alerts and logic for generating unique credit/debit card numbers algorithmically.'
    ],
    image: '/images/OnlineBankingPortal.png',
    isLogo: false,
    matchPercentage: 97,
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport.js', 'Fawn'],
    websiteLink: 'https://github.com/Akhil-Joseph11/Banking-Project---MERN-Stack'
  },
  {
    id: 'proj-2',
    type: ContentType.Project,
    title: 'Intrusion Detection System',
    subtitle: 'Deep Learning Security',
    date: 'January 2025',
    description: [
      'EPISODE_DESCRIPTION:Modern networks face thousands of invisible attacks every day. This project deploys Deep Learning as a digital sentry, training neural networks to distinguish between harmless traffic and malicious intrusions. By analyzing the "fingerprints" of cyberattacks, the system evolves beyond static firewalls to detect threats that traditional rules miss.',
      'KEY_SCENE:Neural Sentries: Engineered a multi-architecture defense system utilizing both Deep Neural Networks (DNN) and Convolutional Neural Networks (CNN) to analyze complex traffic patterns within the NSL-KDD dataset.',
      'KEY_SCENE:Beating the Benchmark: Achieved a detection accuracy of 84.26%, outperforming existing baselines by successfully identifying subtle anomalies in network behavior.',
      'KEY_SCENE:Synthetic Counter-Measures: Solved the "needle in a haystack" problem of rare attack vectors by implementing Adaptive Synthetic Sampling (ADASYN), generating synthetic data to balance the training set and eliminate bias.'
    ],
    image: '/images/IntrusionDetectioSystem.png',
    isLogo: false,
    matchPercentage: 94,
    tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Network Security'],
    websiteLink: 'https://github.com/Akhil-Joseph11/Intrusion-Detection-using-the-NSL-KDD-dataset'
  },
  {
    id: 'proj-6',
    type: ContentType.Project,
    title: 'Face Mask Detection System',
    subtitle: 'Real-Time Safety Monitor',
    date: 'January 2022',
    description: [
      'EPISODE_DESCRIPTION:Public health meets artificial intelligence. This project transforms a standard webcam into a real-time compliance officer. By deploying a custom neural network, the system doesn\'t just see faces—it analyzes safety protocols instantly. It moves beyond binary detection to understand nuance, identifying the difference between full protection, partial negligence, and total exposure.',
      'KEY_SCENE:Nuanced Classification: Engineered a 3-class detection system capable of distinguishing between "Correct Mask," "No Mask," and the subtle "Incorrect Mask" (nose exposed), ensuring strict adherence to safety standards.',
      'KEY_SCENE:Bespoke Neural Architecture: Architected a custom CNN featuring dual convolutional blocks with Batch Normalization and Dropout. This design was optimized to generalize effectively across the dataset\'s diverse face angles and lighting conditions.',
      'KEY_SCENE:Live Tracking Engine: Integrated Haar Cascade Classifiers (frontalface_alt2) for millisecond-level face localization, creating a seamless visual feedback loop that renders color-coded bounding boxes (Green/Red/Orange) on live video.',
      'KEY_SCENE:Optimization Strategies: Built a robust preprocessing pipeline using xmltodict to parse XML annotations and deployed the Adamax optimizer, achieving high-accuracy inference with minimal computational overhead.'
    ],
    image: '/images/FaceMaskDetection.png',
    isLogo: false,
    matchPercentage: 96,
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'CNN', 'Adamax'],
    location: 'Remote / Online',
    websiteLink: 'https://github.com/Akhil-Joseph11/Face-mask-detection-using-Convolutional-Neural-Networks'
  },
  {
    id: 'edu-1',
    type: ContentType.Education,
    title: 'University of Southern California',
    subtitle: 'Master\'s Degree in Computer Science',
    date: 'Aug 2024 – May 2026',
    location: 'Los Angeles, USA',
    description: [
      'EPISODE_DESCRIPTION:The advanced training arc. Located in the tech hub of Los Angeles, this program delivers a comprehensive, rigorous curriculum bridging theoretical computer science with applied software engineering. The coursework spans the full spectrum of modern computing—from the fundamental mathematics of algorithms to the frontier of generative agents.',
      'KEY_SCENE:Graduate Researcher: Investigating 3D Computer Vision and neural rendering techniques for spatial computing. Focused on developing robust algorithms for 3D reconstruction and geometric analysis.',
      'KEY_SCENE:Academic Distinction: Maintaining a 3.91/4.0 GPA while navigating a diverse and challenging course load.',
      'KEY_SCENE:Systems & AI Mix: pursuing a balanced curriculum that combines high-level Software Architectures and Database Systems with cutting-edge electives like Agentic Information Retrieval and Machine Learning.'
    ],
    image: '/images/USC-logo.png',
    isLogo: true,
    matchPercentage: 100,
    tags: ['Analysis of Algorithms', 'Database Systems', 'Machine Learning', 'Multimedia Systems Design', 'Game Development', 'Agentic Information Retrieval', 'Software Architectures'],
    link: 'https://www.usc.edu/'
  },
  {
    id: 'edu-2',
    type: ContentType.Education,
    title: 'Vellore Institute of Technology',
    subtitle: 'Bachelors in Computer Science Engineering',
    date: 'July 2018 – May 2022',
    location: 'Vellore, India',
    description: [
      'EPISODE_DESCRIPTION:The Origin Story. Before the advanced AI research, there was the engineering forge. This four-year saga documents the rigorous transformation from student to engineer at one of India\'s premier technical institutes. It focuses on mastering the "First Principles" of computing—building the unshakeable mental models required to architect modern software systems.',
      'KEY_SCENE:High Distinction: Graduated with a stellar 9.11/10.0 CGPA, ranking among the top percentile of the cohort.',
      'KEY_SCENE:The Engineering Core: Mastered the absolute fundamentals of the discipline, including Data Structures, Algorithms, Operating Systems, and Computer Networks.',
      'KEY_SCENE:Capstone Development: Translated theory into practice through intensive lab work and end-to-end software engineering projects, laying the groundwork for full-stack capability.'
    ],
    image: '/images/VIT-logo.png',
    isLogo: true,
    matchPercentage: 100,
    tags: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Object-Oriented Programming', 'Discrete Mathematics', 'Software Engineering'],
    link: 'https://vit.ac.in/'
  },
  {
    id: 'skill-1',
    type: ContentType.Skill,
    title: 'The Modern Stack',
    subtitle: 'Full-Stack Architecture | Web Ecosystem',
    description: [
      'EPISODE_DESCRIPTION:Modern web development requires more than just connecting a database to a UI. This skill set focuses on architecting scalable, high-performance applications that handle real-time data and complex user interactions without breaking a sweat.',
      'KEY_SCENE:Frontend Mastery: Expert in React.js and Next.js 14, utilizing Server-Side Rendering (SSR) and Edge Functions for lightning-fast UX.',
      'KEY_SCENE:Backend Orchestration: Building robust microservices with Node.js and Express, managing traffic with Redis caching and secure REST/GraphQL APIs.',
      'KEY_SCENE:Database Design: Architecting schemas across NoSQL (MongoDB) and Relational (PostgreSQL) systems for atomic consistency.'
    ],
    image: '/images/FullStack-Development.jpg',
    matchPercentage: 99,
    tags: ['Next.js', 'TypeScript', 'Microservices', 'System Design', 'MERN'],
  },
  {
    id: 'skill-2',
    type: ContentType.Skill,
    title: 'The AI Specialist',
    subtitle: 'Artificial Intelligence & Vision | R&D',
    description: [
      'EPISODE_DESCRIPTION:Where code meets cognition. This collection represents deep experience in teaching machines to see, read, and reason. From constructing Generative AI pipelines to engineering custom Convolutional Neural Networks for safety systems.',
      'KEY_SCENE:Generative AI: Engineering RAG (Retrieval-Augmented Generation) pipelines using LangChain, Pinecone, and Local LLMs (Ollama/Llama 3).',
      'KEY_SCENE:Computer Vision: Developing custom CNN architectures in TensorFlow/Keras and real-time tracking systems with OpenCV.',
      'KEY_SCENE:Data Science: Leveraging Pandas and Scikit-learn for complex data analysis, feature engineering, and predictive modeling.'
    ],
    image: '/images/Tools-Cloud.jpg',
    matchPercentage: 98,
    tags: ['Deep Learning', 'Generative AI', 'Computer Vision', 'Python', 'PyTorch'],
  },
  {
    id: 'skill-3',
    type: ContentType.Skill,
    title: 'The Core Engineer',
    subtitle: 'Systems & Infrastructure | DevOps & Core',
    description: [
      'EPISODE_DESCRIPTION:The engine room of software. This category covers the foundational languages and operational tools that ensure code isn\'t just written, but deployed, scaled, and optimized for production environments.',
      'KEY_SCENE:Polyglot Programming: Strong command of core algorithmic languages including Java, C++, and Python for high-efficiency computing.',
      'KEY_SCENE:DevOps & Cloud: Containerizing applications with Docker, managing CI/CD pipelines, and deploying to Azure and Vercel.',
      'KEY_SCENE:Tooling: Proficiency in Git for version control, Postman for API testing, and Alteryx for automated workflow analytics.'
    ],
    image: '/images/Languages-Core.jpg',
    matchPercentage: 95,
    tags: ['Docker', 'Java', 'C++', 'Azure', 'Algorithms', 'CI/CD'],
  },
  {
    id: 'ach-1',
    type: ContentType.Achievement,
    title: 'VIT Hack 2020 Winner',
    subtitle: 'VIT Hack 2020 Champion',
    date: '2020',
    description: [
      'EPISODE_DESCRIPTION:The ultimate test of speed and skill. In this high-intensity 36-hour sprint, Akhil led a team to victory against a crowded field of developers. The challenge: untangling the chaos of large-scale e-commerce data. The solution: a deep learning classifier built from scratch that delivered actionable insights before the clock hit zero.',
      'KEY_SCENE:The Problem: Tasked with classifying massive, unstructured datasets from Amazon to optimize product categorization.',
      'KEY_SCENE:The Solution: Engineered a Deep Learning pipeline that automated the sorting process, achieving higher accuracy than the competition.',
      'KEY_SCENE:The Result: Secured 1st Place, validating the ability to ship production-grade AI solutions under extreme deadlines.'
    ],
    image: '/images/VIT-logo.png',
    isLogo: true,
    matchPercentage: 100,
    tags: ['Deep Learning', 'Python', 'Team Leadership', 'Crisis Management'],
  },
  {
    id: 'ach-2',
    type: ContentType.Achievement,
    title: 'Competitive Chess',
    subtitle: 'Competitive Chess View Profile',
    date: 'Rated 1900+',
    description: [
      'EPISODE_DESCRIPTION:Strategy is a muscle. With a competitive rating of 1900+, Akhil operates in the top percentile of global players. This isn\'t just a game; it is a gym for algorithmic thinking. It requires deep calculation trees, rapid pattern recognition, and the mental fortitude to make irreversible decisions under strict time controls.',
      'KEY_SCENE:Algorithmic Thinking: Applying decision trees and heuristic analysis in real-time to outmaneuver opponents.',
      'KEY_SCENE:Grace Under Pressure: Managing the clock in high-stakes tournament settings, mirroring the pressure of live engineering deployments.',
      'KEY_SCENE:Pattern Recognition: Identifying tactical motifs instantly—a skill that translates directly to debugging and system architecture.'
    ],
    image: '/images/Chess.jpg',
    matchPercentage: 98,
    tags: ['Strategy', 'Game Theory', 'Time Management', 'Critical Thinking'],
    link: 'https://lichess.org/@/AkhilJoseph'
  }
];

export const HERO_CONTENT = {
  title: "AKHIL JOSEPH",
  subtitle: "Full-Stack Engineer Building Intelligent Systems",
  description: "From the enterprise architecture of Shell to the research labs of USC, Akhil Joseph engineers the systems that power modern tech. This season, watch as he bridges the gap between scalable Full-Stack development and the Generative AI revolution. Featuring complex storylines involving RAG pipelines, System Design, Cloud-Native Architecture.",
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