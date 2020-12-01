import axios from "axios";
// const baseurl = process.env.BASE_URL
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    return config;
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      return Promise.reject(new Error(res.errors || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    // check request
    const originalRequest = error.config;
    const dataError = Object.entries(error.response.data).length;
    // handle response
    if (dataError && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    return Promise.reject(error.response.data);
  }
);

export default service;
