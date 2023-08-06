import { AdminLayout } from "../layouts";
import { HomeAdmin, usersAdmin } from "../pages/Admin/";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
  },
  {
    path: "/admin/users",
    layout: AdminLayout,
    component: usersAdmin,
    exact: true,

  },
];

export default routesAdmin;
