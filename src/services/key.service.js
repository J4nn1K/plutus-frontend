import http from "../http-common";
class KeyDataService {
  getAll() {
    return http.get("/keys");
  }
  get(id) {
    return http.get(`/keys/${id}`);
  }
  create(data) {
    return http.post("/keys", data);
  }
  update(id, data) {
    return http.put(`/keys/${id}`, data);
  }
  delete(id) {
    return http.delete(`/keys/${id}`);
  }
  deleteAll() {
    return http.delete(`/keys`);
  }
  findByName(name) {
    return http.get(`/keys?name=${name}`);
  }
}
export default new KeyDataService();
