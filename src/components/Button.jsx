import React from 'react'

export default function Button({text, textStyle}) {
  return (
    <button className={`${textStyle} border-red-400 border-2 px-10 p-2 rounded-full hover:bg-red-400 hover:text-white ease-in duration-100`}>{text}</button>
  )
}
