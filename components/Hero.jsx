import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 justify-center'>
        <div className="w-3/5 h-[400px] flex">
            <div className="w-1/2 items-center flex">
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-neutral-950 text-opacity-50">Lorem ipsum, dolor sit amet </div>
                    <div className="font-bold text-3xl">
                        We Are Consulting For Your Business Finances
                    </div>
                    <div className="text-sm text-neutral-950 text-opacity-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat quisquam accusamus molestias maiores 
                    </div>
                    <div className="mt-3 px-3 py-2 bg-blue-400 w-fit rounded-md text-neutral-50 cursor-pointer hover:bg-blue-600">
                        Start Now
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <Image src={"/photo1.png"} alt="hero" width={500} height={400} className='w-full h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default Hero