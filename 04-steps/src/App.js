const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;

  function handlePrevious() {
    alert("Previous");
  }

  function handleNext() {
    alert("Next");
  }

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
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handlePrevious} // THis is a callback function which will happen at a later time.
          // The later time is when the button is clicked.
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
