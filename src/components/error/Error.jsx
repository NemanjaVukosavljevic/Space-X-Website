import "./style.css";
import { ReactComponent as Refresh } from "../../assets/Refresh.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0); //reload current route
  };
  return (
    <div className="error-wrapper">
      <p>Something went wrong. Please try again</p>
      <div className="refresh-icon" onClick={refreshPage}>
        <Refresh />
      </div>
    </div>
  );
};

export default Error;
