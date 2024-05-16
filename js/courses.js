const nonTch = [
  {
    title: "Digital Marketing Course",
    rating: 4.5,
    ratingsCount: "100+",
    studentsEnrolled: "1,000",
    whatYoullLearn: [
      "Grow a Business Online From Scratch",
      "Make Money as an Affiliate Marketer",
      "Get Hired as a Digital Marketing Expert",
      "Work From Home as a Freelance Marketer",
    ],
    requirements:
      "No experience required. Suitable for all types of businesses (digital product, physical product, service, B2B, B2C).",
    description:
      "Join 500,000+ students in the best-selling digital marketing course on TS Bridge! With over 20 hours of training, quizzes, and practical steps you can follow, this is one of the most comprehensive digital marketing courses available. Covering SEO, YouTube Marketing, Facebook Marketing, Google Adwords, Google Analytics, and more!",
    coursesIncluded: [
      "Market Research",
      "WordPress",
      "Email Marketing",
      "Copy Writing",
      "SEO (Search Engine Optimisation)",
      "YouTube Marketing",
      "Social Media Marketing",
      "Linkedin Marketing",
      "App Marketing",
      "Google Adwords",
      "Facebook Ads",
      "Google Analytics",
    ],
    additionalBenefits: [
      "Lifetime Access to course updates",
      "Fast & Friendly Support in the Q&A section",
      "Lifetime Access to course updates",
    ],
    targetAudience: [
      "Pre-launch business owners who don't know where to get started",
      "Website owners who are struggling to get traffic and sales",
      "Anyone looking to add highly paid skills to their CV",
    ],
  },
  {
    title: "Comprehensive Sex Education Course",
    rating: 4.8,
    ratingsCount: "50+",
    studentsEnrolled: "500",
    whatYoullLearn: [
      "Understanding Reproductive Health",
      "Consent and Healthy Relationships",
      "Sexually Transmitted Infections (STIs)",
      "Gender and Sexuality Education",
    ],
    requirements:
      "Open to all individuals interested in comprehensive sex education.",
    description:
      "Join us in this comprehensive sex education course aimed at providing accurate, age-appropriate information about human sexuality. Our curriculum covers various topics including reproductive health, consent, healthy relationships, sexually transmitted infections (STIs), and gender and sexuality education.",
    coursesIncluded: [
      "Anatomy and Physiology",
      "Contraception and Family Planning",
      "Sexual Orientation and Gender Identity",
      "STIs Prevention and Treatment",
    ],
    additionalBenefits: [
      "Interactive learning materials",
      "Access to expert educators",
      "Discussion forums for sharing experiences and insights",
    ],
    targetAudience: [
      "Students seeking comprehensive sex education",
      "Educators looking to enhance their teaching materials",
    ],
  },
  {
    title: "Mastering Stock Market Analysis Course",
    rating: 4.6,
    ratingsCount: "80+",
    studentsEnrolled: "800",
    whatYoullLearn: [
      "Financial Statement Analysis",
      "Valuation Methods",
      "Technical Analysis",
      "Market Trends Analysis",
    ],
    requirements:
      "Basic understanding of financial markets and investment concepts.",
    description:
      "Embark on a journey to master stock market analysis with our comprehensive course. Learn the fundamental principles and techniques of analyzing stocks, including financial statement analysis, valuation methods, technical analysis, and market trends analysis. Whether you're an investor or finance professional, this course will equip you with the skills to make informed investment decisions.",
    coursesIncluded: [
      "Fundamental Analysis",
      "Technical Analysis Tools",
      "Risk Management Strategies",
      "Portfolio Construction",
    ],
    additionalBenefits: [
      "Access to real-time market data",
      "Practical exercises and case studies",
      "One-on-one mentorship sessions with industry experts",
    ],
    targetAudience: [
      "Investors seeking to enhance their analytical skills",
      "Finance professionals looking to specialize in stock market analysis",
    ],
  },
];

const Tch = [
  {
    title: "Data Analytics Masterclass",
    rating: 4.7,
    ratingsCount: "120+",
    studentsEnrolled: "1,200",
    whatYoullLearn: [
      "Data Cleaning and Preprocessing",
      "Statistical Analysis Techniques",
      "Data Visualization with Python Libraries",
      "Machine Learning Algorithms",
    ],
    requirements:
      "Basic understanding of programming and statistics is recommended.",
    description:
      "Dive into the world of data analytics with our comprehensive masterclass. Learn essential skills such as data cleaning, statistical analysis, and data visualization using popular Python libraries. Gain hands-on experience with real-world datasets and master machine learning algorithms to derive actionable insights.",
    coursesIncluded: [
      "Python for Data Analysis",
      "Statistical Analysis with Pandas and NumPy",
      "Data Visualization with Matplotlib and Seaborn",
      "Machine Learning with Scikit-learn",
    ],
    additionalBenefits: [
      "Access to industry-standard tools and datasets",
      "Interactive coding exercises",
      "Personalized feedback from instructors",
    ],
    targetAudience: [
      "Aspiring data analysts",
      "Professionals seeking to transition into data analytics roles",
    ],
  },
  {
    title: "Ethical Hacking Essentials",
    rating: 4.9,
    ratingsCount: "150+",
    studentsEnrolled: "1,500",
    whatYoullLearn: [
      "Network Security Fundamentals",
      "Vulnerability Assessment and Penetration Testing",
      "Web Application Security",
      "Incident Response and Forensics",
    ],
    requirements:
      "Basic knowledge of computer networks and operating systems is recommended.",
    description:
      "Become an ethical hacker and learn how to protect systems from cyber threats. This course covers essential topics such as network security, vulnerability assessment, web application security, and incident response. Gain practical skills through hands-on labs and real-world scenarios.",
    coursesIncluded: [
      "Introduction to Ethical Hacking",
      "Network Security and Exploitation Techniques",
      "Web Application Penetration Testing",
      "Incident Response and Digital Forensics",
    ],
    additionalBenefits: [
      "Virtual lab environment for hands-on practice",
      "Certification exam preparation materials",
      "Access to a community of cybersecurity professionals",
    ],
    targetAudience: [
      "IT professionals interested in cybersecurity",
      "Students pursuing a career in ethical hacking",
    ],
  },
  {
    title: "Full Stack Web Development Bootcamp",
    rating: 4.6,
    ratingsCount: "200+",
    studentsEnrolled: "2,000",
    whatYoullLearn: [
      "Frontend Development with HTML, CSS, and JavaScript",
      "Backend Development with Node.js and Express",
      "Database Management with MongoDB",
      "Building RESTful APIs",
    ],
    requirements:
      "Basic knowledge of HTML, CSS, and JavaScript is recommended.",
    description:
      "Master the skills required to build dynamic web applications from scratch. This bootcamp covers frontend and backend development, database management, and API creation using popular technologies such as HTML, CSS, JavaScript, Node.js, Express, and MongoDB. Get hands-on experience with real-world projects and launch your career as a full stack web developer.",
    coursesIncluded: [
      "HTML and CSS Fundamentals",
      "JavaScript for Web Development",
      "Node.js and Express Framework",
      "MongoDB and Mongoose",
    ],
    additionalBenefits: [
      "Portfolio-building projects",
      "Interview preparation assistance",
      "Lifetime access to course materials and updates",
    ],
    targetAudience: [
      "Aspiring web developers",
      "Students looking to enter the tech industry",
    ],
  },
];



window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const state = urlParams.get("state");


  switch(state){
    case "digital-marketing":
      
  }

}