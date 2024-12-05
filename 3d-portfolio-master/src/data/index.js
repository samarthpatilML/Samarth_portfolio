import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [

  
  {
    title: "Python Developer",
    company_name: "Self Employed",
    date: "2022 - Present",
    details: [
      "With <span style='color:gold'>17,544 hours</span> of hands-on experience in Python programming.",
      "I have developed expertise in creating efficient, <span style='color:gold'>scalable solutions for various projects on OpenCV. </span>",
      "My skills include<span style='color:gold'> designing user-friendly applications, ML data workflows,</span> and solving complex problems effectively .",
      
    ],
  },

  
  {
    title: "Computer Science",
    company_name: "Undergraduate",
    date: "2023 - 2025",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      
    ],
  },
];

const portfolio = [
  {
    name: "OpenCV Project",
    description:
      "By combining computer vision and robotics, this project demonstrates how human-like hand movements can be recognized and replicated by a robotic system. This technology has potential applications in automation, healthcare, and assistive devices.",
    image: oscs,
  },
  {
    name: "Code to Pdf",
    description:
      "The application is a desktop-based Code-to-PDF converter built using Python with the PyQt5 library for GUI design and the FPDF library for PDF generation.",
    image: devnotes,
  },
  {
    name: "Uber analysis",
    description:
      " Algorithms predict ride demand based on historical data, weather, and events, Dynamic pricing is adjusted in real-time based on location-specific demand and supply.",
    image: algorithms,
  },
  
];

export { experiences, portfolio };

