import React from 'react'

const Footer = () => {
  return (
    <div className='relative '>
      <div className='flex inset-x-0 bottom-0 justify-center items-center '>
        <div className=''>
          <img src="http://opac.nlv.gov.vn/pages/opac/img/logo.png" alt="" />
        </div>
        <div className='flex-col justify-center'>
          <div className='font-semibold text-md '>
            THƯ VIỆN QUỐC GIA VIỆT NAM
          </div>
          <div className='font-normal text-md '>
            Địa chỉ: TCH13-Phường-TCH-Quận 12
          </div>
          <div className='font-normal text-md '>
            Điện thoại: 0338786540 (tổng đài). E-mail: dong.nguyentanngoc@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer