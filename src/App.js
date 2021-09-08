import React, { useState } from "react";
import Foto from "./Foto.jpeg";
import "./Styles/Checkbox.css";
import "./Styles/Dark.css";
import "./Styles/App.css";

const App = () => {
  const [Dark, setDark] = useState(false);

  return (
    <main>
      <div className={Dark ? "container__dark" : "container"}>
        <div className="header"></div>
        <div className={Dark ? "container__data__dark" : "container__data"}>
          <img src={Foto} alt="img"></img>
          <h3> Mauro Vera </h3>
          <p> Frontend Developer </p>
          <p> Diseñador Gráfico </p>
        </div>
      </div>
      <label class="content-input">
        <input type="checkbox" onClick={() => setDark(!Dark)} />
        <i></i>
      </label>
    </main>
  );
};

export default App;
