import { Link } from "react-router";
import AddTask from "../components/AddTask"; // for rendering Task Add Form
import TaskCard from "../components/TaskCard"; // for rendering Task List

function ProjectDetailsPage () {
  
  return (
    <div className="ProjectDetailsPage">

      <div>
        <h1>PROJECT_NAME</h1>
        <p>PROJECT_DESCRIPTION</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}

      {/* example of a single TaskCard being rendered */}
      {/* <TaskCard /> */}

      {/* ... form for adding a new Task should be rendered here    */}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/PROJECT_ID_HERE`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;
