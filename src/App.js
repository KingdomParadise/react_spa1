import { useEffect } from "react";
import "./App.css";
import "./media.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
