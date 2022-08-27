import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
