import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyProjects = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h3>My Projects</h3>
      <div>
        <button onClick={() => navigate("/create-project")}>
          Create Project
        </button>
      </div>
      <input type="search"></input>
      <div>
        <Link to="/projects/1">Project1</Link>
        <Link to="/projects/2">Project2</Link>
      </div>
    </div>
  );
};

export default MyProjects;
