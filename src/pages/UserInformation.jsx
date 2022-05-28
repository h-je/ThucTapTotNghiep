import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../redux/slice/auth'

const UserInformation = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const handleUserInfo = (e) => {
        e.preventDefault()
        setErrMessage('')

    }
    return (
        <div>
            <div className=''>
                <form onSubmit={handleUserInfo} >
                    <div className='flex gap-x-2  grid-cols-2 '>
                        <div className="mt-4 ">
                            <label type="text" className="block text-gray-700 text-sm font-bold mb-2">First name</label>
                            <input name='firstName' value={firstName} type="text" onChange={e => setFirstName(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                        <div className="mt-4  ">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                            </div>
                            <input name='lastName' value={lastName} type="text" onChange={e => { setLastName(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">User name</label>
                        </div>
                        <input name='username' value={username} type="username" onChange={e => { setUsername(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">email</label>
                        </div>
                        <input name='email' value={email} type="email" onChange={e => { setEmail(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                    </div>
                    <div className='flex gap-x-2  grid-cols-2 '>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                            </div>
                            <input name='password' value={password} type="password" onChange={e => { setPassword(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Date of birth</label>
                        </div>
                        <input name='dateOfBirth' value={dateOfBirth} type="date" onChange={e => { setDateOfBirth(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
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