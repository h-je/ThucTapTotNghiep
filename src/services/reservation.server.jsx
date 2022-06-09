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
  const user = JSON.parse(localStorage.getItem('user'));

  return await axios.get(API_URL + "/books/book?offset=0&pageSize=10000", {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const getLikedBooks = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.token)
  return await axios.get(API_URL + "/users/likedbook?offset=0&pageSize=10000", {
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const likeBook = async (isbn) => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.token)
  return await axios.put(API_URL + "/users/likebook",
    {
      // ...data,
      param: { isbn },
      // isbn: String(data.isbn),
    },
    {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }
  )
}
