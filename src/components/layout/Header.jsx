import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isLoggedInSelector, logOut } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(isLoggedInSelector)
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const LogOut = () => {
    localStorage.removeItem("user");
    dispatch(logOut())
  }
  return (
    <div className=" w-full py-6 text-white  ">
      <div className="flex items-center py-5 ">
        <div className='flex items-center gap-x-5 '>
          <Link to="/">
            <img width={85} height={85} src="http://opac.nlv.gov.vn/pages/opac/img/logo.png" alt="" />
          </Link>
          <div className='font-semibold text-xl ' >OPAC | TRA CỨU TÀI LIỆU</div>
        </div>
        <div className='ml-auto'>{
          isLoggedIn
            ? (<div className='flex gap-x-2'>
              <Link to="/userbookorder" width={5} height={5} className=' item-center justify-center bg-white cursor-pointer opacity-90 rounded-full ' key="index">{username} ucon</Link>
              <div onClick={LogOut} className=' cursor-pointer opacity-70 rounded-lg px-3 py-2 uppercase ml-auto font-semibold text-sm'>Log out</div>
            </div>)
            : <Link to='/login' className='uppercase ml-auto font-semibold text-sm'>
              <div className='cursor-pointer rounded-lg opacity-70 text-teal-600 bg-white px-3 py-2'>Login</div>
            </Link>
        }
        </div>
      </div>
    </div>
  )
}

export default Header