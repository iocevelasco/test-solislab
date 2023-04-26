import "./styles.css";
import Cart from "./Cart";
import { useState, useEffect } from "react";
export default function App() {
  const [cart, setCart] = useState({
    items: []
  });

  const fetchUserData = () => {
    fetch("./cart.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCart(data);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="App">
      <Cart items={cart.items} setCart={setCart} />
    </div>
  );
}

