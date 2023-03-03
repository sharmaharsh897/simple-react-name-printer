import React, { useState } from "react";

export default function App() {
  // State for username
  const [name, setName] = useState(" ");

  // Function to change name
  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Your agent name is :</h1>

      <input value={name} onChange={changeName}></input>
      <h2>{name}</h2>
      <button>change</button>
    </div>
  );
}
