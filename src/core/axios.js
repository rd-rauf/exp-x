import axios from "axios";
import axiosConfig from "./axiosConfig";

const instance = axios.create({
  baseURL: "http://13.127.142.19:1337"
});

let userAuthInfo = localStorage.getItem("userInfo");
if (userAuthInfo) {
  userAuthInfo = JSON.parse(userAuthInfo);
  if (userAuthInfo.userAuthToken) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + userAuthInfo.userAuthToken;
  }
}
instance.defaults.headers.post["Content-Type"] = "application/json";

axiosConfig.init(instance); /* feeling nostalgic 😍 */

export default instance;
