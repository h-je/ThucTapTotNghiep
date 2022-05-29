
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/layout/Header'
import { authSelector, getUserInfo, updateUserInfo, userSelector } from '../redux/slice/auth'
import { setUserName, setDOB, setFirstName, setLastName, setEmail } from '../redux/slice/auth'
import { borrowing } from '../services/auth.service'

const UserInformation = () => {
    const [errMessage, setErrMessage] = useState('')
    const dispatch = useDispatch()
    const userInfo = useSelector(authSelector)
    const user = useSelector(userSelector)

    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch, user.token])
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUserInfo({ id: user.id, username: userInfo.userName, email: userInfo.email, password: userInfo.password, roles: ["User"], firstName: userInfo.firstName, lastName: userInfo.lastName, dateOfBirth: userInfo.dateOfBirth }))
    }

    return (
        <div className='bg-gray-200'>
            <div className="bg-gray-500">
                <div className="bg-[url('assets/background.jpg')] flex mb-1 shadow-lg shadow-zinc-700 ">
                    <Header />
                </div>
            </div>
            <div className='flex justify-center pb-2'>
                <div className='shadow-lg shadow-gray-600 items-center py-2 px-4 max-w-3xl bg-white border-1  rounded-xl'>
                    <form onSubmit={handleUpdate}  >
                        <div className='grid grid-cols-2 mt-0 gap-x-4 '>
                            <div className=" ">
                                <label type="text" className="block text-gray-700 text-sm font-bold mb-1">First name</label>
                                <input name=' firstName' value={userInfo.firstName} type="text" onChange={(e) => dispatch(setFirstName(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                            </div>
                            <div className="  ">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-1">Last name</label>
                                </div>
                                <input name='lastName' value={userInfo.lastName} type="text" onChange={(e) => dispatch(setLastName(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-1">User name</label>
                            </div>
                            <input name=' username' value={userInfo.userName} type="username" onChange={(e) => dispatch(setUserName(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                        <div className="mt-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-1">email</label>
                            </div>
                            <input name='email' value={userInfo.email} type="email" onChange={(e) => dispatch(setEmail(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>

                        <div className="mt-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-1">Date of birth</label>
                            </div>
                            <input name='dateOfBirth' value={userInfo.dateOfBirth} type="date" onChange={(e) => dispatch(setDOB(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                        <div className="mt-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-1">Password</label>
                            </div>
                            <input name='password' value={userInfo.password} type="text" hidden onChange={(e) => dispatch(setDOB(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>

                        <div className='text-red-500 text-sm text-center pt-4'>
                            {/* {errMessage} */}
                        </div>
                        <div className='text-red-500 text-sm text-center pt-4'>
                            {/* {successMessage} */}
                        </div>
                        <div className="mb-0">
                            <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded-md hover:bg-gray-600">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserInformation