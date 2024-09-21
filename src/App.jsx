import React, { useEffect } from "react";
import { getRates } from "./utils/api";
function App() {
  const [rates, setRates] = React.useState({});

  useEffect(() => {
    getRates().then((data) => setRates(data?.rates));
  }, []);

  if (Object.keys(rates).length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <table>
        <thead>
          <tr className="tr-head">
            <th></th>
            <th>WE BUY</th>
            <th>EXCHANGE RATE</th>
            <th>WE SELL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rates).map((key, index) => {
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>{(Number(rates[key]) * 1.02).toFixed(4)}</td>
                <td>{Number(rates[key]).toFixed(4)}</td>
                <td>{(Number(rates[key]) * 0.98).toFixed(4)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
