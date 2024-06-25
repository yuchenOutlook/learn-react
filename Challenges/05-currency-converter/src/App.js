import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(0);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");

  useEffect(
    function () {
      async function convertCurrency() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
          );
          if (!res.ok) {
            throw new Error("API response went wrong.");
          }

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found.");
          }
          setConverted(data.rates[toCur]);
        } catch (error) {
          console.log("log error");
        } finally {
        }
      }
      convertCurrency();
    },
    [amount, fromCur, toCur]
  );

  function handleCurrentcySelection() {
    console.log("currency");
  }

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <CurrencySelect
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
      ></CurrencySelect>
      <CurrencySelect
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
      ></CurrencySelect>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}

function CurrencySelect({ value, onChange }) {
  return (
    <>
      <select onChange={onChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </>
  );
}
