import "./App.css";

function Child() {
  return (
    <div>
      <h3>This is child component.</h3>
    </div>
  );
}

function Parent({ children }) {
  return (
    <div>
      <h2>This is parent component.</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App 7: Dynamically Adding child component</h1>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}

export default App;
