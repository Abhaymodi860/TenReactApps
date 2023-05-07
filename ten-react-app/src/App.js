import "./App.css";

function App() {
  // the array/list of users with name and id
  const users = [
    { id: 1, name: "Leon" },
    { id: 2, name: "Ada" },
    { id: 3, name: "Ashley" },
  ];

  // we use map function to render the elements of array not for loop or any other.
  const userItems = users.map((user) => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      <h1>App 2: Display array of users</h1>
      <div>
        <h3>Users name:</h3>
        <ul>{userItems}</ul>
      </div>
    </div>
  );
}

export default App;
