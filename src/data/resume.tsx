import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Adwait Salankar",
  initials: "AS",
  url: "https://www.linkedin.com/in/adwaitsalankar/",
  location: "Nagpur, MH, IN",
  locationLink: "https://www.google.com/maps/place/nagpur",
  description:
    "I am a pre-final year Computer Science (Data Science) student, passionate about Software Development and Machine Learning.",
  summary:
    "Tech Enthusiast with expertise in **Java**, **Python**, **AI/ML**, **Data Structures** & **Algorithms**. Currently, I am pursuing a degree in **Computer Science**, and freelanced at few startups at **Bangalore** and **Singapore**. I enjoy building innovative solutions and tackling real-world problems. I have Contest Rating of **1629** at **Leetcode** and **2 star** at **Codechef**. Apart from coding, I'm a pro footballer and a passionate canvas painter. Get my resume [here](https://drive.google.com/drive/folders/15ojwIkj0H8xJLS9IUMQe6Lk0zd9BxCG0?usp=drive_link).",
  avatarUrl: "/me.JPG",
  skills: [
    "Java",
    "Python",
    "C++",
    "SQL",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "AWS",
    "Git",
    "Machine Learning",
    "Data Structures",
    "REST APIs",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "salankar.adwait@gmail.com",
    tel: "+917218108896",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AdwaitSalankar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adwaitsalankar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/salankar_adwait",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "salankar.adwait@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GlobNX",
      href: "https://globnx.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/GlobNX.png",
      start: "May 2025",
      end: "present",
      description:
        "Working on developing applications to identify, measure, and manage risks across balance sheets to create a holistic view of assets and liabilities.",
    },
    {
      company: "ViDZ.AI",
      badges: [],
      href: "https://www.vidzai.com/",
      location: "Remote",
      title: "AI Intern",
      logoUrl: "/vidzai.jpg",
      start: "Oct 2024",
      end: "Dec 2024",
      description:
        "Working on developing an OCR-based application that extracts, processes, and analyzes Bank Financial Documents, generating key insights, and also visualizing results through interactive charts and graphs.",
    },
    {
      company: "Hawlt",
      href: "https://hawlt.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/hawlt.jpg",
      start: "May 2024",
      end: "July 2024",
      description:
        "Improved user interaction and engagement by designing a user-friendly UI and optimizing the overall UX.",
    },
  ],
  education: [
    {
      school: "Shri Ramdeobaba University, Nagpur",
      href: "https://rbunagpur.in/",
      degree: "BTech in Computer Science and Engineering (CGPA: 8.21 / 10)",
      logoUrl: "/college.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "OCR for Insights",
      href: "https://github.com/AdwaitSalankar/OCR-of-Bank-Statements",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "Developed an OCR and document analysis application using Streamlit.",
      technologies: [
        "Python",
        "Flask",
        "Streamlit",
        "LLM",
        "Together API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AdwaitSalankar/OCR-of-Bank-Statements",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ocr-photo.png",
      video:
        "",
    },
    {
      title: "Extract-MIC",
      href: "https://github.com/AdwaitSalankar/MIC_Files",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Extracts structured info (date, fatalities, countries) from conflict-related text using a fine-tuned BERT model",
      technologies: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Colab",
        "BERT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AdwaitSalankar/MIC_Files",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MIC-photo.png",
      video: "",
    },
    {
      title: "Cancer-Classifier",
      href: "https://github.com/AdwaitSalankar/Cancer-Classifier/blob/main/breast_cancer_predict.ipynb",
      dates: "April 2024 - September 2024",
      active: true,
      description:
        "Breast cancer classification using a Logistic Regression model built from scratch.",
      technologies: [
        "Python",
        "Machine Learning",
        "Colab",
        "Logistic Regression",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AdwaitSalankar/Cancer-Classifier",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cancer-classify-photo.jpg",
      video: "",
    },
    {
      title: "FoodieSpot",
      href: "https://github.com/AdwaitSalankar/FoodieSpot-Reservation-Assistant",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Conversational AI-powered dining assistant that helps users to Make / Modify / Cancel a reservation.",
      technologies: [
        "Python",
        "LLM",
        "Together API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AdwaitSalankar/FoodieSpot-Reservation-Assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/foodiespot-photo.png",
      video:
        "",
    },
    {
      title: "CompareIT",
      href: "https://github.com/AdwaitSalankar/CompareIT",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Find the best deals by comparing prices across Amazon, Flipkart, and Reliance Digital.",
      technologies: [
        "Python",
        "Flask",
        "BeautifulSoup",
        "Selenium",
        "LLM",
        "Together API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AdwaitSalankar/CompareIT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/compareit-photo.png",
      video:
        "",
    },
    {
      title: "QWERTY",
      href: "https://github.com/AdwaitSalankar/QWERTY",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Web-based game inspired by the popular word puzzle game Wordle.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://qwerty-first.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AdwaitSalankar/QWERTY",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/qwerty-photo.png",
      video:
        "",
    },
  ],
}
