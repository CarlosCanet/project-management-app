import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...logic for creating a new Project should be here
    addProject();
    navigate("/");
  };
  
  const addProject = async () => {
    try {
      const newProject = { title, description };
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, newProject);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}> 
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;