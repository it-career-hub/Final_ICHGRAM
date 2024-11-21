import axios from "axios";

const base_url = "http://localhost:5005/api";

export const $api = axios.create({ baseURL: base_url });

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ???
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


export const socketURL = "http://ichgram:5005";




// Докераная вариация

// import axios from "axios";

// const base_url = "http://ichgram:5005/api";

// export const $api = axios.create({ baseURL: base_url });

// $api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // ???
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });


// export const socketURL = "http://ichgram:5005";