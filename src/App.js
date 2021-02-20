import { useEffect, useState } from "react";
import initialMenus from "./menus.json"
import './App.css'

const App = () => {

  const [count, setCount] = useState(0);
  const [menus] = useState(initialMenus);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Menu menus={menus} />
    </>
  );
}

const Menu = ({ menus }) => {

  useEffect(() => {
    console.count("menu called");
  })

  return (
    <div className="menu" >
      {menus.map((menu, index) => <Card menu={menu} key={index} />)}
    </div>
  );
}

const Card = ({ menu: { title, price, photo } }) => {

  useEffect(() => {
    console.count("single card called");
  })

  return (
    <div className="card" >
      <h1>{title}</h1>
      <div>{price}</div>
      <img src={photo} alt={title} />
    </div>
  )
}

export default App;