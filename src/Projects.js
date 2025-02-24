import NetflixImg1 from "./assets/ProjectsImages/netflix1.png";
import NetflixImg2 from "./assets/ProjectsImages/netflix2.png";
import Gemini1 from "./assets/ProjectsImages/gemini1.png";
import Glassguru1 from "./assets/ProjectsImages/glassguru1.png";
import Glassguru2 from "./assets/ProjectsImages/glassguru2.png";
import Glassguru3 from "./assets/ProjectsImages/glassguru3.png";
import Glassguru4 from "./assets/ProjectsImages/glassguru4.png";
import Favsoc1 from "./assets/ProjectsImages/favsoc1.png";
import Favsoc2 from "./assets/ProjectsImages/favsoc2.png";
import Favsoc3 from "./assets/ProjectsImages/favsoc3.png";
import Favsoc4 from "./assets/ProjectsImages/favsoc4.png";

const Projects = [
  {
    projectId: 1,
    title: "FavSoc",
    language: "Build using MERN stack",
    desc1: "Rest api using Node js with Express",
    img1: Favsoc1,
    img2: Favsoc2,
    img3: Favsoc3,
    img4: Favsoc4,
  },
  {
    projectId: 2,
    title: "LOCAL GLASS E-COMMERCE WEBSITE",
    language: "Build using HTML,CSS,JAVASCRIPT & PHP",
    desc1: "Used MYSQL for database.",
    desc2: "Complete e-commerce website with limited functionality",
    img1: Glassguru1,
    img2: Glassguru2,
    img3: Glassguru3,
    img4: Glassguru4,
  },
  {
    projectId: 3,
    title: "NETFLIX CLONE",
    language: "Build using React JS",
    desc1:
      "Used Firebase's authentication(Email and Password) and free database(cloud firestore).",
    desc2: "Used TMDB movie api for movie list",
    img1: NetflixImg1,
    img2: NetflixImg2,
  },
  {
    projectId: 4,
    title: "GEMINI CLONE",
    language: "Build using React JS",
    desc1: "Used Google's free Gemini api",
    img1: Gemini1,
  },
];

export default Projects;
