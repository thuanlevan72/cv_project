import axiosClient from "./axiosClient";

const Skill = {
  GetSkills: (params = null) => {
    const url = "skills";
    return axiosClient.get(url, { params });
  }
}
export default Skill;