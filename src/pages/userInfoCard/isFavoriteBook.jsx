import React, { useCallback, useEffect, useState } from 'react'
import { getLikedBooks } from '../../services/reservation.server';
import Header from '../../components/layout/Header'
import { createReservation } from '../../services/reservation.server'
import { userSelector } from '../../../src/redux/slice/auth'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { likeBook } from '../../services/reservation.server'


const IsFavoriteBook = () => {
    const user = useSelector(userSelector)
    const [likedBooks, setLikedBooks] = useState([]);
    const [action, setAction] = useState(true);

    const getCLLikedBooks = useCallback(() => {
        getLikedBooks().then((response) => {
            setLikedBooks(response.data.content);
            setAction(false)
        })
    }, [action])

    const reservation = (book) => {
        createReservation({ userId: user.id, isbn: book.isbn }).then(() => {
            toast('thành công')
        }).catch((error) => {
            toast(error.response.data)
            console.log({ error });
        })
    }
    const actionUnLikeBook = (book) => {
        setAction(true)
        likeBook(book.isbn)
            .then((response) => {
                // alert('đã thêm sách thành công')
                toast(response.data);
                getCLLikedBooks()

            }).catch(() => {
                toast('fail');
            })
    }
    // const makeLikeBook = isbn => {
    //     const newBooks = likedBooks.map(book => {
    //         if (book.isbn === isbn) book.liked = !book.liked
    //         return book
    //     })
    //     setLikedBooks(newBooks)
    // }
    // const deleteLikeBook = isbn => {
    //     const newBooks = likedBooks.filter(todo => todo.isbn !== isbn)
    //     setLikedBooks(newBooks)
    // }
    const books = likedBooks.map((book) => {
        return (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 items-center">{book.isbn}</td>
                <td><img width={100} height={140} src={`${process.env.REACT_APP_API_URL}/books/image/${book.isbn}`} alt="" /></td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{book.title}</td>
                <td className="px-6 font-medium text-gray-900 dark:text-white  items-center  max-w-xs m-auto ">{book.content}</td>
                {/* <td>
                    <div onClick={deleteLikeBook.bind(this, book.isbn)} class="font-medium ml-2 text-blue-600 cursor-pointer dark:text-blue-500 hover:underline">Bỏ thích</div>
                </td> */}
                <td>
                    <div onClick={() => actionUnLikeBook(book)} class="font-medium ml-6 text-blue-600 cursor-pointer dark:text-blue-500 hover:underline">Bỏ thích</div>
                </td>
                <td>
                    <div onClick={() => reservation(book)} class="font-medium ml-6 text-blue-600 cursor-pointer dark:text-blue-500 hover:underline">Đăng ký mượn</div>
                </td>
            </tr >
        )
    })

    useEffect(() => {
        getCLLikedBooks();
    }, [])
    return (
        <div className=" min-h-screen ">
            <div className="bg-[url('assets/background.jpg')] flex shadow-lg shadow-zinc-700">
                <Header />
            </div>
            <div class="m-10 relative overflow-x-auto shadow-md  sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Isbn</th>
                            <th scope="col" class="px-6 py-3">Ảnh</th>
                            <th scope="col" class="px-6 py-3">Tiêu đề</th>
                            <th scope="col" class="px-6 py-3">Nội dung</th>
                            <th scope="col" class="px-6 py-3">Xóa</th>
                            <th scope="col" class="px-6 py-3">
                                Đăng ký mượn
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {books}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IsFavoriteBook