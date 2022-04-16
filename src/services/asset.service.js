import http from "../http-common";
class AssetDataService {
  getAll() {
    return http.get("/assets");
  }
  get(id) {
    return http.get(`/assets/${id}`);
  }
  create(data) {
    return http.post("/assets", data);
  }
  update(id, data) {
    return http.put(`/assets/${id}`, data);
  }
  delete(id) {
    return http.delete(`/assets/${id}`);
  }
  deleteAll() {
    return http.delete(`/assets`);
  }
  findByTitle(title) {
    return http.get(`/assets?title=${title}`);
  }
}
export default new AssetDataService();
