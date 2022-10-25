import { useNavigate } from "react-router-dom";

const BackButton = ({ address = -1 }) => {
  let navigate = useNavigate();
  return <button onClick={() => navigate(address)}>Back</button>;
};

export default BackButton;
