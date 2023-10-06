import axiosClient from "./axiosClient";

const Service = {
  GetService: (params = null) => {
    const url = "service";
    return axiosClient.get(url, { params });
  }
}
export default Service;