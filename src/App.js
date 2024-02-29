import "./App.css";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Admin/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewCase from "./Pages/Admin/NewCase";
import BillPage from "./Pages/Admin/BillPage";
import Patient from "./Pages/Admin/Patient";
import Patientprofile from "./Pages/Admin/Patientprofile";
import PatientlabReport from "./Pages/Admin/PatientlabReport";
import PatientCases from "./Pages/Admin/PatientCases";
import Opd from "./Pages/Admin/Opd";
import IPD from "./Pages/Admin/IPD";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Admin Routes */}
          <Route path="/">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/new-case" element={<NewCase />} />
            <Route path="dashboard/case/bill" element={<BillPage />} />
            <Route path="dashboard/patient" element={<Patient />} />
            <Route path="dashboard/patient/search" element={<Opd />} />
            <Route path="dashboard/patient/ipdsearch" element={<IPD />} />
            <Route
              path="dashboard/patient/profile"
              element={<Patientprofile />}
            />
            <Route path="dashboard/patient/cases" element={<PatientCases />} />
            <Route
              path="dashboard/patient/lab-reports"
              element={<PatientlabReport />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
