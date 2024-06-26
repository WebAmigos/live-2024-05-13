import { useState } from "react";
import "./App.css";
import { UsersList } from "./components/UsersList";

import { users } from "./components/data";
import { BrandProvider } from "./components/BrandContext";
import { Logo } from "./components/Logo";
import { UsersListWithReducer } from "./components/UsersListWithReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrandProvider>
      <div>
        {/* <Logo /> */}
        {/* <UsersList data={users} /> */}
        <UsersListWithReducer />
      </div>
    </BrandProvider>
  );
}

export default App;
