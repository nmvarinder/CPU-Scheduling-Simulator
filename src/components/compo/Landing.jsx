import { Link } from "react-router-dom";

const Landing = () => {
    return ( 
        <div className="landing">
          <div className="main-text">
            <div className="primary">
              <p>cpu</p>
            </div>
            <div className="secondary">
              <p>Scheduling Simulator</p>
            </div>
          </div>
  
          <div className="main-btn">
            <button className="practice"><Link to="/cpuSchedulingSimulator/practice">practice</Link></button>
            <button className="result"><Link to="/cpuSchedulingSimulator/simulate">Simulate</Link></button>
          </div>
        </div>
   );
}
 
export default Landing;