import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useOnclickOutsite from "../../hooks/useOnclickOutSide";
import { isLoggedInSelector, logOut } from '../../redux/slice/auth';
import UserModal from '../Modal/UserModal';

const Header = () => {
  const isLoggedIn = useSelector(isLoggedInSelector)
  const dispatch = useDispatch()


  const { nodeRef, show, setShow } = useOnclickOutsite()
  // const [username, setUsername] = useState("")
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
            ? (<div className='flex gap-x-2 relative'>
              <div className=' item-center justify-center bg-white cursor-pointer opacity-90 rounded-full h-10 w-10 mr-10 pointer' ref={nodeRef} onClick={() => setShow(!show)}></div>
              <UserModal show={show} />
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