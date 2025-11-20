import SideBars from "../../Components/SideBars";
import PatientDashboard from "../../Components/PatientDashboard";

export default function AdminLayout() {
  return (
    <main className="flex min-h-screen">
      <SideBars />
      <PatientDashboard />
    </main>
  );
}
