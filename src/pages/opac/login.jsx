import React, { useState } from 'react';
import authApi from '../../api/authApi';
import { parseTotringify } from '../../ultils/indes';
import { login } from '../../services/auth.service';
import { loginSuccess, isLoggedInSelector, loginFail } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [errMessage, setErrMessage] = useState('')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const Login = ({ username, password }) => {
    return login(username, password).then(
      (response) => {
        dispatch(loginSuccess(response))
        localStorage.setItem("user", JSON.stringify(response.data));
        history.push('/')
      },
    )
      .catch((error) => {
        console.log(error);
        setErrMessage(error.response.data.message)
        dispatch(loginFail())
      })

  }
  const handleLogin = (e) => {
    e.preventDefault()
    Login({ username: username, password: password })
  }


  return (
    <div>
      <div className="py-5 bg-gradient-to-r from-red-300 to-gray-300">
        <div className="flex bg-white rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('assets/library.jpeg')] " ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Opac</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <a href="/google" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                  <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                  <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a href="/" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleLogin} >
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input placeholder='username or email' name='email' value={username} onChange={e => setUsername(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                </div>
                <input placeholder='password' name='password' value={password} onChange={e => { setPassword(e.target.value) }} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
              </div>
              <div className='text-red-500 text-sm text-center pt-4'>{errMessage}</div>
              <Link to="/forgotpassword" className='text-sm text-gray-500 '>forgot password?</Link>
              <div className="mt-3">
                <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/singup" className="text-xs text-gray-500 uppercase">or sign up</Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage