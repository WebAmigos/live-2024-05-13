import { useState } from "react";
import "./App.css";
import { UsersList } from "./components/UsersList";

import { users } from "./components/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UsersList data={users} />
    </div>
  );
}

export default App;
