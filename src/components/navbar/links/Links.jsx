"use client";

import styles from "../links/links.module.css";
import NavLink from "../navLink/NavLink";
import { useState } from 'react';

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false)
  
  // TEMPORARY
  const session = true;
  const isAdmin = false;

  return (
    <div className={styles.container}> 
      <div className={styles.links}>
        {links.map((link)=>(
          <NavLink item={link} key={link.title}/> 
        ))}{
        session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }}/>}
            <button className={styles.button} > <span> Learn More </span></button>
          </>
        ) : (
            <NavLink item={{ title: "Login", path: "/login" }}/>
        )}
      </div>
      <button className={styles.menuButton} onClick={()=>setOpen(prev => !prev)}>Menu</button>
      {
      open && 
      <div className={styles.mobileLinks}>
      {links.map((link) => (
      <NavLink item={link} key={link.title}/> 
      ))}
      </div>
      }
  </div>
  )
}

export default Links;