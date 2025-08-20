import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function EditProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${projectId}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setIsFetching(false);
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // ...updated logic should be here
    try {
      if (!isFetching) {
        const editedTaks = { title, description };
        await axios.put(`${import.meta.env.VITE_SERVER_URL}/projects/${projectId}`, editedTaks);
        navigate(`/projects/${projectId}`);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const deleteProject = async () => {
    // ...delete logic should be here
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/projects/${projectId}`)
    } catch (error) {
      console.log(error)
    }
  };

  // if (isFetching) {
  //   return <Loading />;
  // }

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isFetching}
          placeholder={isFetching ? "Loading..." : ""}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isFetching}
          placeholder={isFetching ? "Loading..." : ""}
        />

        <button type="submit" disabled={isFetching}>Update Project</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>      
    </div>
  );
}

export default EditProjectPage;
