import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<AllProjects />} />
    </Routes>
  );
}

export default App;
