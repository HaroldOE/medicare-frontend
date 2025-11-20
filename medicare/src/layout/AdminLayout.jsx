import SideBars from "./SideBars";
import PatientDashboard from "../pages/admin/patientDashboard";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <SideBars />
      <PatientDashboard />
    </div>
  );
}
