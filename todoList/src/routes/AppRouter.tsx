import { BacklogScreen } from "../components/screens/BacklogScreen/BacklogScreen";
import { SprintScreen } from "../components/screens/SprintScreen/SprintScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router"; // Importa Router

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BacklogScreen />} />
        <Route path="/sprints" element={<SprintScreen />} />
      </Routes>
    </Router>
  );
};
