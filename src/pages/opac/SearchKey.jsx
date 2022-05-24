import React, { useState } from "react";
import axios from "axios";
import { Search } from 'react-feather'
import Card from '../../components/Card';
import { search } from "../../services/auth.service";

const SearchKey = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const onInputChange = e => {
        setSearchTerm(e.target.value);
    };

    const fetchBooks = async () => {
        const result = await search({})
        setBooks(result.data);
        console.log(result.data);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        fetchBooks();
    };

    // const bookAuthors = authors => {
    //     if (authors?.length <= 2) {
    //         authors = authors.join(" and ");
    //     } else if (authors.length > 2) {
    //         let lastAuthor = " and " + authors.slice(-1);
    //         authors.pop();
    //         authors = authors.join(", ");
    //         authors += lastAuthor;
    //     }
    //     return authors;
    // };

    return (
        <section>
            <form onSubmit={onSubmitHandler}>
                <div className='flex mt-10 gap-x-1'>
                    <select name="" id="" className='border-[1px] border-black rounded-md'>
                        <option>Nhan đề</option>
                        <option>Tác giả</option>
                        <option>Từ khóa</option>
                        <option>Số ISBN</option>
                        <option>Chỉ số phân loại</option>
                        <option>Năm xuất bản</option>
                    </select>

                    <input
                        className='flex-1 border-[1px] border-black rounded-md'
                        type="search"
                        placeholder="microservice, restful design, etc.,"
                        value={searchTerm}
                        onChange={onInputChange}
                    />
                    <button type='submit' className='px-3 flex items-center gap-x-3 bg-blue-500 py-1'>
                        <Search size={19} />
                        <div className="rounded" >
                            Tìm kiếm
                        </div>
                    </button>
                </div>
            </form>
            <ul>
                {books.map((book, index) => {
                    return (
                        <li key={book.id}>
                            <div>
                                
                            </div>
                            <hr />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default SearchKey