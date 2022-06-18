import Image from 'next/image'
import React from 'react'
import pattern from '../../public/pattern.png'

const Header = () => {
  return (
    <div className="flex justify-between w-full">
        <Image src={pattern} alt="pattern" width={180} height={200} />
        <div className="flex space-x-6 text-blue px-12 py-12 cursor-pointer">
            <a>About</a>
            <a>Contact US</a>
        </div>
    </div>
  )
}

export default Header