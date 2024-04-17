import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // you can define the style outside the return statement
  const style = { color: "red", fontSize: "52px", textTransform: "uppercase" };

  return (
    // here you have inline css styles
    // <h1 style={{ color: "red", fontSize: "52px", textTransform: "uppercase" }}>
    //   Fast React Pizza Co.
    // </h1>

    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Pizza.</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  // The component function needs to be capitalized and return JSX
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredient}</p>
      <p>$ {props.price + 3}</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 9;
  const closeHour = 22;
  const isStoreOpen = hour >= openHour && hour < closeHour;

  // isStoreOpen ? alert("We're open!") : alert("We're closed!");
  return (
    <footer className="header footer">
      {new Date().toLocaleDateString()}. We're currently open!!
    </footer>
  );
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react before v18
// ReactDOM.render(<App />);
