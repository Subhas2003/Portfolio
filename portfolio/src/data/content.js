export const profile = {
  name: 'Subhas Munain',
  eyebrow: 'Full-Stack Developer ·',//AI & Computer Vision Enthusiast
  subtitle:
    'Electronics & Communication Engineering undergrad building scalable web application and intelligent systems — where hardware curiosity meets full-stack code.',
  email: 'subhasmunain@gmail.com',
  phone: '+91 8597997009',
  github: 'https://github.com/Subhas2003',
  linkedin: 'https://linkedin.com/in/subhas-munain-29506825b',
  resumeUrl: '/images/resume.pdf',
  photoUrl: '/images/profilePhoto.jpeg',
  profilePhoto:'/images/profilePic.jpeg',
}

export const about = {
  paragraphs: [
    "I'm a driven engineering student transitioning my foundational knowledge in Electronics and Communication into building robust software solutions. My journey bridging hardware and software has cultivated a deep interest in full-stack development with the MERN stack, and Artificial Intelligence — specifically Computer Vision.",
    'Currently pursuing my B.Tech in ECE at Techno Main Salt Lake , I thrive on tackling problems that need both systemic thinking and creative coding — from wiring a Raspberry Pi camera into a detection pipeline to shipping a responsive web dashboard around it.',
  ],
  badge: 'ECE @ Techno Main Salt Lake · 2026',
}

export const projects = [

   {
    title: 'Interactive Cafe Website & Table Booking UI',
    description:
      'A responsive cafe website featuring an interactive food and drink menu, visual gallery, and brand story. It offers smooth navigation and an integrated reservation form for easy table bookings on any device.',
    tags: ['React', 'Three.js', 'Tailwind CSS','Cloudinary'],
    liveUrl: 'https://maisonroastcafe.vercel.app',
    githubUrl: 'https://github.com/Subhas2003/Cafe',
    photoUrl: 'https://res.cloudinary.com/dniubfdyh/image/upload/v1789584178/Screenshot_2026-09-17_001024_jmlojm.png',
  },
   {
    title: 'Car Rental Management System',
    description:
      'Velocita is a modern, fully responsive Car Rental Management System crafted to deliver a seamless self-service vehicle reservation experience. Built entirely as a client-side web application, it operates smoothly without requiring a dedicated backend.',
    tags: ['React', 'Three.js', 'Tailwind CSS','Cloudinary'],
    liveUrl: 'https://car-dekho-pi.vercel.app',
    githubUrl: 'https://github.com/Subhas2003/Car-Dekho',
    photoUrl: 'https://res.cloudinary.com/dniubfdyh/image/upload/v1789584177/Screenshot_2026-09-17_001238_cmpstb.png',
  },
  {
    title: 'AI-Powered Smart Surveillance System',
    description:
      'A full-stack surveillance platform integrating Raspberry Pi camera modules with AI-based object and fire detection. Real-time video monitoring, alert generation, and event recording, wrapped in a responsive dashboard with secure JWT + Google auth and SMTP OTP verification.',
    tags: ['MERN','GSAP', 'Raspberry Pi', 'OpenCV', 'YOLO', 'JWT','Google OAuth'],
    liveUrl: null,
    githubUrl: 'https://github.com/Subhas2003/smartcctv',
    photoUrl:'/images/AiwatchPatrol.png'
  },
  {
    title: 'Full-Stack E-Commerce Platform',
    description:
      'A full-featured e-commerce web app with product catalog management, user authentication, and shopping cart/checkout. Cloudinary-backed media management and a fully responsive React + Tailwind UI, optimized for desktop and mobile.',
    tags: ['MERN', 'GSAP', 'Cloudinary', 'React', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/Subhas2003/E-commerce-Website',
    photoUrl: '/images/ecomerse.png',
  },
 
]

export const certificates=[
  {
    title:'Geeksforgeeks - Full Stack Web Development',
    description:'Completed the Full Stack Web Development course on Geeksforgeeks, covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    // tags:['HTML','CSS','JavaScript','React','Node.js','MongoDB'],
    certificateUrl:'/images/Geeksforgeeks.pdf',
  },
  {
    title:'Hackerrank - Frontend Development(React)',
    description:'Completed the Frontend Development course on Hackerrank, focusing on React and modern frontend technologies.',
    // tags:['React', 'JavaScript', 'HTML', 'CSS'],
    certificateUrl:'https://www.hackerrank.com/certificates/15df309f4894',
  },
  {
    title:'Hackerrank - SQL(Intermediate)',
    description:'Completed the SQL(Intermediate) course on Hackerrank, focusing on advanced SQL concepts and database management.',
    // tags:['SQL', 'Database', 'Data Analysis'],
    certificateUrl:'https://www.hackerrank.com/certificates/255edf0c3986',
  }
]

export const skillGroups = [
  {
    title: 'Languages',
    icon: 'Terminal',
    skills: ['C', 'C++', 'JavaScript'],
  },
  {
    title: 'Web Technologies',
    icon: 'Globe',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases & APIs',
    icon: 'Database',
    skills: ['MySQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: ['Git & GitHub', 'Vite', 'Postman', 'Cloudinary', 'JWT', 'Google OAuth'],
  },
  {
    title: 'AI & Embedded',
    icon: 'Cpu',
    skills: ['Raspberry Pi', 'OpenCV', 'YOLO Object Detection'],
  },
]

export const education = {
  degree: 'B.Tech in Electronics & Communication Engineering',
  school: 'Techno Main Salt Lake, Kolkata',
  // period: '2022 – 2026',
  description:
    'Pursuing a degree in Electronics and Communication Engineering while actively developing skills in software engineering and Full stack development.',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
