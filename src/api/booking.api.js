import { API_ROOT } from ".";
import Request from "./request";

const PATH = "booking";

const BookingAPI = {
    get(id) {
      return Request.get(`${API_ROOT}${PATH}/${id}`);
    },
    all(filter) {
      return Request.get(`${API_ROOT}${PATH}`, { params: { filter } });
    },
    create(data) {
      return Request.post(`${API_ROOT}${PATH}/flight/reservation/`, data);
    },
    update(data) {
      return Request.post(`${API_ROOT}${PATH}/edit`, data);
    },
    remove(id) {
      return Request.get(`${API_ROOT}${PATH}/delete/${id}`);
    },
    search(data) {
      return Request.post(`${API_ROOT}${PATH}/search`, data);
    }
  };

  export default BookingAPI;