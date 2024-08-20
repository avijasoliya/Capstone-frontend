import axios from "axios";
import { appConfig } from "../config";
// import { getEncryptedString } from "../services";

const axiosApiSound = axios.create({
  baseURL: appConfig.SOUND_API_URL,
});
const axiosApi = axios.create({
  baseURL: appConfig.API_URL,
});

axiosApiSound.defaults.headers = {
  "X-Api-Key": appConfig.SOUND_ACCESS_KEY,
};

const setAuthHeader = (token) => {
  axiosApi.defaults.headers.Authorization =
    token || `Bearer ${localStorage.getItem("_token")}`;
  // axiosApi.defaults.headers.requestToken = getEncryptedString(
  //   appConfig?.ENCRYPTION_MESSAGE
  // );
};

axiosApi.defaults.headers = {
  Authorization: `Bearer ${localStorage.getItem("_token")}`,
  // requestToken: getEncryptedString(appConfig?.ENCRYPTION_MESSAGE),
};

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 404) {
      console.log("/404");
    } else if (error?.response?.status === 500) {
      console.log("/500");
    } else if (error?.response?.status === 401) {
      localStorage?.removeItem("_token");
      if (window.location.href.includes("teacher")) {
        window.location.href = `/teacher/login`;
      } else if (window.location.href.includes("admin")) {
        window.location.href = `/admin/login`;
      } else {
        window.location.href = `/quiz/exam/`;
      }
    } else {
      console.log("/other-errors.");
    }
    return Promise.reject(error);
  }
);

export { axiosApi, axiosApiSound, setAuthHeader };
