import SideBars from "../../pages/SideBars";
import PatientDashboard from "../../pages/PatientDashboard";

export default function AdminLayout() {
  return (
    <main className="flex min-h-screen">
      <SideBars />
      <PatientDashboard />
    </main>
  );
}
