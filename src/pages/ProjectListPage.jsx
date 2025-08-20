import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function ProjectListPage() {
  const [allProjects, setAllProjects] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/projects`);
      setAllProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // if (allProjects === null) {
  //   return <h1>Loading...</h1>
  // }
  
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}
      {allProjects ? allProjects.map(project => <ProjectCard {...project} key={project.id} />) :  <Loading />}
      
       
    </div>
  );
}

export default ProjectListPage;