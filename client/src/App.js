import React from "react";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Saved />
      <Search />
    </div>
  );
}

export default App;
