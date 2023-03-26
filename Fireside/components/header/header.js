import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './fireside_text_logo.png'
import Image from 'next/image'
import styles from './header.module.css';
import { useAuth } from '../../context/AuthUserContext';
import White_Button from '../white_button/white_button';

function Header() {
  const {authUser, signIn} = useAuth()
  console.log(authUser)
  return (
    <div id={styles.headerContainer}>
        <Image
          id={styles.headerLogo}
          src={logo}
          placeholder="blur" // Optional blur-up while loading
        />

      <div id = {styles.headerRightSide}>
        <a href = "http://fireside.bio/"><h1 class = {styles.headerLink}>Events</h1></a>
        <a href = "https://gmail.com/"><h1 class = {styles.headerLink}>Contact</h1></a>
        <White_Button button_title="Login" className = "landing_header_button" onClick={signIn}></White_Button>
      </div>
    </div>
  );
}

export default Header;
