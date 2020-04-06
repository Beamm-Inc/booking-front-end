import { Login, ForgotPassword } from "@/modules/account";
import AppLayout from "@/modules/layout";
import NotFoundPage from "@/components/NotFoundPage.vue";

import accountRoutes from "@/modules/account/account.routes";
import homeRoutes from "../modules/home/home.routes";
import bookingRoutes from "../modules/booking/booking.routes";
import manageRoutes from "../modules/manage/manage.routes";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: AppLayout,
    children: [
      ...accountRoutes,
      ...homeRoutes,
      ...bookingRoutes,
      ...manageRoutes
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword
  },
  {
    path: "*",
    name: "not-found",
    component: NotFoundPage
  }
];
export default routes;
