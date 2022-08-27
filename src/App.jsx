import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";
import TeamPage from "./pages/team/TeamPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
