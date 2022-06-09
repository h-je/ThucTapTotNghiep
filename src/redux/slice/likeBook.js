import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const likeBook = async (isbn) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.token);
  return await axios.put(API_URL + "/users/likebook?isbn=" + isbn, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};
