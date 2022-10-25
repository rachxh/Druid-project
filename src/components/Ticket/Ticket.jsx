import { useNavigate } from "react-router-dom";

const Ticket = () => {
  let navigate = useNavigate();

  const submit = (target) => {
    console.log("Subject", target.subject.value);
    console.log("Description", target.description.value);
    console.log("Submitted");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit(e.target);
    navigate("/dashboard");
  };

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <h3>Ticket:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" id="subject" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            id="description"
            rows="5"
            cols="30"
            required
          />
        </div>
        <div>
          <label htmlFor="attachment">Attachment:</label>
          {/* This will need a check for files you can upload */}
          <input type="file" name="attachment" id="attachment" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Ticket;
