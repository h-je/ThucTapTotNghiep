import React, { useState } from 'react'
import { ArrowRight, Eye, Heart } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'

const Card = ({ book }) => {
    const [tab, setTab] = useState("overview")
    const [isDetail, setDetail] = useState(false)
    const [like, setLike] = useState(false)
    
    const renderTab = () => {
        if (tab === "overview") {
            return <div>
                {isDetail ?
                    <div className='flex'>
                        <div className='flex  text-sm gap-x-7'>
                            <div>
                                <img width={100} height={140} src={book.image} alt="" />
                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <div>
                                    Loại CSDL:
                                </div>
                                <div>
                                    Tác giả:
                                </div>
                                <div>
                                    Thông tin xb:
                                </div>
                                <div>
                                    Phân loại tài liệu:
                                </div>
                                <div>
                                    Mô tả vật lý:
                                </div>
                                <div>
                                    Tài liệu chủ/nguồn:
                                </div>
                                <div>
                                    Từ Khóa:
                                </div>
                                <div>
                                    Tác giả bổ sung:
                                </div>
                            </div>
                            <div className='flex flex-col ml-9 gap-y-4'>
                                <div className='py-[1px] px-[3px] rounded-md text-white bg-blue-300 w-fit font-semibold'>
                                    {book.type}
                                </div>
                                <div>
                                    Nguyễn Đình Trí
                                </div>

                                <div>
                                    {book.publisher}
                                </div>
                                <div>
                                    512.140711/ T406H
                                </div>
                                <div>
                                    {book.description}
                                </div>
                                <div>
                                    Toán học cao cấp; 2017, Giáo dục, H.
                                </div>
                                <div>
                                    Toán cao cấp; Đại số; Hình học giải tích; Giáo trình
                                </div>
                                <div>
                                    Tạ Văn Đĩnh ;Nguyễn Hồ Quỳnh
                                </div>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <img src="http://opac.nlv.gov.vn/pages/opac/TempDir/qrcode/ILIB/203/954460.jpg" width={120} height={120} alt="" />
                        </div>
                    </div> :
                    <div className='flex flex-col text-sm gap-y-3'>
                        <div>Tác giả:  Nguyễn Đình Trí</div>
                        <div>Thông tin xuất bản:  {book.publisher}</div>
                        <div>Phân loại tài liệu: 512.140711 / T406H</div>
                        <div>
                            Tài liệu chủ/Nguồn: Toán học cao cấp; 2017, Giáo dục, H.
                        </div>
                        <div >Loại CSDL:  {book.type}</div>
                    </div>}

                <div className='flex items-center'>
                    <button className='mt-5 px-2 py-1 text-sm flex items-center gap-x-2 bg-blue-400' onClick={() => setDetail(!isDetail)}>{isDetail ? "Tổng quan " : "Chi tiết"}
                        <ArrowRight size={15} /></button>
                    {
                        isDetail && (<div className='flex ml-auto gap-x-7'>
                            <Heart className='cursor-pointer' fill={like ? "red" : "white"} color='red' onClick={() => setLike(!like)} />
                            <div className='flex gap-x-2'>
                                <Eye />
                                <span>20</span>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        }
        if (tab === "location") {
            return (
                <table className='table-auto'>
                    <thead>
                        <th>TT</th>
                        <th>Điểm lưu thông</th>
                        <th>Mã ĐKCB</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </thead>

                    <tbody >
                        <tr className='text-center  border-t border-gray-400'>
                            <td>1</td>
                            <td>Kho Lưu chiểu</td>
                            <td>510549</td>
                            <td>Trong kho chưa sẵn sàng</td>
                            <td>
                                <button>Đk mượn</button>
                            </td>
                        </tr>
                        <tr className='text-center  border-t border-gray-400'>
                            <td>1</td>
                            <td>Kho Lưu chiểu</td>
                            <td>510549</td>
                            <td>Trong kho chưa sẵn sàng</td>
                            <td>
                                <button>Đk mượn</button>
                            </td>
                        </tr>
                        <tr className='text-center  border-t border-gray-400'>
                            <td>1</td>
                            <td>Kho Lưu chiểu</td>
                            <td>510549</td>
                            <td>Trong kho chưa sẵn sàng</td>
                            <td>
                                <button>Đk mượn</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )

        }
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
        <div className='border-[1px] border-gray-400 px-4 py-2 rounded-md bg-gray-200'>
            <div className='title font-semibold'>
                <span>{`1`}. Đánh thức tài năng Toán học  </span>
            </div>
            <hr />
            <div className='flex flex-col mt-3'>
                <div className='flex gap-x-1 mb-4'>
                    <div className='py-1 px-2 text-sm text-white bg-gray-500 cursor-pointer hover:text-gray-300' onClick={() => setTab("overview")}>
                        Tổng quan
                    </div>
                    <div className='py-1 px-2 text-sm text-white bg-gray-500 cursor-pointer  hover:text-gray-300' onClick={() => setTab("location")}>
                        Vị trí tài liệu
                    </div>
                    <div className='py-1 px-2 text-sm text-white bg-gray-500 cursor-pointer  hover:text-gray-300' onClick={() => setTab("link")}>
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