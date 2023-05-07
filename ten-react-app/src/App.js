import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>App 3: Show/Hide an element</h1>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Element" : "Show Element"}
        </button>
        {show && <div>Toggle change</div>}
      </div>
    </div>
  );
}

export default App;
