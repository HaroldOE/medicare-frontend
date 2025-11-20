import SideBars from "./SideBars";
import PatientDashboard from "../pages/admin/patientDashboard";

export default function AdminLayout() {
  return (
    <main className="flex min-h-screen">
      <SideBars />
      <PatientDashboard />
    </main>
  );
}
