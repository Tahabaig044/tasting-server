"use client"
import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import heroimg from "../../public/heroimgg.png"
import { FaPinterestP } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
import { PiUserBold } from 'react-icons/pi';
const Hero = () => {
  return (
    <div className='bg-cover bg-center h-[950px] ' style={{ backgroundImage: "url('hero1.jpg')" }}>
      <div className='bg-[#0d0d0dd8] h-[950px]'>


        <div className="w-full flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px] ">
          <div className="w-full h-[50px]  text-white flex justify-center items-center px-4">
            <h2 className="text-[24px] font-bold"><span className="text-[#FF9F0D]">Food</span>Tuck</h2>
          </div>
          <div className="hidden lg:flex justify-between items-center">
            <ul className='text-whitetext flex gap-[10px] font-medium leading-[24px] text-[15px] '>
              <Link href={"/"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello '>Home</li></Link>
              <Link href={"/menu"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello'>Menu</li></Link>
             <Link href={"/blog"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello'>Blog</li></Link> 
              <Link href={"/chef"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello'>Chef</li></Link>
              <Link href={"/aboutus"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello'>About</li></Link>
              <Link href={"/shop"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello'>Shop</li></Link>
              <Link href={"/signin"}><li className='w-[45px] h-[24px] font-medium leading-[24px] hover:text-bordercoloryello'>Signin</li></Link>
            </ul>
            <div className="flex items-center gap-[15px]">
              <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
                />
                <IoSearch className="text-whitetext w-[20px] h-[20px]" />
              </div>

              {/* Shopping Bag */}
              <HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" />
            </div>


            {/* Mobile Navigation */}
          </div>
          <div className="lg:hidden flex justify-between  px-[30px] ">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu className="text-whitetext text-[34px] cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col gap-[10px] font-medium text-[16px] ">
                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/">Home</Link></li>
                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/menu">Menu</Link></li>

                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/chef">Chef</Link></li>

                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/shop">Shop</Link></li>
                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/signin">Signin</Link></li>
                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/aboutus">About</Link></li>
                  <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/blog">Blog</Link></li>
                </ul>
              </SheetContent>
            </Sheet>
            <div className="flex gap-4 ">
          <h1><IoSearch className="text-whitetext text-[24px] cursor-pointer" /></h1>
          <h1><Link href={"/signup"}><PiUserBold className="text-whitetext text-[24px] cursor-pointer" /></Link></h1>
          <h1><Link href={"/shoppingcart"}><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /></Link> </h1>
          </div>
          </div>
          <div className='lg:flex lg:gap-[50px] lg:px-[100px] px-6 lg:pt-[101px] pt-[50px]  '>
            <div className='lg:flex flex-col lg:gap-[100px]  gap-4 lg:w-[25.28px] lg:h-[492px] md:hidden sm:hidden hidden '>
              <div className='lg:w-[108px] border-[1px] rotate-90 text-whitetext lg:block hidden'></div>
              <div className='text-[] lg:ml-[45px] flex-col justify-between flex gap-[20px] '>
                <a href="">< FaFacebookF className='text-whitetext' /></a>
                <FaTwitter className='text-bordercoloryello ' />
                <FaPinterestP className='text-whitetext' />
              </div>
              <div className='w-[108px] border-[1px] lg:block hidden rotate-90 text-whitetext'></div>
            </div>
            <div className='lg:w-[472px] w-[300px] lg:h-[356px] rounded-[30px] flex flex-col lg:gap-[20px] gap-[25px] '>
              <h1 className='text-bordercoloryello font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium '>Its Quick & Amusing!</h1>
              <h1 className='font-helvetica font-bold lg:text-[50px] text-[35px] lg:leading-[68px] text-whitetext'><span className='text-bordercoloryello'>Th</span>e Art of speed food Quality</h1>
              <p className='font-normal text-[16px] leading-6 text-whitetext lg:w-[380px] h-[48px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis esse autem deserun</p>
              <Link href="menu">
              <button className='lg:w-[150px] w-[100px] h-[30px] lg:h-[50px] rounded-[30px] bg-bordercoloryello text-whitetext'>See Menu</button>
              </Link>
            </div>
            <div>
              <Image src={heroimg} alt='' className='"w-[200px] h-auto lg:w-[600px] lg:h-[430px] object-cover rounded-[20px] lg:rounded-[30px]' />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero
