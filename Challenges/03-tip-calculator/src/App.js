import "./styles.css";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <TipCalculator></TipCalculator>
    </div>
  );
}

function TipCalculator() {
  const [billTotal, setBillTotal] = useState(0);
  const [my_tip_percentage, setMyTipPercentage] = useState(0);
  const [friend_tip_percentage, setFriendTipPercentage] = useState(0);

  const tip = billTotal * (my_tip_percentage + friend_tip_percentage);

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <Bill onChange={setBillTotal}></Bill>
      <ServiceSatisfiction
        percentage={my_tip_percentage}
        onSelect={setMyTipPercentage}
      ></ServiceSatisfiction>
      <ServiceSatisfiction
        percentage={friend_tip_percentage}
        onSelect={setFriendTipPercentage}
      ></ServiceSatisfiction>
      <Output bill_total={billTotal} tip={tip}></Output>
      <Reset></Reset>
    </div>
  );
}

function Output({ bill_total, tip }) {
  let cost = Number(bill_total) + Number(tip);

  return (
    <div>
      <h1>
        You pay ${cost}: (${bill_total} + ${tip} tip)
      </h1>
    </div>
  );
}

function Reset() {}

function Bill({ onChange }) {
  return (
    <div className="bill">
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="0"
        onChange={(e) => onChange(Number(e.target.value))}
      ></input>
    </div>
  );
}

function ServiceSatisfiction({ percentage, onSelect }) {
  return (
    <div>
      <div className="service-satisfiction">
        <label>How do like the service?</label>
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="1">Dissatisfied (0 %)</option>
          <option value="10">It was okay (10 %)</option>
          <option value="20">It was good (20 %)</option>
          <option value="30">It was wonderful (30 %)</option>
        </select>
      </div>
    </div>
  );
}

export default App;
