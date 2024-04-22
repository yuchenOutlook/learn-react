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
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Pizza Menu</h2>
      <p>
        Authentic italian cuisine. Great choices of all times. All from our
        stone oven. All organic, all delicous.
      </p>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* <Pizza
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
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log({ pizzaObj });

  if ({ pizzaObj }.pizzaObj.soldOut) {
    return (
      <li className="pizza sold-out">
        <img
          src={{ pizzaObj }.pizzaObj.photoName}
          alt={{ pizzaObj }.pizzaObj.name}
        />
        <div>
          <h3>{{ pizzaObj }.pizzaObj.name}</h3>
          <p>{{ pizzaObj }.pizzaObj.ingredients}</p>
          <p>${{ pizzaObj }.pizzaObj.price + 3}</p>
          <p>Sold Out</p>
        </div>
      </li>
    );
  }

  // The component function needs to be capitalized and return JSX
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <p>${pizzaObj.price + 3}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 9;
  const closeHour = 22;
  const isStoreOpen = hour >= openHour && hour < closeHour;

  // if (isStoreOpen) return <p>CLosed.</p>;
  // isStoreOpen ? alert("We're open!") : alert("We're closed!");
  return (
    <footer className="header footer">
      {isStoreOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Sorry, we're closed. We open at {openHour}:00 am.</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 AM until {closeHour}:00 pm. Come visit us
        or order online.
      </p>
      <button className="btn">Order</button>
    </div>
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
