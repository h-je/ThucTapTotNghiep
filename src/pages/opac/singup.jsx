import React, { useEffect, useState } from 'react'
import { register } from '../../services/auth.service'

const Singup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [submit, setSubmit] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    useEffect(() => {
        if (password && confirmPassword && password === confirmPassword) {
            setSubmit(true);
            return
        }
        setSubmit(false)
    }, [password, confirmPassword])
    const handleLogin = (e) => {
        e.preventDefault()
        setErrMessage('')
        if (!submit) {
            return null;
        }
        register({ firstName, lastName, username, email, password, dateOfBirth, siteUrl: "http://localhost:3000/verify" })
            .then((data) =>
                setSuccessMessage("Success!")
            )
            .catch((error) => {
                console.log(error);
                setErrMessage(error.response.data.message)

            })
    }
    return (
        <div className=''>
            <div className="py-6 bg-gradient-to-r from-red-200 to-lime-300" fill="#f67c1a">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('assets/library.jpeg')] " ></div>
                    <div className="w-full p-3 lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-700 text-center">Sign Up</h2>
                        <div className="mt-1 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <p className="text-sm text-gray-600 text-center">Quickly and easy!</p>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleLogin} >
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
                                <div className="mt-4 ">
                                    <div className="flex justify-between">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                                    </div>
                                    <input name='password' value={confirmPassword} type="password" onChange={e => { setConfirmPassword(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Date of birth</label>
                                </div>
                                <input name='dateOfBirth' value={dateOfBirth} type="date" onChange={e => { setDateOfBirth(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                            </div>

                            <div className='text-red-500 text-sm text-center pt-4'>{errMessage}</div>
                            <div className='text-red-500 text-sm text-center pt-4'>{successMessage}</div>
                            <div className="">
                                <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded-md hover:bg-gray-600">Sign Up</button>
                            </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singup