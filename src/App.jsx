import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/contact/ContactPage";
import { JourneyPage } from "./pages/journey/JourneyPage";
import SingleProductPage from "./pages/singleproduct-page/SingleProductPage";
import StorePage from "./pages/store/StorePage";
import TeamPage from "./pages/team/TeamPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/" element={<StorePage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route
          path="/singleproduct/:productId"
          element={<SingleProductPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
