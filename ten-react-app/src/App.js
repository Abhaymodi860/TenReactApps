import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>App 4: two way data binding</h1>
      <div>
        {/* the set value function in onChange will update the value variable in p on every render */}
        <input
          type="text"
          placeholder="Enter Text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <p>{value}</p>
    </div>
  );
}

export default App;
