import React, { useState } from 'react'
import Brandlogo from './../../assets/logos/logo.png'
import { HiMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
const Navbar = () => {
  const [Toogle, setToogle] = useState(false)

  const toogle = () => {
    setToogle(!Toogle)
    console.log(Toogle)
  }

  return (
    <div className="relative">
      <nav className="flex flex-col md:flex-row  py-2 justify-between  items-center md:container mx-auto">
        <div className={Toogle ? 'hidden' : 'block'}>
          <img style={{ width: '30%' }} src={Brandlogo} alt="Brand logo" />
        </div>

        <div className={Toogle ? 'block' : 'hidden'}>
          <img
            style={{ width: '40%', margin: 'auto' }}
            src={Brandlogo}
            alt="Brand logo"
          />
        </div>

        <div className="nav_manu hidden md:block">
          <ul className="list-none flex justify-between">
            <li className="px-2 mr-8 font-semibold cursor-pointer">Home</li>
            <li className="px-2 mr-8 font-semibold cursor-pointer whitespace-nowrap">
              Contact Us
            </li>
            <li className="px-2 mr-8 font-semibold cursor-pointer">Works</li>
            <li className="px-2 mr-8 font-semibold cursor-pointer">Feature</li>
            <li className="px-2 mr-8 font-semibold cursor-pointer">login</li>
          </ul>
        </div>

        <div className={Toogle ? 'block h-screen w-11/12' : 'hidden'}>
          <ul className="list-none flex flex-col items-center h-4/5 justify-around  text-center ">
            <li
              onClick={toogle}
              className="px-2 my-4 font-semibold cursor-pointer"
            >
              Home
            </li>
            <li className="px-2 my-4 cursor-pointer font-semibold whitespace-nowrap">
              Contact Us
            </li>
            <li className="px-2 my-4 font-semibold cursor-pointer">Works</li>
            <li className="px-2 my-4 font-semibold cursor-pointer ">Feature</li>
            <li className="px-2 my-4 font-semibold cursor-pointer">login</li>
          </ul>
        </div>
      </nav>

      {/* hubburger  */}
      <div className="absolute top-3 right-9 md:hidden">
        {!Toogle ? (
          <HiMenu onClick={toogle} size={30} className=""></HiMenu>
        ) : (
          <FaTimes onClick={toogle} size={30} className=""></FaTimes>
        )}
      </div>
    </div>
  )
}

export default Navbar