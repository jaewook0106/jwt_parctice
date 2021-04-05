import axios from 'axios';
import Vue from 'vue';



const instance = axios.create(
  // {
  //   baseURL: process.env.baseURL || process.env.apiUrl || "",
  //   withCredentials: true,
  //   timeout: 60 * 1000
  // }
);

/* loader  */
let loader;
const apiCallList = [];

function addApiCall(url) {
  apiCallList.push(url);
  if (loader === undefined || apiCallList.length === 0) {
    loader = Vue.$loading.show({
      // Optional parameters
      container: null,
      canCancel: false,
      loader: 'spinner', // spinner or dots or bars
      backgroundColor: 'none',
    });
  } else {
    // loader.show();
  }
}

function removeApiCall() {
  apiCallList.pop();
  if (apiCallList.length === 0) {
    loader.hide();
    loader = undefined;
  }
}

instance.interceptors.request.use((config) => {
  // const token = localStorageService.getAccessToken();
  // if(token) {
  //   config.headers['Authorization'] = token;
  // }
  console.log('interceptors', config)
  addApiCall(config.url);
  console.log('requst.use')
  return config;
}, (error) => {
  console.log('requst.use error',error);
  return false;
});

instance.interceptors.response.use((response) => {
  removeApiCall();
  console.log('response.use');
  return response;
}, (error) => {
  removeApiCall();

  if (error.response.status === 204) {
    alert(error.message);
    return false;
  }

  if (error.response.status === 401) {
    alert(error.message);
    return false;
  }

  if (error.response.status === 403) {
    // Forbidden
    alert(error.message);
    return false;
  }

  if (error.response.status === 404) {
    // Not Found
    alert(error.message);
    return false;
  }

  if (error.response.status === 500) {
    alert(error.message);
    return false;
  }

  if (error.response) {
    if (error.response.data.message) {
      return error.response;
    }
  }

  return false;
});



export default instance;
