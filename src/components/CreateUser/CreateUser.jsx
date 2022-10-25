import { useNavigate } from "react-router-dom";

const CreateUser = () => {
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
      <h3>Create User:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First name</label>
          <input type="text" name="fname" id="fname" required />
        </div>
        <div>
          <label htmlFor="lname">Last name</label>
          <input type="text" name="lname" id="lname" required />
        </div>
        <div>
          <label htmlFor="company">Company name</label>
          <input type="text" name="company" id="company" required />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateUser;
