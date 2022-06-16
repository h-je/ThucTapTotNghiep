import React, { useState } from 'react'
import { ArrowRight, Heart, Activity } from 'react-feather'
import { useSelector } from 'react-redux'
import { createReservation } from '../services/reservation.server'
import { userSelector } from '../../src/redux/slice/auth'
import { likeBook } from '../services/reservation.server'
import { toast } from 'react-toastify'

const Card = ({ book, index }) => {
    const [tab, setTab] = useState("overview")
    const user = useSelector(userSelector)
    const [isDetail, setDetail] = useState(false)
    const [like, setLike] = useState(false)
    const [fill, setFill] = useState()
    const reservation = () => {
        console.log(user.id);
        createReservation({ userId: user.id, isbn: book.isbn }).then(() => {

            alert('thành công')
        }).catch((error) => {
            toast(error.response.data)
            console.log({ error });
        })
    }
    const actionLikeBook = () => {
        likeBook(book.isbn).then((response) => {
            toast(response.data)

        })
            .then(() => {
                setLike(true)
            })
            .catch((error) => {
                console.log("that bai")
            })
    }
    // const likesBook = () => {
    //     likeBook({ isbn: book.isbn }).then((response) => {
    //         alert('đã thêm sách thành công')
    //         console.log(JSON.stringify(response.data.content));

    //     }).catch(() => {
    //         console.log('fail');
    //     })
    // }
    const renderTab = () => {
        if (tab === "overview") {
            return <div>
                {isDetail ?
                    <div className='flex'>
                        <div className='flex  text-sm gap-x-7'>
                            <div className='flex-shrink-0'>
                                <img width={100} height={140} src={`${process.env.REACT_APP_API_URL}/books/image/${book.isbn}`} alt="" />
                            </div>
                            <div className='flex flex-col gap-y-5 gap-x-2  '>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Tiêu đề
                                    </div>
                                    <div className='col-span-5'>
                                        {book.title}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Tác giả
                                    </div>
                                    <div className='col-span-5'>
                                        {book.authors}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Dạng tài liệu
                                    </div>
                                    <div className='col-span-5'>
                                        {book.category}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6 gap-x-5'>
                                    <div className='w-24'>
                                        Mô tả
                                    </div>
                                    <div className='col-span-5'>
                                        {book.content}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Isbn
                                    </div>
                                    <div className='col-span-5'>
                                        {book.isbn}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Giá
                                    </div>
                                    <div className='col-span-5'>
                                        {book.price}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Nhà xuất bản
                                    </div>
                                    <div className='col-span-5'>
                                        {book.publisher}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Có sẵn
                                    </div>
                                    <div className='col-span-5'>
                                        {book.ready}
                                    </div>
                                </div>
                                <div className='grid grid-cols-6  gap-x-5'>
                                    <div className='w-24'>
                                        Tags
                                    </div>
                                    <div className='col-span-5'>
                                        {book.tags?.join(", ")}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div> :
                    <div className='flex flex-col text-sm gap-y-3'>
                        <div>Tác giả: {book.authors}</div>
                        <div>Thông tin xuất bản:  {book.publisher}</div>
                        <div>Phân loại tài liệu: </div>
                        <div>
                            Tài liệu chủ/Nguồn:
                        </div>
                        <div >Loại CSDL:  {book.type}</div>
                    </div>}

                <div className='flex items-center'>
                    <button className='mt-5 px-2 py-1 text-sm flex items-center gap-x-2 bg-blue-400' onClick={() => setDetail(!isDetail)}>{isDetail ? "Tổng quan " : "Chi tiết"}
                        <ArrowRight size={15} /></button>
                    {
                        isDetail && (<div className='flex ml-auto gap-x-7 mt-3'>
                            <div onClick={reservation} className='px-2 py-1 cursor-pointer  flex justify-center border-2 bg-blue-600 rounded-lg font-serif '>
                                <Activity />Đăng ký mượn
                            </div>
                            <Heart className='cursor-pointer mt-1' color='red' fill={like && 'red'} onClick={actionLikeBook} />
                            {/*  logic like cùng với fill màu nền? */}
                        </div>)
                    }
                </div>
            </div>
        }
        // if (tab === "location") {
        //     return (
        //         <table className='table-auto'>
        //             <thead>
        //                 <th>TT</th>
        //                 <th>Điểm lưu thông</th>
        //                 <th>Mã ĐKCB</th>
        //                 <th>Trạng thái</th>
        //                 <th>Thao tác</th>
        //             </thead>

        //             <tbody >
        //                 <tr className='text-center  border-t border-gray-400'>
        //                     <td>1</td>
        //                     <td>Kho Lưu chiểu</td>
        //                     <td>510549</td>
        //                     <td>Trong kho chưa sẵn sàng</td>
        //                     <td>
        //                         <button>Đk mượn</button>
        //                     </td>
        //                 </tr>
        //                 <tr className='text-center  border-t border-gray-400'>
        //                     <td>1</td>
        //                     <td>Kho Lưu chiểu</td>
        //                     <td>510549</td>
        //                     <td>Trong kho chưa sẵn sàng</td>
        //                     <td>
        //                         <button>Đk mượn</button>
        //                     </td>
        //                 </tr>
        //                 <tr className='text-center  border-t border-gray-400'>
        //                     <td>1</td>
        //                     <td>Kho Lưu chiểu</td>
        //                     <td>510549</td>
        //                     <td>Trong kho chưa sẵn sàng</td>
        //                     <td>
        //                         <button>Đk mượn</button>
        //                     </td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     )
        // }
        if (tab === "link") {
            return (
                <table>
                    <thead>
                        <th>TT</th>
                        <th>Thông tin tài liệu</th>
                        <th>Loại</th>
                    </thead>
                    <tbody>
                        <tr className='text-center border-t border-gray-400'>
                            <td>1</td>
                            <td>Toán học cao cấp/Nguyễn Đình Trí</td>
                            <td>Sách bộ</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }
    return (
        <div className='border-[1px] border-gray-400 px-4 py-2 rounded-md bg-gray-200 mb-2 mx-40'>
            <div className='title font-semibold'>
                <span className='mr-1'>{index + 1}.</span>
                <span>{book.title}</span>
            </div>
            <hr />
            <div className='flex flex-col mt-3'>
                <div className='flex gap-x-1 mb-4'>
                    <div className='py-1 px-2 text-sm rounded-sm text-white bg-gray-500 cursor-pointer hover:text-gray-300' onClick={() => setTab("overview")}>
                        Tổng quan
                    </div>
                    <div className='py-1 px-2 text-sm rounded-sm text-white bg-gray-500 cursor-pointer  hover:text-gray-300' onClick={() => setTab("location")}>
                        Vị trí tài liệu
                    </div>
                    <div className='py-1 px-2 text-sm rounded-sm text-white bg-gray-500 cursor-pointer  hover:text-gray-300' onClick={() => setTab("link")}>
                        Liên kết
                    </div>
                </div>
                {
                    renderTab()
                }
            </div>
        </div>
    )
}

export default Card