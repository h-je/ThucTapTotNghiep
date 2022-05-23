import axiosClient from "./axiosClient";

const BOOK_API = "/books";


const bookApi= {
 
  getBook: () => {
    const url = BOOK_API ;
    return axiosClient.get(url);
  },
 
  //get book by content or title
  getBookByQuery: (query) => {
    const url = BOOK_API + `search?query=${query}`;
    return axiosClient.post(url);
  },
  //get book by author
  getBookByAuthor: (authorName) => {
    const url = BOOK_API + `/searchbyauthor?author=`+authorName;
    return axiosClient.post(url);
  },

  
};

export default bookApi;