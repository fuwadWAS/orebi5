import React from 'react'

const Paragrapg = ({text,className}) => {
  return (
    <div className={`${className} font-regular font-DM text-[#767676] text-[16px] leading-[30px]`}>{text}</div>
  )
}

export default Paragrapg