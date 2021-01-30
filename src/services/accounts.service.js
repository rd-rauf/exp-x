import axiosInstance from "../core/axios";

function getAccounts() {
  return axiosInstance
    .get("/accounts");
}

export {
    getAccounts
}