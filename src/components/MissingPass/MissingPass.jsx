const MissingPass = () => {
  return (
    <>
      <h3>Missing Pass</h3>
      <form>
        <label for="email">Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          name="email"
          required
        />
        <button type="submit">Reset</button>
      </form>
    </>
  );
};

export default MissingPass;
