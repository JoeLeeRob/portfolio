import Image from 'next/image'
import { Reenie_Beanie } from 'next/font/google'

const reenieBeanie = Reenie_Beanie({
    subsets: ['latin'],
    weight: '400'
  })

export default function Header() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                <Image
                    src='/images/jr-logo.svg'
                    alt='Joseph Robinson Logo'
                    width={75}
                    height={75}
                />
                </div>
                <ul className="flex gap-8 text-xl">
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
                <li>link4</li>
                </ul>
          </div>
          <div className="relative flex justify-center items-center p-24">
            <p className="text-6xl"><span className="line-through">Joseph</span> Robinson</p>
            <span className={`${reenieBeanie.className} absolute text-7xl top-[15%] left-[40%] transform rotate-[340deg]`}>Joe</span>
          </div>
          <blockquote><p>"Code is like humor. When you have to explain it, it's bad" -Cory House</p></blockquote>
        </div>  
    )
}