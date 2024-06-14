import React from "react";

const Header = () => {
  console.log("Header rendered");

  return (
    <header>
      <h1>QuantumTech</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
