const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;
  return (
    <div class="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 1 ? "active" : ""}`}>2</div>
        <div className={`${step >= 1 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#ffff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#ffff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
