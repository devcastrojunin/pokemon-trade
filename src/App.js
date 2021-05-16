import React, { useEffect } from "react";
import Trade from "./components/Trade";
import { AppProvider } from "./context/appContext";

function App() {
  useEffect(() => {
    document.title = "Pokemon trade";
  }, [])
  return (
    <AppProvider>
      <Trade />
    </AppProvider>
  ); 
}

export default App;
