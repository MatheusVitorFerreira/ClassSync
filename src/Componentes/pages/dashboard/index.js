import MainLayout from "../../layout/mainLayout";
import DashboardInfoCard from '../dashboardInfo';

function Dashboard() {
  return (
    <MainLayout title="Painel Principal" user="Admin">
      <DashboardInfoCard />
    </MainLayout>
  );
}

export default Dashboard;
