window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get("course");
  const title = document.getElementById("crs__ttl");
  const subtitle = document.getElementById("crs_sbttl");
  const rating = document.getElementById("crs__rtng__str");
  const reviews = document.getElementById("crs__rvws");
  const studentsEnrolled = document.getElementById("crs__stdnts__enld");
  const image = document.getElementById("crs__img");
  const requirementsList = document.getElementById("crs_requirements");
  const description = document.getElementById("crs_description");
  const whatYoullLearnList = document.getElementById("crs_what_youll_learn");
  const whoIsCourseForList = document.getElementById("crs_who_is_course_for");

  switch (course) {
    case "digital-marketing":
      updateDigitalMarketingContent();
      break;
    case "ethical-hacking":
      updateEthicalHackingContent();
      break;
    case "sex-education":
      updateSexEducationContent();
      break;
    case "stock-market-analysis":
      updateStockMarketAnalysisContent();
      break;
    case "full-stack-web-development":
      updateFullStackWebDevelopmentContent();
      break;
    case "data-analytics":
      updateDataAnalysisContent();
      break;
    default:
      break;
  }

  function updateDigitalMarketingContent() {
    const digitalMarketingRequirements = [
      "No experience required",
      "Suitable for all types of businesses (digital product, physical product, service, B2B, B2C)",
    ];
    const digitalMarketingWhatYoullLearn = [
      "Grow a Business Online From Scratch",
      "Make Money as an Affiliate Marketer",
      "Get Hired as a Digital Marketing Expert",
      "Work From Home as a Freelance Marketer",
    ];
    const digitalMarketingWhoIsCourseFor = [
      "Pre launch business owners who don't know where to get started",
      "Website owners who are struggling to get traffic and sales",
      "Anyone looking to add highly paid skills to their CV",
    ];

    requirementsList.innerHTML = "";
    digitalMarketingRequirements.forEach((requirement) => {
      const li = document.createElement("li");
      li.textContent = requirement;
      requirementsList.appendChild(li);
    });

    whatYoullLearnList.innerHTML = "";
    digitalMarketingWhatYoullLearn.forEach((lesson) => {
      const li = document.createElement("li");
      li.textContent = "*" + lesson;
      whatYoullLearnList.appendChild(li);
    });

    whoIsCourseForList.innerHTML = "";
    digitalMarketingWhoIsCourseFor.forEach((target) => {
      const li = document.createElement("li");
      li.textContent = target;
      whoIsCourseForList.appendChild(li);
    });

    description.textContent = `Join 500,000+ students in the best-selling digital marketing course on TS Bridge! With over 20 hours of training, quizzes, and practical steps you can follow - this is one of the most comprehensive digital marketing courses available. We'll cover SEO, YouTube Marketing, Facebook Marketing, Google Adwords, Google Analytics, and more!`;

    title.textContent = "The Complete Digital Marketing Course";
    subtitle.textContent =
      "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!";
    rating.textContent = "4.5";
    reviews.textContent = "(100+ reviews)";
    studentsEnrolled.textContent = "1,000 students";
    image.src = "/media/digital-marketing.jpg";
  }

  function updateFullStackWebDevelopmentContent() {
    const fullStackRequirements = [
      "Basic understanding of HTML, CSS, and JavaScript",
      "Passion for learning web development",
    ];
    const fullStackWhatYoullLearn = [
      "Build responsive and dynamic web applications",
      "Understand server-side development with Node.js",
      "Work with databases using MongoDB",
      "Master front-end frameworks like React.js",
      "Deploy web applications to cloud platforms",
    ];
    const fullStackWhoIsCourseFor = [
      "Beginners who want to become full-stack developers",
      "Students interested in web development as a career",
      "Web developers looking to enhance their skills",
    ];

    requirementsList.innerHTML = "";
    fullStackRequirements.forEach((requirement) => {
      const li = document.createElement("li");
      li.textContent = requirement;
      requirementsList.appendChild(li);
    });

    whatYoullLearnList.innerHTML = "";
    fullStackWhatYoullLearn.forEach((lesson) => {
      const li = document.createElement("li");
      li.textContent = "*" + lesson;
      whatYoullLearnList.appendChild(li);
    });

    whoIsCourseForList.innerHTML = "";
    fullStackWhoIsCourseFor.forEach((target) => {
      const li = document.createElement("li");
      li.textContent = target;
      whoIsCourseForList.appendChild(li);
    });

    description.textContent = `Join thousands of students learning Full Stack Web Development! This comprehensive course covers everything you need to know to become a proficient full-stack developer. From front-end frameworks like React.js to back-end technologies like Node.js and databases like MongoDB, you'll gain the skills necessary to build and deploy modern web applications.`;

    title.textContent = "Full Stack Web Development Course";
    subtitle.textContent =
      "Become a Full Stack Web Developer with HTML, CSS, JavaScript, Node.js, React & More!";
    rating.textContent = "4.7";
    reviews.textContent = "(200+ reviews)";
    studentsEnrolled.textContent = "2,500 students";
    image.src = "/media/full-stack-web-development.jpg";
  }

  function updateEthicalHackingContent() {
    const ethicalHackingRequirements = [
      "Basic understanding of computer networks and operating systems",
      "Interest in cybersecurity and ethical hacking",
    ];
    const ethicalHackingWhatYoullLearn = [
      "Understand the fundamentals of ethical hacking",
      "Explore various hacking techniques and tools",
      "Learn penetration testing methodologies",
      "Practice hands-on hacking exercises in a safe environment",
      "Discover how to secure systems from cyber attacks",
    ];
    const ethicalHackingWhoIsCourseFor = [
      "Aspiring cybersecurity professionals",
      "IT professionals interested in ethical hacking",
      "Students looking to learn practical hacking skills",
    ];

    requirementsList.innerHTML = "";
    ethicalHackingRequirements.forEach((requirement) => {
      const li = document.createElement("li");
      li.textContent = requirement;
      requirementsList.appendChild(li);
    });

    whatYoullLearnList.innerHTML = "";
    ethicalHackingWhatYoullLearn.forEach((lesson) => {
      const li = document.createElement("li");
      li.textContent = "*" + lesson;
      whatYoullLearnList.appendChild(li);
    });

    whoIsCourseForList.innerHTML = "";
    ethicalHackingWhoIsCourseFor.forEach((target) => {
      const li = document.createElement("li");
      li.textContent = target;
      whoIsCourseForList.appendChild(li);
    });

    description.textContent = `Embark on an exciting journey into the world of ethical hacking! In this comprehensive course, you'll learn the principles and techniques used by ethical hackers to secure systems and networks. From reconnaissance and scanning to exploitation and post-exploitation, you'll gain hands-on experience with real-world hacking scenarios.`;

    title.textContent = "Ethical Hacking Course";
    subtitle.textContent =
      "Learn Ethical Hacking, Cybersecurity, Penetration Testing, Web Application Security & More!";
    rating.textContent = "4.8";
    reviews.textContent = "(150+ reviews)";
    studentsEnrolled.textContent = "2,000 students";
    image.src = "/media/ethical-hacking.jpg";
  }

  function updateSexEducationContent() {
    const sexEducationRequirements = [
      "Open-mindedness and willingness to learn",
      "Respect for diverse perspectives and experiences",
    ];
    const sexEducationWhatYoullLearn = [
      "Understand human anatomy and reproductive health",
      "Explore topics related to sexual identity and orientation",
      "Learn about contraception and safe sex practices",
      "Discuss consent, boundaries, and healthy relationships",
    ];
    const sexEducationWhoIsCourseFor = [
      "Individuals seeking comprehensive sex education",
      "Parents interested in discussing sex education with their children",
      "Educators looking to enhance their knowledge of sexual health",
    ];

    requirementsList.innerHTML = "";
    sexEducationRequirements.forEach((requirement) => {
      const li = document.createElement("li");
      li.textContent = requirement;
      requirementsList.appendChild(li);
    });

    whatYoullLearnList.innerHTML = "";
    sexEducationWhatYoullLearn.forEach((lesson) => {
      const li = document.createElement("li");
      li.textContent = "*" + lesson;
      whatYoullLearnList.appendChild(li);
    });

    whoIsCourseForList.innerHTML = "";
    sexEducationWhoIsCourseFor.forEach((target) => {
      const li = document.createElement("li");
      li.textContent = target;
      whoIsCourseForList.appendChild(li);
    });

    description.textContent = `Embark on a journey to understand human sexuality and reproductive health. This course offers a comprehensive exploration of sex education, covering topics such as anatomy, contraception, sexual orientation, consent, and healthy relationships. Join us in promoting knowledge, understanding, and respect for diverse sexual experiences and identities.`;

    title.textContent = "Sex Education Course";
    subtitle.textContent =
      "Comprehensive Sex Education Curriculum for All Ages";
    rating.textContent = "4.9";
    reviews.textContent = "(120+ reviews)";
    studentsEnrolled.textContent = "3,000 students";
    image.src = "/media/sex-education.jpg";
  }

  function updateStockMarketAnalysisContent() {
    const stockMarketRequirements = [
      "Basic understanding of financial markets",
      "Interest in investment and trading",
    ];
    const stockMarketWhatYoullLearn = [
      "Analyze stock market trends and patterns",
      "Understand fundamental analysis techniques",
      "Master technical analysis tools and indicators",
      "Learn risk management strategies",
      "Explore different investment strategies and styles",
    ];
    const stockMarketWhoIsCourseFor = [
      "Aspiring investors looking to analyze the stock market",
      "Traders interested in improving their analytical skills",
      "Finance professionals seeking to enhance their knowledge of market analysis",
    ];

    requirementsList.innerHTML = "";
    stockMarketRequirements.forEach((requirement) => {
      const li = document.createElement("li");
      li.textContent = requirement;
      requirementsList.appendChild(li);
    });

    whatYoullLearnList.innerHTML = "";
    stockMarketWhatYoullLearn.forEach((lesson) => {
      const li = document.createElement("li");
      li.textContent = "*" + lesson;
      whatYoullLearnList.appendChild(li);
    });

    whoIsCourseForList.innerHTML = "";
    stockMarketWhoIsCourseFor.forEach((target) => {
      const li = document.createElement("li");
      li.textContent = target;
      whoIsCourseForList.appendChild(li);
    });

    description.textContent = `Dive into the world of stock market analysis and gain the skills needed to make informed investment decisions. This course covers fundamental and technical analysis techniques, risk management strategies, and various investment styles. Whether you're a beginner or an experienced trader, this course will equip you with the knowledge and tools to navigate the complex world of financial markets.`;

    title.textContent = "Stock Market Analysis Course";
    subtitle.textContent =
      "Master Stock Market Analysis, Technical Analysis, Fundamental Analysis & More!";
    rating.textContent = "4.6";
    reviews.textContent = "(180+ reviews)";
    studentsEnrolled.textContent = "2,200 students";
    image.src = "/media/stock-market-analysis.jpg";
  }

  function updateDataAnalysisContent() {
    const dataAnalysisRequirements = [
      "Basic understanding of mathematics and statistics",
      "Familiarity with programming languages such as Python or R",
    ];
    const dataAnalysisWhatYoullLearn = [
      "Collect and clean data for analysis",
      "Apply statistical techniques to analyze data",
      "Visualize data using charts, graphs, and plots",
      "Perform exploratory data analysis (EDA)",
      "Build predictive models and make data-driven decisions",
    ];
    const dataAnalysisWhoIsCourseFor = [
      "Aspiring data analysts and data scientists",
      "Business professionals interested in data-driven decision making",
      "Students looking to enhance their analytical skills",
    ];

    requirementsList.innerHTML = "";
    dataAnalysisRequirements.forEach((requirement) => {
      const li = document.createElement("li");
      li.textContent = requirement;
      requirementsList.appendChild(li);
    });

    whatYoullLearnList.innerHTML = "";
    dataAnalysisWhatYoullLearn.forEach((lesson) => {
      const li = document.createElement("li");
      li.textContent = "*" + lesson;
      whatYoullLearnList.appendChild(li);
    });

    whoIsCourseForList.innerHTML = "";
    dataAnalysisWhoIsCourseFor.forEach((target) => {
      const li = document.createElement("li");
      li.textContent = target;
      whoIsCourseForList.appendChild(li);
    });

    description.textContent = `Unlock the power of data with our comprehensive Data Analysis course. From collecting and cleaning data to performing advanced statistical analysis, this course covers everything you need to know to become a proficient data analyst. Whether you're looking to kickstart a career in data science or enhance your analytical skills, this course is your gateway to success.`;

    title.textContent = "Data Analysis Course";
    subtitle.textContent =
      "Learn Data Analytics, Data Science, Data Visualization & More!";
    rating.textContent = "4.9";
    reviews.textContent = "(250+ reviews)";
    studentsEnrolled.textContent = "3,500 students";
    image.src = "/media/data-analysis.jpg";
  }
};
