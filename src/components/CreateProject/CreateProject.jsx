import { useNavigate } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";

const CreateProject = () => {
  let navigate = useNavigate();

  const submit = (target) => {
    console.log("Submitted", target);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit(e.target);
    navigate("/dashboard");
  };

  return (
    <>
      <BackButton />
      <h3>Create Project:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">Project Name</label>
          <input type="text" name="fname" id="fname" required />
        </div>
        <div>
          <label htmlFor="company">Company name</label>
          <input type="text" name="company" id="company" required />
        </div>
        <div>
          <label htmlFor="jira">Jira</label>
          <input type="text" name="jira" id="jira" required />
        </div>
        <div>
          <label htmlFor="severa">Severa</label>
          <input type="text" name="severa" id="severa" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateProject;
