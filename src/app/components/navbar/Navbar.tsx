import Image from "next/image";
import Link from "next/link";
import NavbarCard from "./NavbarCard";

export default function Navbar() {
    return (
        <div className="flex justify-center border-b-2 border-black">
            <ul className='p-0 ml-11 mr-11 inline-block list-none w-2/3'>
                {/* TODO: get logo image working */}
                {/* <li className="inline-block p-3">
                    <Image
                        src="/splitr.png"
                        width={100}
                        height={100}
                        alt="splitr logo"
                    />
                </li> */}
                <li className="inline-block p-3 rounded-full m-2 font-extrabold text-xl"><a href="/">splitr</a></li>
                <NavbarCard text="Login" href="/login" />
                <NavbarCard text="Receipts" href="/receipts" />
            </ul>
        </div>
    );
}
