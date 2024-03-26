import certificate1 from "../images/Java.png"
import certificate2 from "../images/Reactjs.png"
import certificate3 from "../images/Advance.png"
import Bill from "../images/home.png"

const portfolios = [
  {
    id: "01",
    imgUrl: certificate1,
    category: "certificate",
    title: "Java Design Pattern",
    description: "",
    technologies: [],
    siteUrl: "",
  },
  {
    id: "02",
    imgUrl: certificate2,
    category: "certificate",
    title: "React Essential",
    description: "",
    technologies: [],
    siteUrl: "",
  },
  {
    id: "03",
    imgUrl: certificate3,
    category: "certificate",
    title: "Advance ReactJS",
    description: "",
    technologies: [],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: Bill,
    category: "projects",
    title: "Product Based Billing Web-Site",
    description: "",
    technologies: ["React JS" , "Tailwind CSS" , "Node JS" , "Express JS" , "MongoDb"],
    siteUrl: "#",
  },
];

export default portfolios;
