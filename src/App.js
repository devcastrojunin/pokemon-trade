import React from "react";
import Trade from "./components/Trade";
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <AppProvider>
      <Trade />
    </AppProvider>
  ); 
}

export default App;
