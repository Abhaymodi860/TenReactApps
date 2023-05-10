import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>App 5: Disable button is input is empty on less than 5 letters</h1>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button disabled={value.length < 5}>Submit</button>
      </div>
    </div>
  );
}

export default App;
