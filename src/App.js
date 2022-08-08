import { useState } from "react";
import "./styles.css";

export default function App() {
  const [headingtext, SetHeadingtext] = useState();
  const [isMouseover, SetisMouseover] = useState(false);
  const [name, SetName] = useState("");

  function handleClick() {
    SetHeadingtext("Successsful login");
  }

  function handleMouseover() {
    SetisMouseover(true);
  }
  function handleMouseout() {
    SetisMouseover(false);
  }
  //////////////Onchange///////

  function handleChange(event) {
    console.log(event.target.value);
    SetName(event.target.value);
  }

  return (
    <form>
      <h3>
        {headingtext}
        {name}
      </h3>

      <label for="username" />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Email or Phone"
        id="username"
      />

      <label for="password" Password />
      <input type="password" placeholder="Password" id="password" />

      <button
        style={{ background: isMouseover ? "Yellow" : "White" }}
        onClick={handleClick}
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
      >
        Log In
      </button>
    </form>
  );
}
