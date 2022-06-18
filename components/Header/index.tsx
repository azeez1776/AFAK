import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pattern from '../../public/pattern.png'

const Header = () => {
  return (
    <div className="flex justify-between items-start w-full">
        <Image src={pattern} alt="pattern" width={180} height={200} />
        <div className="flex space-x-6 text-blue px-12 py-12 cursor-pointer">
            <Link href="/about">
            <a>About</a>
            </Link>
            <Link href="/contact">
            <a>Contact Us</a>
            </Link>
        </div>
    </div>
  )
}

export default Header