import axios from "axios";

const BASE_URL = "https://62231068666291106a33d218.mockapi.io/sv";
export const sinhVienServ = {
  layDanhSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
  layChiTietSinhVien: (id) => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/${id}`,
    });
  },
  addSinhVien: (data) => {
    return axios({
      method: "POST",
      url: `${BASE_URL}`,
      data: data,
    });
  },
  delteteSinhVien: (id) => {
    return axios({
      method: "DELETE",
      url: `${BASE_URL}/${id}`,
    });
  },
  updateSinhVien: (id, value) => {
    return axios({
      method: "PUT",
      url: `${BASE_URL}/${id}`,
      data: value,
    });
  },
};
