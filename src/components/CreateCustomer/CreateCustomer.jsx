import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
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
      <h3>Create Customer:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First name</label>
          <input type="text" name="fname" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last name</label>
          <input type="text" name="lname" id="lname" />
        </div>
        <div>
          <label htmlFor="company">Company name</label>
          <input type="text" name="company" id="company" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="adress" />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateCustomer;
