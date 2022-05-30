import { data } from "autoprefixer";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;


export const reservingOfuser = async (id) => {
  return await axios.get(API_URL + "/reservation/reserving" + id)
}
export const createReservation = async (data) => {
  console.log(data);
  return await axios.post(API_URL + "/reservation", data);

};


export const borrowingOfUser = async (id) => {
  return await axios.get(API_URL + "/borrowbook/borrowing/" + id)
}
export const getAll = async () => {
  return await axios.get(API_URL + "/books/book?offset=0&pageSize=10000")
}
