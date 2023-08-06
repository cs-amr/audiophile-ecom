import React from 'react'

export default function CartIcon() {
    return (
        <div className='w-[24px] h-[22px] relative' >
            <img src="/icon-cart.svg" alt="" />
            <div className='absolute bg-secClr -right-2 -top-2  rounded-full text-white h-[10px] w-[10px] text-center p-[10px] font-semibold flex items-center justify-center'>1</div>
        </div>
    )
}
