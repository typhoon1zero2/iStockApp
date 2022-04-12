import {Link} from "react-router-dom";


const Dashboard = ({ stocks }) => {
 
  return (
    <div className="dashboard">
      {stocks.map((stock) => {
        const {name, symbol, lastPrice, change, high, low, open} = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <li>{name}</li>
          </Link>
        )
      })}
    </div>
  )
};

export default Dashboard;
