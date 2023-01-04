import { useEffect } from "react";
import "./App.css";
import Desain from "./container/Desain/Desain";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import SchedulePage from "./container/SchedulePage/SchedulePage";
import Sponsors from "./container/Sponsors/Sponsors";

function App() {
  let documetTitle = document.title;

  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "Come back  :(";
    });
    window.addEventListener("focus", () => {
      document.title = documetTitle;
    });
  }, []);
  return (
    <div className='App'>
      <Header />
      <Desain />
      <SchedulePage />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
