"use client"

import Link from "next/link";
import { styles } from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link 
        href={item.path} 
        key={item.title} 
        className={`${styles.container} ${
        pathName === item.title $$ styles.active
        }`}
        >
        {item.title}   
        <div className={styles.container}>NavLink</div>
        </Link>
    );
};

export default NavLink;
