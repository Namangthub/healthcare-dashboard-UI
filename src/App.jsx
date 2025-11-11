<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import HealthCareDashboard from "./components/HealthCareDashboard";

// ✅ Add your page imports here (make sure file names match)
import AppointmentsPage from "./pages/AppointmentsPage";
import PatientsPage from "./pages/PatientsPage";
import ReportsPage from "./pages/ReportsPage";
import SchedulePage from "./pages/SchedulePage";

export default function App() {
  return (
    <Routes>
      {/* Default Dashboard Page */}
      <Route path="/" element={<HealthCareDashboard />} />

      {/* ✅ These pages make your navigation links work */}
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/patients" element={<PatientsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
    </Routes>
  );
}
=======
import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HealthcareDashboard from "./components/HealthCareDashboard.jsx";
import axios from "axios";
function App() {
  // const [count, setCount] = useState(0)
  const [totalPatient, setTotalPatient] = useState(0);
  const [activePatients, setActivePatients] = useState(0);
  useEffect(() => {
    const getAllPatients = async () => {
      const response = await axios.get(
        "	https://healthcare-dashboard-n8rs.onrender.com/api/patients/"
      );
      setTotalPatient(response.data.length);
    };
    const getActivePatients = async () => {
      const activePatientsResponse = await axios.get(
        "https://healthcare-dashboard-n8rs.onrender.com/api/patients/active"
      );
      setActivePatients(activePatientsResponse.data.length);
    };
    getAllPatients();
    getActivePatients();
  }, []);
  return (
    <>
      <HealthcareDashboard
        totalPatient={totalPatient}
        activePatients={activePatients}
      />
    </>
  );
}

export default App;
>>>>>>> ef1c5546e93ce507852211db30e3750994ec3ccf
