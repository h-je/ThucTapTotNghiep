import React from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../../redux/slice/auth'
import { useDispatch } from 'react-redux'

const UserModal = ({ show }) => {
    const dispatch = useDispatch()
    const LogOut = () => {
        localStorage.removeItem("user");
        dispatch(logOut())
    }
    return (
        <div className={`flex flex-col gap-y-5 top-12 border-2 rounded-xl mr-4 min-w-max  right-0 text-gray-600 px-3 py-3 z-40 shadow-xl shadow-gray-600 bg-white ${!show ? 'hidden' : "block"} absolute`} >
            <Link to="/userinformation" className='cursor-pointer hover:bg-gray-400 px-1 py-1 rounded-lg'>
                Thông tin cá nhân
            </Link>
            <Link to="userbookorder" className='cursor-pointer hover:bg-gray-400 px-1 py-1 rounded-lg'>
                Thông tin sách mượn
            </Link>
            <div onClick={LogOut} className='cursor-pointer hover:bg-gray-400 px-1 py-1 rounded-lg'>
                Đăng xuất
            </div>
        </div>
    )
}

export default UserModal