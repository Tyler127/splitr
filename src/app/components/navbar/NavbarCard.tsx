'use client'

import { usePathname} from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

export default function NavbarCard(this: any, props: { text: string, href: string }) {
  const styles = "inline-block p-3 rounded-full m-2 float-right hover:bg-lime-500"
  const activeStyles = styles + " bg-lime-500"
  const pathname = usePathname();

  return (
    <li className={props.href == pathname ? activeStyles : styles}>
        <Link href={props.href}>{props.text}</Link>
    </li>
  );
}
