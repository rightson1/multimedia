import emoji from "react-easy-emoji";

export const greetings = {
  name: "Rightson's",
  title: "Welcome.",
  description:
    "Welcome to Rightsons - your partner for innovative web design and development solutions. We specialize in creating functional and visually appealing websites that enhance user experience and drive growth for your business. Let us help take your online presence to the next level.",
  resumeLink: "/",
};

export const openSource = {
  githubUserName: "brendanglancy",
};

export const contact = {};

export const socialLinks = {
  instagram: "/",
  github: "/",
  linkedin: "/",
  discord: "/",
  blog: "/",
};

export const skillsSection = {
  title: "What We Do",
  subTitle: "TRANSFORM YOUR ONLINE PRESENCE WITH OUR EXPERT SERVICES.",
  data: [
    {
      title: "Web Design, Development ,Hosting and Mobile app Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Web development: Our team of developers can build custom websites or web applications to suit your business needs, from simple brochure sites to complex e-commerce platforms."
        ),
        emoji(
          "⚡ Web hosting: We offer reliable web hosting services that ensure your website is always available and running smoothly.."
        ),
        emoji(
          "⚡Web design: We specialize in creating visually appealing and user-friendly website designs that reflect your brand and effectively communicate your message to your target audience."
        ),
        emoji(
          "⚡Mobile app development: We can help you develop a mobile app that is optimized for iOS and Android devices, providing your customers with a seamless user experience on the go."
        ),
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "Mobile Development",
    subHeader: "We Use Cross Platform Technologies",

    desc: "Here Are The Technologies We Use",
    descBullets: [
      "Flutter: Flutter is a UI toolkit from Google that allows you to build natively compiled applications for mobile, web, and desktop from a single codebase. It offers fast development, expressive and flexible UI, and native performance on both platforms.",
      "React Native: React Native is a framework from Facebook that allows you to build mobile applications for iOS and Android using JavaScript and React. It offers a fast and efficient way to develop cross-platform mobile apps with native-like performance and user experience.",
    ],
    github: "https://github.com/BrendanGlancy/akron/",
  },
  {
    schoolName: "Web Development",

    desc: "We develop user friendly and responsive websites using the following technologies",
    descBullets: [
      " Next.js: Next.js is a React-based framework for building server-side rendered (SSR) React applications with a focus on performance and developer experience. It offers features such as automatic code splitting, optimized caching, and server-side rendering, allowing for fast and scalable web applications.",
      "  WordPress: WordPress is a popular content management system (CMS) that allows you to easily create and manage websites, without requiring extensive technical knowledge. It offers a wide range of customizable themes and plugins, making it a flexible and powerful tool for building websites.",
      // "  Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable and high-performance web applications using JavaScript on both the client and server-side. It offers a large selection of libraries and packages, making it a popular choice for building web applications and APIs.",
    ],
    github: "https://github.com/BrendanGlancy/BreweryLocater",
  },
];

export const experience = [
  {
    role: "Founder",
    company: "Rightson Tole",
    companylogo: "/me.jpg",
    date: "June 2019 – Present",
    desc: "Rightson, the founder of our company, is a visionary entrepreneur with a passion for creating innovative solutions. He brings years of experience and expertise to our team, driving our mission to deliver exceptional web design and development services.",
  },
];

export const projects = [
  {
    name: "Brewery Locator",
    desc: "A web application that allows users to search and review breweries in the United States. Users can search for breweries by name, city, state, or zip code. Users can also add breweries to their favorites list and leave reviews for breweries.",
    github: "https://github.com/BrendanGlancy/BreweryLocater",
    tags: ["Java", "VueJS", "PostgreSQL"],
  },
  {
    name: "Empyrial",
    desc: "Contributor on Empyrial, Empyrial is a Python-based open-source quantitative investment library dedicated to financial institutions and retail investors, officially released in March 2021. Already used by thousands of people working in the finance industry, Empyrial aims to become an all-in-one platform for portfolio management, analysis, and optimization.",
    github: "https://github.com/ssantoshp/Empyrial",
    link: "https://ssantoshp.github.io/Empyrial/",
    tags: ["python", "finace", "machine learning"],
  },
  {
    name: "Coontz-Web",
    desc: "Personal Website built with Astro, Svelte, and JavaScript. Collaborated with a fellow Akron University student to build a website for a friend. Contains a blog of writeups for challenges done by the CTF team",
    github: "https://github.com/Coontz1/myWebsite",
    link: "https://austin-coontz.vercel.app/",
    tags: ["Astro", "TypeScript", "JavaScript"],
  },
  {
    name: "OVS Knife Co.",
    desc: "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    link: "https://ovsknife.com/home",
    tags: ["Intern", "Full Stack", "E-Commerce"],
  },
];

export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
];

export const seoData = {
  title: "Rightsons ",
  description: "Web Design and Developement Company",
  image: "/me.jpg",
  url: "https://rightsons.com/",
};
