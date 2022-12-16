import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Promotii from "./components/NavRoute/Promotii";
import Banigheata from "./components/NavRoute/Banigheata";
import Transport from "./components/ContentCard/Transport";
import Return from "./components/ContentCard/Return";
import Diferenta from "./components/ContentCard/Diferenta";
import Investitie from "./components/ContentCard/Investitie";
import Branduri from "./components/NavRoute/Branduri";
import SuportClienti from "./components/NavRoute/SuportClienti";
import Magazine from "./components/NavRoute/Magazine";
import CheckOut from "./components/LoginCart/CheckOut";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/termeni-conditii-livrare" element={<Transport />}></Route>
          <Route exact path="/renuntarea-cumparare" element={<Return />}></Route>
          <Route exact path="/altex-dublul-diferentei-online" element={<Diferenta />}></Route>
          <Route exact path="/extragarantie" element={<Investitie />}></Route>
          <Route exact path="/Promotii" element={<Promotii />}></Route>
          <Route exact path="/BANI&GHEATA" element={<Banigheata />}></Route>
          <Route exact path="/branduri" element={<Branduri />}></Route>
          <Route exact path="/suport&clienti" element={<SuportClienti />}></Route>
          <Route exact path="/magazine" element={<Magazine />}></Route>
          <Route exact path="/checkout" element={<CheckOut />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
