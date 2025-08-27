import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import "./App.css";
import StudentRegister from "./components/auth/register/StudentRegister";
import EmployerRegister from "./components/auth/register/EmployerRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/register/StudentRegister" element={<StudentRegister />} /> 
          <Route path="/auth/register/EmployerRegister" element={<EmployerRegister/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

