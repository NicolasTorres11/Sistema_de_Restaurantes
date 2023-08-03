import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/Admin/HomeAdmin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
  },
];

export default routesAdmin;
