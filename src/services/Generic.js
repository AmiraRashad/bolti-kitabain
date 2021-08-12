import axios from "axios";
//axios.defaults.baseURL="http://localhost:4000/api/";
axios.defaults.baseURL="https://layers-app-api.herokuapp.com/api";

axios.defaults.headers.common["x-auth-token"]=localStorage.getItem("token");


export default Generic;
