import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/Admin";
import { UserAdmin, CategoriesAdmin } from "../pages/Admin";

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
    component: UserAdmin,
    exact: true,
  },
  {
    path: "/admin/categrories",
    layout: AdminLayout,
    component: CategoriesAdmin,
    exact: true,
  },
];

export default routesAdmin;
