import React from 'react'
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const Header = () => {
  return (
       <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-bordercoloryello">Food <span className='text-white'>Tuck</span></h1>
          <nav className="lg:block hidden">
            <ul className="flex space-x-6">
            <li><Link href="/" className='hover:text-bordercoloryello'>Home</Link></li>
            <li><Link href="/menu " className='hover:text-bordercoloryello'>Menu</Link></li>
            <li><Link href="/blog" className='hover:text-bordercoloryello'>Blog</Link></li>
            <li><Link href="/chef" className='hover:text-bordercoloryello'>Chef</Link></li>
            <li><Link href="/aboutus" className='hover:text-bordercoloryello'>About</Link></li>
            <li><Link href="/shop" className='hover:text-bordercoloryello'>Shop</Link></li>
            <li><Link href="/signin" className='hover:text-bordercoloryello'>Signin</Link></li>
            </ul>
          </nav>
          <div className="flex gap-4 ">
          <h1><IoSearch className="text-whitetext text-[24px] cursor-pointer hover:text-bordercoloryello" /></h1>
          <h1><Link href={"/signup"}><PiUserBold className="text-whitetext text-[24px] cursor-pointer hover:text-bordercoloryello" /></Link></h1>
          <h1><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /> </h1>
          </div>
         <div className="lg:hidden block">
         <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className="text-whitetext text-[24px] cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-blackkk">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/ourchef">Chef</Link></li>
            <li><Link href="/aboutus">About</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/signin">Signin</Link></li>
            </ul>
          </SheetContent>
        </Sheet> 
         </div>
        </div>
      </header>
  )
}

export default Header