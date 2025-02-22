import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LessonForm from "./pages/LessonForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lesson-form" element={<LessonForm />} />
    </Routes>
  );
};

export default App;
