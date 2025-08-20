import { Link } from "react-router";

function ProjectCard () {
  
  return (
    <div className="ProjectCard card">
      <Link to={``}>
        <h3>PROJECT_TITLE_HERE</h3>
      </Link>
      <p>PROJECT_DESCRIPTION_HERE</p>
    </div>
  );
}

export default ProjectCard;