import { Outlet } from "react-router-dom";
import LayoutNavbar from "@/layout/LayoutNavbar";

const DashboardPage = () => {
  return (
    <LayoutNavbar>
      <Outlet />
    </LayoutNavbar>
  )
}
export default DashboardPage