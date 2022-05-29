import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/layout/Header'
import { userSelector } from '../../redux/slice/auth'
import { bookSelector, deleteReservationBook, fetchReservationBook } from '../../redux/slice/book'
import { fetchBorrorwingOfUser, fetchBorrorwedOfUser } from '../../redux/slice/borrow'
import BorrowedOfUser from './BorrowedOfUser'
import BorrowingOfUser from './BorrowingOfUser'
import Reserving from './Reserving'

const UserBookOrder = () => {
    // const books = useSelector(bookSelector)
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const book = useSelector(bookSelector)
    const handleDeleteReservation = (id) => {

        dispatch(deleteReservationBook(id))
        console.log("xoas thawng co id", id);
    }
    useEffect(() => {
        console.log(user.id);
        dispatch(fetchReservationBook(user.id))
        dispatch(fetchBorrorwingOfUser(user.id))
        dispatch(fetchBorrorwedOfUser(user.id))

    }, [dispatch, user])


    return (
        <div className=" min-h-screen ">
            <div className="bg-[url('assets/background.jpg')] flex shadow-lg shadow-zinc-700">
                <Header />
            </div>
            <div>
                <div class="m-10 relative overflow-x-auto shadow-md  sm:rounded-lg">
                    <Reserving books={book || []} onDeleteById={(value) => handleDeleteReservation(value)} />
                </div>
                <div class="m-10 relative overflow-x-auto shadow-md  sm:rounded-lg">
                    <BorrowingOfUser />
                </div>
                {/* nếu không nhận dc books được thì mặc định sẽ là [] */}
                {/* !books -> [] */}
                <div class="m-10 relative overflow-x-auto shadow-md  sm:rounded-lg">
                    <BorrowedOfUser />
                </div>
            </div>
        </div>
    )
}

export default UserBookOrder