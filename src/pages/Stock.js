import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import stocks from "../data";

export default function Stock() {
  //useState that hold stock data
  const [stock, setStock] = useState({});

  const { symbol } = useParams();

  //function to get stock data
  const getStock = () => {
    setStock(
      stocks.find((element) => {
        return element.symbol === symbol;
      })
    );
  };

  useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    return (
      <div className="Show">
        <h1 className="show-name">{stock.name}</h1>
            <p>Last Price: ${stock.lastPrice}</p>
            <p>Change: ${stock.change}</p>
            <p>Day High: ${stock.high}</p>
            <p>Day Low: ${stock.low}</p>
            <p>Open: ${stock.open}</p>
      </div>
    );
  };
  const loading = <h1>Loading...</h1>;
  return (
    <div className="stock-symbol">
            <h1>Stock : {symbol}</h1>
            {stock.symbol ? loaded() : loading}
    </div>
  );
}
