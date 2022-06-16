import React, { useEffect, useState } from 'react'
import { PlusCircle, Search, Zap } from 'react-feather'
import { Link } from 'react-router-dom'
import { changeTab } from '../../redux/slice/ui'
// import { isLoggedInSelector, logOut } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../services/auth.service';
import Header from "../../components/layout/Header"
import Card from "../../components/Card"
import { getAll } from '../../services/reservation.server';

const Home = () => {
  const [value, setValue] = useState('')
  const [books, setBooks] = useState([])
  const [select, setSelect] = useState('title')
  const dispatch = useDispatch()
  useEffect(() => {
    getAll()
      .then((data) => {
        setBooks(data.data.content)
        console.log(data.data.content);

      })
  }, [])
  const hanldeSelect = (e) => {
    setSelect(e.target.value)
    console.log(e.target.value);
  }
  const seacrhQuery = () => {
    search({ [select]: value })
      .then((data) => {
        // console.log(data);
        setBooks(data.data.content)
      })
      .catch((data) => {
        console.log({ data });
      })
  }
  // const isLoggedIn = useSelector(isLoggedInSelector)
  // const LogOut = () => {
  //   localStorage.removeItem("user");
  //   dispatch(logOut())
  // }
  return (
    <div>
      <div className="bg-[url('assets/background.jpg')]  bg-cover  bg-center min-h-screen">
        <div className='container text-white'>
          <Header />

          {/* <div className='flex items-center pt-5'>
          <div className='flex items-center gap-x-5 '>
            <div>
              <img width={85} height={85} src="http://opac.nlv.gov.vn/pages/opac/img/logo.png" alt="" />
            </div>
            <div className='font-semibold text-xl ' >OPAC | TRA CỨU TÀI LIỆU</div>
          </div>
          {
            isLoggedIn
              ? (<div>
                <div onClick={LogOut} className=' cursor-pointer  rounded-lg px-3 py-2 uppercase ml-auto font-semibold text-sm'>Log out</div>
                <div>

                </div>
              </div>)
              : <Link to='/login' className='uppercase ml-auto font-semibold text-sm'>
                <div className='cursor-pointer rounded-lg  px-3 py-2'>Login</div>
              </Link>
          }
        </div> */}

          <div className='flex gap-x-12 mt-12 '>
            {/* <Link className='flex flex-col gap-y-3 cursor-pointer ' to="/" onClick={() => dispatch(changeTab(0))}>
            <Zap className='mx-auto ' size={30} strokeWidth='3' />
            <div className='font-bold uppercase  '>Tim Nhanh</div>
          </Link> */}
            {/* <Link className='flex flex-col border-x-2 px-5 gap-y-3 cursor-pointer' to="/opac" onClick={() => dispatch(changeTab(1))} >
            <Search className='mx-auto ' size={30} strokeWidth='3' />
            <div className='font-bold uppercase  '>Co ban</div>
          </Link>
          <Link className='flex flex-col gap-y-3 cursor-pointer ' to="/opac" onClick={() => dispatch(changeTab(2))}  >
            <PlusCircle className='mx-auto ' size={30} strokeWidth='3' />
            <div className='font-bold uppercase  '>Nang cao</div>
          </Link> */}
          </div>
          <div className='flex rounded-xl py-8 opacity-75 text-black gap-x-1 bg-white px-8 my-20'>
            <select onChange={hanldeSelect} name="" id="" className='border-[1px] border-black rounded-md'>
              <option value='title'>Nhan đề</option>
              <option value='author'>Tác giả</option>
              <option value='tag'>Từ khóa</option>
              <option value='isbn'>Số ISBN</option>
              <option value='cspl'>Chỉ số phân loại</option>
              <option value='year'>Năm xuất bản</option>
            </select>
            <input onChange={(e) => setValue(e.target.value)} type="text" className='flex-1 border-[1px] border-black rounded-md' />
            <button onClick={seacrhQuery} type='submit' className='px-3 rounded-lg flex items-center gap-x-3 bg-blue-500 py-1 hover:bg-lime-300'>
              <Search size={19} />
              <div className=' ' >
                Tìm kiếm
              </div>
            </button>
            <div>
            </div>
          </div>
        </div>
      </div>
      {books && books.map((book, index) => <Card key={book.id} index={index} book={book} />)}
    </div>

  )
}

export default Home