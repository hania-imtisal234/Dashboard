import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
const Card = ({ name, flag, continent }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className=" w-40 h-52 bg-sky-blue rounded-md"
        onClick={() => {
          navigate(name);
        }}
      >
        <div className="img-container w-35 h-25 p-2">
          <img src={flag} className="img rounded-md h-25" />
        </div>
        <div className="bottom-container w-30 h-24 px-2 bg-dark-blue rounded-md text-center">
          <div>
            <h5 className="text-my-white p-2 text-center text-xs ">{name}</h5>
          </div>
          <div>
            <h4 className="text-my-white p-2 mb-2 text-center text-sm">
              {continent}
            </h4>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
export default Card;
