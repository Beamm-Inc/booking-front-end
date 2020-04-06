import AuthAPI from "./auth.api";
import UserAccountAPI from "./user-account.api";
import UserAPI from "./user.api";
import RoleAPI from "./role.api";
import AirportAPI from "./airport.api";
import ScheduledflightAPI from "./scheduledflight.api";
import BookingAPI from "./booking.api";

const API_ROOT = process.env.VUE_APP_API_ROOT;
export {
  API_ROOT,
  AuthAPI,
  UserAccountAPI,
  UserAPI,
  RoleAPI,
  AirportAPI,
  ScheduledflightAPI,
  BookingAPI
};
