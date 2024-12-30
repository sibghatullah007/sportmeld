'use client'
import { useState } from 'react'
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { Inter_Tight } from "next/font/google";

// Move the font definition to the top level
const interTight = Inter_Tight({
    subsets: ["latin"],
});

const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <div className={`flex justify-center items-center h-[100px] w-full px-10 relative z-20 ${interTight.className}`}>
            <div className="relative flex justify-between items-center w-full">
                <div className="h-full flex items-center">
                    <Image src={'logo.svg'} height={50} width={100} alt="Logo" />
                </div>
                <div className={`${menuStatus ? 'flex flex-col justify-between items-center gap-6 opacity-100 absolute z-30 top-0 left-[35%] p-6 px-8 transform translate-y-8 transition duration-400 ease-in-out bg-black' : 'opacity-0 md:opacity-100 justify-between items-center gap-6 md:flex'}`}>
                    <HeaderMenu link={''} title={'Home'} />
                    <HeaderMenu link={'pricing'} title={'Pricing'} />
                    <HeaderMenu link={'blog'} title={'Blog'} />
                    <HeaderMenu link={'contact'} title={'Contact'} />
                    <HeaderMenu link={'pages'} title={'Pages'} list={true} options={['Home', 'Pricing', 'Blog', 'Contact']} />
                    {
                        menuStatus && <div className="text-sm flex sm:hidden">
                            <Link href="/login">
                                Login
                            </Link>
                        </div>}
                    {menuStatus && <div className="flex sm:hidden">
                        <Link href="/signup" className="bg-white text-black rounded-full px-3 py-2">
                            Signup
                        </Link>
                    </div>

                    }
                </div>
                <div className="flex justify-end items-center gap-6">
                    <div>
                        <FaCartShopping className="text-white" />
                    </div>
                    <div className="text-sm hidden sm:flex">
                        <Link href="/login">
                            Login
                        </Link>
                    </div>
                    <div className="hidden sm:flex">
                        <Link href="/signup" className="bg-white text-black rounded-full px-3 py-2">
                            Signup
                        </Link>
                    </div>
                    <div onClick={() => { setMenuStatus(!menuStatus) }}>
                        <button onClick={() => { setMenuStatus(!menuStatus) }} className="bg-zinc-800 text-white rounded-full px-5 py-2 block md:hidden">
                            {menuStatus?<RxCross2 className="text-xl" />:<IoMenu className="text-xl" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
