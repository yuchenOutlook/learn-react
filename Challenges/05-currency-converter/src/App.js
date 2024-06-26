import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(0);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(
    function () {
      async function convertCurrency() {
        try {
          setisLoading(true);
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
          setisLoading(false);
        } catch (error) {
          console.log("log error");
        } finally {
        }
      }

      if (fromCur === toCur) {
        return setConverted(amount);
      }
      convertCurrency();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <CurrencySelect
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        isLoading={isLoading}
      ></CurrencySelect>
      <CurrencySelect
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        isLoading={isLoading}
      ></CurrencySelect>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}

function CurrencySelect({ value, isLoading, onChange }) {
  return (
    <>
      <select onChange={onChange} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </>
  );
}
