import React, { useState } from 'react'

const BorrowedOfUser = ({ books }) => {
    const [show, setShow] = useState(true)
    return (
        <div>
            <div onClick={() => setShow(!show)} className='cursor-pointer font-semibold text-xl'>
                Danh sách: sách đã mượn
            </div>
            <table class={`w-full text-sm text-left text-gray-500 dark:text-gray-400  ${show ? 'hidden' : "block"} `}>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all" class="sr-only">checkbox</label>
                                    </div>
                                </th>  */}
                        {["STT", "id", "Sách", "Ngày đặt mượn", "Hết hiệu lực", "Trạng thái"].map((val, index) => <th key={index} scope="col" class="px-6 py-3">
                            {val}
                        </th>)}


                        {/* <th scope="col" class="px-6 py-3">
                            STT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Sách
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ngày đặt mượn
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Hết hiệu lực
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Trạng thái
                        </th> */}
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books && books?.content.map((book, index) => (
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {/* <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td> */}
                            <td class="px-6 py-4 items-center">
                                {index + 1}
                            </td>
                            <td class="px-6 py-4 items-center">
                                {book.id}
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {book.book}
                            </th>
                            <td class="px-6 py-4">
                                <input type="date" value={book.reservationDate} />
                            </td>
                            <td class="px-6 py-4">
                                <input type="date" value={book.expirationDate} />
                            </td>
                            <td class="px-6 py-4 items-center">
                                {book.status}
                            </td>
                        </tr>))}
                    {books?.content?.length === 0 && <td>Đéo có data đkm BE</td>}
                </tbody>
            </table>

        </div>
    )
}

export default BorrowedOfUser