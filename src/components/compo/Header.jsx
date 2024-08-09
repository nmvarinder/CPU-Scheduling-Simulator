import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (  <div className="header">
        <div className="logo">
          <span>
            <Link to="/cpuSchedulingSimulator">CPU</Link>
          </span>
        </div>
        <div className="whoAmI">
          <Link to="/cpuSchedulingSimulator/whoami">
        <span className="icons">
            <FaUserGraduate />&nbsp;
            </span>
          <span>
            whoAmI?
          </span>
          </Link>
        </div>
      </div> );
}
 
export default Header;