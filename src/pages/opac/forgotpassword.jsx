import React, { useState } from 'react'
import { forgotPassword } from '../../services/auth.service'

const ForgotPassword = () => {
    const [submit,] = useState(true)
    const [errMessage, setErrMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [username, setUsername] = useState('')
    const handleForgot = (e) => {
        e.preventDefault()
        setErrMessage('')
        console.log({username});
        forgotPassword({ username, siteUrl: "http://localhost:3000/resetpassword" })
            .then(() =>
                setSuccessMessage("Success!")                
            )
            // .catch((error) => {
            //     console.log(error);
            //     setErrMessage(error.response.data.message)
            // })
    }
    return (
        <div>
            <div className="py-5 bg-gradient-to-r from-red-300 to-gray-300">
                <div className="flex bg-white rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('assets/library.jpeg')] " ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <div>forgot pasword</div>
                        <form onSubmit={handleForgot} >
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input placeholder='username or email' name='email' value={username} onChange={e => setUsername(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                            </div>
                            <div className='text-red-500 text-sm text-center pt-4'>{successMessage}</div>
                            <div className="mt-3">
                                <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">resetpassword</button>
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
export default ForgotPassword