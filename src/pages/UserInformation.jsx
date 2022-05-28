
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        dispatch(updateUserInfo({ id: user.id, username: userInfo.userName, email: userInfo.email, password: "123456", roles: ["ADMIN"], firstName: userInfo.firstName, lastName: userInfo.lastName, dateOfBirth: userInfo.dateOfBirth }))
    }

    return (
        <div>
            <div className=''>
                <form onSubmit={handleUpdate} >
                    <div className='grid grid-cols-2  gap-x-10 '>
                        <div className="mt-4 ">
                            <label type="text" className="block text-gray-700 text-sm font-bold mb-2">First name</label>
                            <input name=' firstName' value={userInfo.firstName} type="text" onChange={(e) => dispatch(setFirstName(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                        <div className="mt-4  ">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                            </div>
                            <input name='lastName' value={userInfo.lastName} type="text" onChange={(e) => dispatch(setLastName(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">User name</label>
                        </div>
                        <input name=' username' value={userInfo.userName} type="username" onChange={(e) => dispatch(setUserName(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">email</label>
                        </div>
                        <input name='email' value={userInfo.email} type="email" onChange={(e) => dispatch(setEmail(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Date of birth</label>
                        </div>
                        <input name='dateOfBirth' value={userInfo.dateOfBirth} type="date" onChange={(e) => dispatch(setDOB(e.target.value))} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>

                    <div className='text-red-500 text-sm text-center pt-4'>
                        {/* {errMessage} */}
                    </div>
                    <div className='text-red-500 text-sm text-center pt-4'>
                        {/* {successMessage} */}
                    </div>
                    <div className="">
                        <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded-md hover:bg-gray-600">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserInformation