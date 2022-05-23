import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

  return (
    <div className="bg-[url('assets/background.jpg')] w-full py-5 text-white ">
      <div className='flex items-center px-10'>
          <Link className='flex items-center gap-x-5 cursor-pointer ' to='/' >
            <div>
              <img width={85} height={85} src="http://opac.nlv.gov.vn/pages/opac/img/logo.png" alt="" />
            </div>
            <div className='font-semibold text-xl ' >OPAC | TRA CỨU TÀI LIỆU</div>
          </Link>
          <Link to="/login" className='uppercase ml-auto font-semibold text-sm'>
            Thư viện quốc gia Việt Nam
          </Link>
        </div>
    </div>
  )
}

export default Header