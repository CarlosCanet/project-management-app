import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard"; // used to render each Project

function ProjectListPage() {
  
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}
       
    </div>
  );
}

export default ProjectListPage;