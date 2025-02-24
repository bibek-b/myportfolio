import React, { useEffect } from 'react';
import './FeaturedProjectPage.css';
// import netflix  from '../../assets/ProjectsImages/Netflixclone.png';
import Projects from '../../Projects';
import { useLocation, useParams } from "react-router-dom";

//.filter() should only be used to filter an array, not for rendering JSX
const FeaturedProjectPage = () => {
  let  { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0); /// Scrolls to the top when route changes
  },[location])
  
  // const project = Projects.filter(project => project.projectId === id);
  const project = Projects.find(project => project.projectId == id );

  if(!project) {
    return <div className="projects">Project not found!</div>;
  }
  
  return (
    <div className='projects'> 
    <div className="project-wrapper">
      <h3 className='title'>{project.title}</h3>
      <div className="project-descriptions">
        <ul>
          {project.language && <li className='project-desc'>{project.language}</li>}
          {project.desc1 && <li className='project-desc'>{project.desc1}</li>}
         {project.desc2 &&  <li className='project-desc'>{project?.desc2}</li>}
        </ul>
      </div>
      <div className="project-desc-images">
  {[project?.img1, project?.img2, project?.img3, project?.img4] //This creates an array with four possible images from the project object.
    .filter(Boolean) //This removes any undefined, null, or empty values from the array.
    .map((img, index) => ( //This loops through the filtered images and creates an <img> tag for each one.
      <img key={index} src={img} alt={`Project Image ${index + 1}`} className="project-desc-img" />
    ))}
</div>

    </div>
    </div>
  )
}

export default FeaturedProjectPage;