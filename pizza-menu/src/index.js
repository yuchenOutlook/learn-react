import React from "react";
import ReactDOM from "react-dom";

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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Pizza Menu</h1>
    </header>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our pizzas.</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
      <p>Price: $6</p>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <button>Add to cart</button>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 Pizza Menu</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // The react strictmode means that the app will be rendered in strict mode
  // What is a strict mode? It is a tool for highlighting potential problems in an application.
  // Like some deprecated features, some unsafe lifecycle methods, etc.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
