import "./App.css";
import ChildA from "./Component/ChildA";
import { createContext, useState } from "react";
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ fname: "Yuvraj", lname: "Kushawaha" });

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext};
