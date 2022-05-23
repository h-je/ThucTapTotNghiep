import React,{useEffect, useState} from 'react'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { resetpassword } from '../../services/auth.service'


const ResetPassword = () => {
    // const [errMessage, setErrMessage] = useState('')
    // const [username, setUsername] = useState('')
    const [newPassword , setNewPassword] = useState('')
    const [newPasswordConfirm , setNewPasswordConfirm] = useState('')
    const { search } = useLocation('')
    const [code , setCode] = useState('')
    const params = useMemo(() => new URLSearchParams(search), [search])
    
    const handleReset = (e)=>{
        e.preventDefault()
        setCode(params.get('code'))
        resetpassword(code, newPassword).then(()=>{
            alert('thanhcong')
        })
        .catch(()=>{
            alert('thatbai')
        })
        
    }
    


    return (
        <div>
            <div className="py-5 bg-gradient-to-r from-red-300 to-gray-300">
                <div className="flex bg-white rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('assets/library.jpeg')] " ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <div>forgot pasword</div>
                        <form onSubmit={handleReset} >
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">New password</label>
                                <input placeholder='username or email' name='email' onChange={e => setNewPassword(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Conform Password</label>
                                <input placeholder='username or email' name='email' onChange={e => setNewPasswordConfirm(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
                            </div>
                            <div className='text-red-500 text-sm text-center pt-4'></div>
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

export default ResetPassword