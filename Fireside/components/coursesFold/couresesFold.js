import React from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import profilePicture from './profilePhoto.png'
import styles from './coursesFold.module.css';

function couresesFold(props) {

  return (
    <div id={styles.coursesFoldContainer}>
      <div id={styles.coursesFoldContainerLeft}>
        <Image
          id={styles.profilePicture}
          src={profilePicture}
          placeholder="blur" // Optional blur-up while loading
        />
        <h1 id = {styles.usernameTitle}>Daniel Zhang</h1>
        <p id = {styles.userEmail}>danzhang@gmail.com</p>
      </div>
      <div id={styles.coursesFoldContainerRight}>
        <h1 id = {styles.courseFoldTitle}>My Courses</h1>
        <p id = {styles.courseFoldParagraph}>This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that  This is some text explaining how the product works.  This is some text.This is some text explaining how the product works and all that  This is some text explaining how the product works. This is some text explaining how the product works and all that  This is some text explaining how the product works.  This is some text.</p>
      </div>
    </div>
  );
}

export default couresesFold;