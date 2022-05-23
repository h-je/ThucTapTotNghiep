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
            Địa chỉ: Số 31 – Tràng Thi – Hoàn Kiếm - Hà Nội
          </div>
          <div className='font-normal text-md '>
            Điện thoại: 04-38255397 (tổng đài). E-mail: info@nlv.gov.vn
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer