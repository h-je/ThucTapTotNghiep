import { data } from "autoprefixer";
import axios from "axios";
const API_URL = "https://12c5-116-110-40-30.ap.ngrok.io/api/";

export const reservingOfuser = async (data)=>{
  return await axios.get(API_URL + "reservation/reserving" , data)
}
export const createReservation = async (data) => {
  return await axios.post(API_URL + "reservation", data);
};
