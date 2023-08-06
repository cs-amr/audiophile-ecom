import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon'
import NavBars from './NavBars'
import Image from 'next/image'
export default function Header() {
    return (
        <header className='h-[89px]  bg-primaryClr px-6'>
            <div className='h-full max-w-[1160px] mx-auto border-b py-8 border-[rgba(255,255,255,0.1)] flex justify-between'>
                <NavBars />
                <Image src={"/logo.svg"} width={150} height={50} alt='audiophile' />

                <nav className='text-white font-semibold md:block hidden'>
                    <Link className={`mx-4 hover:text-secClr duration-75`} href={"/"}>HOME</Link>
                    <Link className={`mx-4 hover:text-secClr duration-75`} href={"/headphones"}>HEADPHONES</Link>
                    <Link className={`mx-4 hover:text-secClr duration-75`} href={"/speakers"}>SPEAKERS</Link>
                    <Link className={`mx-4 hover:text-secClr duration-75`} href={"/earphones"}>EARPHONES</Link>
                </nav>

                <CartIcon />
            </div>

        </header>
    )
}
